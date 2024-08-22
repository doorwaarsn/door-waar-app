import React from "react";
import ListOfHolidays from "../../components/Holidays/ListOfHoliday";

const Holidays = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      <div className="w-full flex items-center justify-between gap-5">
        <div></div>
        <button className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white">
          Add New
        </button>
      </div>

      <ListOfHolidays />
    </div>
  );
};

export default Holidays;
