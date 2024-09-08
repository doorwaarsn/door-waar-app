import React from "react";
import { Link } from "react-router-dom";

const ProgressData = [
  {
    title: "Design Team",
    color: "#ff2d55",
    progress: 35,
  },
  {
    title: "Developer Team",
    color: "#00e096",
    progress: 25,
  },
  {
    title: "Marketing",
    color: "#14ABE3",
    progress: 15,
  },
  {
    title: "Management",
    color: "#884dff",
    progress: 20,
  },
  {
    title: "Other",
    color: "#ff9d2b",
    progress: 11,
  },
];

const Performance = () => {
  return (
      <div className="flex-1 h-[444px] p-5 rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col gap-5 items-center sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
          <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
            Performance
          </h6>
        </div>
        <div className="w-full">
          <p className="text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
            Measure how fast you're growing monthly recurring revenue.{" "}
            <Link to={"#"} className="text-[#14ABE3]">
              Learn More
            </Link>
          </p>
        </div>
        <div className="w-full flex justify-start">
          <div className="space-y-5 w-full">
            {ProgressData.map((item, index) => (
                <div key={index}>
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-sm text-gray-800">{item.progress}%</span>
                    <h3 className="text-xs font-normal leading-[0.67] text-right text-[#8f9bb3]">
                      {item.title}
                    </h3>
                  </div>
                  <div
                      className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={item.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                  >
                    <div
                        className="flex flex-col h-[8px] justify-center rounded-full text-xs text-white text-center whitespace-nowrap transition duration-500"
                        style={{ width: `${item.progress}%`, backgroundColor: `${item.color}` }}
                    ></div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Performance;
