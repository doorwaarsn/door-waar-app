import { useMemo, useState } from "react";
import Pencil from "../../assets/icons/pencil.svg";
import Trash from "../../assets/icons/trash.svg";

const ListOfCustomers = ({ datas }: any) => {
  return (
    <>
      {datas.map((item: any) => (
        <tr key={item}>
          <td className="px-4 py-1 border-b border-blue-gray-50">
            <input type="checkbox" />
          </td>
          <td className="px-4 py-1 text-[12px] font-normal tracking-normal leading-5 text-left text-gray-800 border-b border-blue-gray-50">
            {item?.fullName}
          </td>
          <td className="px-4 py-1 text-[12px] font-normal tracking-normal leading-5 text-center text-gray-800 border-b border-blue-gray-50">
            {item?.phoneNumber}
          </td>
          <td className="px-4 py-1 text-[12px] font-normal tracking-normal leading-5 text-center text-gray-800 border-b border-blue-gray-50">
            {item?.role}
          </td>
          <td className="px-4 py-1 text-[12px] font-normal tracking-normal leading-5 text-center text-gray-800 border-b border-blue-gray-50">
            {formatDate(item?.createdAt)}
          </td>
          <td className="px-4 py-1 text-[12px] font-normal tracking-normal leading-5 text-center text-gray-800 border-b border-blue-gray-50">
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
    </>
  );
};

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export default ListOfCustomers;
