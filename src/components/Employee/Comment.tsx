import { useState } from "react";
import { format } from "date-fns";
import { IoIosClose } from "react-icons/io";

const Comment = ({ item }: any) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const closeSlider = () => {
    setIsSliderOpen(false);
  };

  const openSlider = () => {
    setIsSliderOpen(true);
  };

  return (
    <>
      <div
        onClick={() => openSlider()}
        className="w-full h-[50px] border rounded-md flex justify-between items-start p-1 px-2 cursor-pointer "
      >
        <div className="w-[70%] h-full flex items-center gap-2">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-[10px] font-semibold leading-[1.23] text-left text-[#222b45]">
              {item?.client?.fullName}
            </h4>
            <p className="text-[8px] font-normal leading-[1.33] text-left text-[#14ABE3]">
              {item?.client?.phoneNumber}
            </p>
            <p className="text-[8px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
              <TruncatedText text={item?.comment} maxLength={40} />
            </p>
          </div>
        </div>
        <p className="text-[8px] font-normal leading-[1.33] text-left text-[#8f9bb3] mt-2">
          {format(new Date(item?.createdAt), "dd/MM/yyyy - HH:mm")}{" "}
        </p>
      </div>
      {isSliderOpen && (
        <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-[50%] flex items-center justify-center">
            <button
              onClick={closeSlider}
              className="absolute top-5 right-5 text-white"
            >
              <IoIosClose size={25} />
            </button>
            <div className="relative w-[400px] h-[200px] bg-white flex flex-col gap-4 p-4 rounded-md">
              <div className="w-full flex justify-between items-center">
                <h4 className="text-[12px] font-semibold leading-[1.23] text-left text-[#222b45]">
                  {item?.client?.fullName}
                </h4>
                <p className="text-[8px] font-normal leading-[1.33] text-left text-[#8f9bb3] mt-2">
                  {format(new Date(item?.createdAt), "dd/MM/yyyy - HH:mm")}{" "}
                </p>
              </div>

              <p className="text-[10px] font-normal leading-[1.33] text-left text-[#0095ff]">
                {item?.client?.phoneNumber}
              </p>
              <p className="text-[10px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
                {item?.comment}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const TruncatedText = ({ text, maxLength }: any) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return <p>{truncatedText}</p>;
};
export default Comment;
