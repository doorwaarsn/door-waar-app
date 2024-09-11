import { useState, useCallback } from "react";
import { useComments } from "../../contexts/Comment/Comment.provider";
import { API_URL } from "../../env";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";


interface CommentProps {
  worker?: {
    id: number;
    avatar?: { image: string }[];
    fullName: string;
    phoneNumber: string;
    profession: { name: string };
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
      <div
          className="flex-1 h-[444px] sm:h-auto rounded-[8px] border border-[#eff4fa] bg-white flex flex-col justify-between items-center py-5">
        <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2 px-5">
          <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
            Commentaires
          </h6>
        </div>
        <div className="w-full overflow-y-auto max-h-[300px] md:max-h-[400px]">
          {comments.slice(-10).map((item: CommentProps, index: number) => (
              <div
                  key={index}
                  onClick={() => openSlider(item)}
                  className="w-full flex items-center gap-2 hover:bg-[#eff4fa] px-5 py-2 cursor-pointer"
              >
                <div className="rounded-full overflow-hidden w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]">
                  <img
                      src={`${API_URL}/resources/${item.worker?.avatar?.[0]?.image || "default.png"}`}
                      alt={item.client?.fullName}
                      className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col items-start gap-4 w-[85%] sm:w-[90%]">
                  <h5 className="text-[12px] sm:text-[13px] font-normal leading-[0.67] text-left text-[#44464b] flex gap-3 w-full justify-between items-center">
                    {item.client?.fullName}{" "}
                    <span className="text-[10px]">{item.client?.phoneNumber}</span>
                  </h5>
                  <p className="text-[11px] sm:text-[12px] font-normal leading-[0.67] text-left text-[#8f9bb3] flex items-center gap-3 justify-between w-full">
                    <TruncatedText text={item?.comment} maxLength={20}/>
                    <span className="text-[10px]">
              {formatDate(item?.createdAt)}
            </span>
                  </p>
                </div>
              </div>
          ))}
        </div>
        {isSliderOpen && selectedComment && (
            <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <div
                  className="relative w-[95%] max-w-[500px] h-[80%] max-h-[400px] bg-white flex flex-col gap-4 p-4 rounded-md">
                <button
                    onClick={closeSlider}
                    className="absolute top-5 right-5 text-black"
                >
                  <IoIosClose size={25}/>
                </button>
                <div className="w-full flex flex-col h-full gap-3">
                  <div className="flex w-full gap-4">
                    <Link
                        to={`/dashboard/workers/${selectedComment.worker?.id}`}
                        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover border-2 border-blue-100 rounded-md"
                    >
                      <img
                          src={`${API_URL}/resources/${selectedComment.worker?.avatar?.[0]?.image || "default.png"}`}
                          alt={selectedComment.worker?.fullName}
                          className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex flex-col justify-start gap-1">
                      <h5 className="text-[14px] font-semibold">
                        {selectedComment.worker?.fullName}
                      </h5>
                      <p className="text-[13px]">
                        {selectedComment.worker?.profession?.name}
                      </p>
                      <p className="text-[13px]">
                        {selectedComment.worker?.phoneNumber}
                      </p>
                      <Link
                          to={`/dashboard/workers/${selectedComment.worker?.id}`}
                          className="flex text-[10px] justify-center items-center gap-1 p-1 rounded-[4px] text-white w-[70px] bg-[#14ABE3]"
                      >
                        Voir plus <IoIosArrowForward size={12}/>
                      </Link>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#44464b] mt-2">
                    {selectedComment?.comment}
                  </p>
                  <span className="text-[10px] text-[#8f9bb3]">
            {formatDate(selectedComment?.createdAt)}
          </span>
                  <div className="flex gap-3 items-center b-0">
                    <span className="text-[14px] font-semibold">Auteur:</span>
                    <p className="text-[13px]">
                      {selectedComment.client?.fullName},
                    </p>
                    <p className="text-[10px]">
                      {selectedComment.client?.phoneNumber}
                    </p>
                  </div>
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
