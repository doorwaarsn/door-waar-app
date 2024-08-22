import React from "react";
import ArrowUpBlack from "../../assets/icons/arrow-up_black.svg";

const Card = () => {
  return (
    <div className="w-[25%] h-[100px] bg-white rounded-md flex flex-col justify-center items-start px-3 py-4 gap-3 border">
      <p className="text-[13px] font-normal leading-[1.23] text-left text-[#222b45]">
        Web Developer
      </p>
      <h6 className="text-20 font-bold leading-1.2 text-left text-[#222b45]">
        $18,960
      </h6>
      <p className="flex items-center gap-1 text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
        <img src={ArrowUpBlack} alt="" />
        <span className="text-[#ff6623]">15.5%</span>
        Since last month
      </p>
    </div>
  );
};

export default Card;
