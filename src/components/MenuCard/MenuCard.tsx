import React from "react";
import { Link } from "react-router-dom";

const MenuCard = ({ datas }: any) => {
  return (
    <Link
      to={datas.url}
      className="w-[15%] h-[100px]  p-[20px_69px_25px] rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col  items-center justify-center gap-1"
    >
      <img src={datas.icon} alt="" />
      <h4 className="text-[15px] font-normal leading-[1.07] text-center text-[#8f9bb3]">
        {datas.title}
      </h4>
    </Link>
  );
};

export default MenuCard;
