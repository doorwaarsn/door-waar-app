import React from "react";

const InvoicesKpi = ({ datas }: any) => {
  return (
    <div className="flex flex-col justify-between  items-center p-3 gap-2 flex-1">
      <p className="text-lg font-bold leading-6 text-center text-[#222b45]">
        {datas.amount}
      </p>

      <p className="text-xs font-normal leading-[1.23] text-center text-[#8f9bb3]">
        {datas.title}
      </p>
    </div>
  );
};

export default InvoicesKpi;
