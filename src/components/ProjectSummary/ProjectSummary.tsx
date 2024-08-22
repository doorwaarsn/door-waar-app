import React from "react";

const ProjectSummary = () => {
  return (
    <div className="w-full flex justify-center items-center gap-5">
      <div className="flex-1 h-auto ml-0 pt-[16px]  pb-[20px]  rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col gap-5 px-5">
        <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
          <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
            Project Summary
          </h6>
        </div>
        <div className="">
          <table className="table-auto w-full">
            <thead className="bg-[#eff4fa]">
              <tr>
                <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                  #
                </th>
                <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                  Client Name
                </th>
                <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                  Team
                </th>
                <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                  Project
                </th>
                <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                  Project Cost
                </th>
                <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                  Payment
                </th>
                <th className="px-4 py-5  text-[15px] font-normal text-left text-[#8f9bb3]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr>
                  <td className=" px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                    {item}
                  </td>
                  <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                    John Doe
                  </td>
                  <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                    Team A
                  </td>
                  <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                    Project X
                  </td>
                  <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                    $1000
                  </td>
                  <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                    Paid
                  </td>
                  <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                    Completed
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
