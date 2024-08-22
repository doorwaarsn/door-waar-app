import React from "react";
import RChart from "./Chart";

const GrowthChart = () => {
  return (
    <div className="flex-1 h-[444px] p-5 rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col justify-between  items-center">
      <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
        <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
          Growth
        </h6>
      </div>
      <div className="w-full h-full">
        <RChart />
      </div>
    </div>
  );
};

export default GrowthChart;
