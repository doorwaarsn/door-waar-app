import React from "react";

const ExpensesKpi = ({ datas }: any) => {
  return (
    <div className="w-[25%] h-[115px] bg-white rounded-md flex flex-col justify-between  items-start p-5 gap-4 border">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold leading-tight text-left text-[#222b45]">
            {datas.amount}
          </p>
          <p className="text-xs font-normal leading-5 text-left text-[#8f9bb3]">
            {datas.item}
          </p>
        </div>

        <p
          className={`text-2xl font-normal leading-tight text-left ${
            datas.porcent >= 50 ? "text-[#00e096]" : "text-[#0067b2]"
          }`}
        >
          {datas.porcent}%
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
        <div
          className={`${
            datas.porcent >= 50 ? "bg-[#00e096]" : "bg-[#0067b2]"
          } h-1 rounded-full`}
          style={{ width: `${datas.porcent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ExpensesKpi;
