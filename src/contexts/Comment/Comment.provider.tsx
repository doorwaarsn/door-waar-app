import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import { fetchRequest, getRequest } from "../../common/request";
import { Comment } from "./Comment.model";

interface CommentContextType {
  comments: any;
  calls: any;
  loading: boolean;
  error: string | null;
  getCommentById: (id: string) => Promise<void>;
  comment: Comment | null;
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

const CommentProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [comment, setComment] = useState<Comment | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetchRequest("reviews-worker/all");
        const allComments = response.data;

        // Filtrer les commentaires où b.worker ou a.worker est null
        const filteredComments = allComments.filter(
          (comment: Comment) => comment.worker !== null
        );

        // Trier les commentaires par date
        const sortedComments = filteredComments.sort(
          (a: Comment, b: Comment) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        // Sélectionner les 5 commentaires les plus récents
        const recentFiveComments = sortedComments.slice(0, 5);
        setComments(recentFiveComments);
      } catch (error: any) {
        setError(error.message || "An error occurred while fetching comments.");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await fetchRequest("callHistory");
        const allCalls = response.data;

        const filteredCalls = allCalls.filter(
          (call: any) => call.worker !== null
        );

        const sortedCalls = filteredCalls.sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        const recentFiveCalls = sortedCalls.slice(0, 7);
        setCalls(recentFiveCalls);
      } catch (error: any) {
        setError(error.message || "An error occurred while fetching comments.");
      } finally {
        setLoading(false);
      }
    };

    fetchCalls();
  }, []);

  const getCommentById = async (id: string) => {
    setLoading(true);
    try {
      const response = await getRequest("professions", id);
      setComment(response.data);
    } catch (error: any) {
      setError(
        error.message || "An error occurred while fetching the comment."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        loading,
        error,
        getCommentById,
        comment,
        calls,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

const useComments = (): CommentContextType => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useComments must be used within a CommentProvider");
  }
  return context;
};

export { CommentProvider, useComments };
