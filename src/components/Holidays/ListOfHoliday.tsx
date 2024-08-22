import React from "react";
import Pencil from "../../assets/icons/pencil.svg";
import Trash from "../../assets/icons/trash.svg";

const ListOfHolidays = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full border border-[#eff4fa] bg-white rounded-b-[8px]">
        <thead className="bg-[#eff4fa]">
          <tr>
            <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
              Day
            </th>
            <th className="px-4 py-5 text-[15px] font-normal text-center text-[#8f9bb3]">
              Date
            </th>
            <th className="px-4 py-5 text-[15px] font-normal text-center text-[#8f9bb3]">
              Type
            </th>
            <th className="px-4 py-5 text-[15px] font-normal text-center text-[#8f9bb3]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {[1, 2, 3, 4, 5, 5, 7, 8, 9].map((item) => (
            <tr key={item}>
              <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800">
                Tuesday
              </td>
              <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-center text-gray-800">
                Jan 01, 2020
              </td>
              <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-center text-gray-800">
                Republic Day
              </td>
              <td className="px-4 py-4 text-[12px] font-normal tracking-normal leading-5 text-center text-gray-800">
                <div className=" flex justify-center items-center gap-5">
                  <button className="flex items-center justify-center">
                    <img src={Pencil} alt="Edit" />
                  </button>
                  <button className="flex items-center justify-center">
                    <img src={Trash} alt="Delete" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfHolidays;
