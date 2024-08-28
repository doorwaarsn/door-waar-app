import { useState, useCallback } from "react";
import { useComments } from "../../contexts/Comment/Comment.provider";
import { API_URL } from "../../env";
import { IoIosClose } from "react-icons/io";

interface CommentProps {
  worker?: {
    avatar?: { image: string }[];
  };
  client: {
    fullName: string;
    phoneNumber: string;
  };
  comment: string;
  createdAt: string;
}

const Balance = () => {
  const { comments } = useComments();
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState<CommentProps | null>(
    null
  );

  const closeSlider = useCallback(() => {
    setIsSliderOpen(false);
    setSelectedComment(null); // Réinitialiser les données sélectionnées
  }, []);

  const openSlider = useCallback((comment: CommentProps) => {
    setSelectedComment(comment);
    setIsSliderOpen(true);
  }, []);

  return (
    <div className="flex-1 h-[444px] rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col justify-between items-center py-5">
      <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2 px-5">
        <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
          Commentaires
        </h6>
      </div>
      {comments.slice(-5).map((item: CommentProps, index: number) => (
        <div
          key={index}
          onClick={() => openSlider(item)}
          className="w-full flex items-center gap-2 hover:bg-[#eff4fa] px-5 py-2"
        >
          <div className="rounded-full overflow-hidden">
            <img
              src={`${API_URL}/resources/${
                item.worker?.avatar?.[0]?.image || "default.png"
              }`}
              alt={item.client.fullName}
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col items-start gap-4 w-[90%]">
            <h5 className="text-[13px] font-normal leading-[0.67] text-left text-[#44464b] flex gap-3 w-full justify-between items-center">
              {item.client.fullName}{" "}
              <span className="text-[10px]">{item.client.phoneNumber}</span>
            </h5>
            <p className="text-[12px] font-normal leading-[0.67] text-left text-[#8f9bb3] flex items-center gap-3 justify-between w-full">
              <TruncatedText text={item.comment} maxLength={20} />
              <span className="text-[10px]">{formatDate(item.createdAt)}</span>
            </p>
          </div>
        </div>
      ))}
      {isSliderOpen && selectedComment && (
        <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-[500px] h-[300px] bg-white flex flex-col gap-4 p-4 rounded-md">
            <button
              onClick={closeSlider}
              className="absolute top-5 right-5 text-black"
            >
              <IoIosClose size={25} />
            </button>
            <div className="w-full flex flex-col">
              <div className="flex w-full gap-4">
                <div className="rounded-full overflow-hidden">
                  <img
                    src={`${API_URL}/resources/${
                      selectedComment.worker?.avatar?.[0]?.image ||
                      "default.png"
                    }`}
                    alt={selectedComment.client.fullName}
                    className="w-[50px] h-[50px] object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h5 className="text-[13px] font-semibold">
                    {selectedComment.client.fullName}
                  </h5>
                  <p className="text-[10px]">
                    {selectedComment.client.phoneNumber}
                  </p>
                </div>
              </div>
              <p className="text-[12px] text-[#44464b] mt-2">
                {selectedComment.comment}
              </p>
              <span className="text-[10px] text-[#8f9bb3]">
                {formatDate(selectedComment.createdAt)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const TruncatedText = ({
  text,
  maxLength,
}: {
  text: string;
  maxLength: number;
}) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  return <span>{truncatedText}</span>;
};

export default Balance;
