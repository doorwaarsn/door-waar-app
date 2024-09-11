import { PiSealCheckFill } from "react-icons/pi";
import { API_URL } from "../../env";
import React from "react";

const ListOfEmployees = ({ user }: any) => {
  return (
    <>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <input type="checkbox" />
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <div className="flex items-center gap-2">
          <span
            className={`${
              user?.recommend
                ? "border-2 border-[#14ABE3]"
                : "border-2 border-blue-100"
            }  rounded-full`}
          >
            <img
              src={`${API_URL}/resources/${user?.avatar}`}
              alt="User"
              className="h-9 w-9 rounded-full  bg-blue-gray-50/50 object-cover"
            />
          </span>
          <div className="flex flex-col">
            <p className="text-[13px] flex gap-2 items-center font-semibold leading-[1.23] text-left text-[#222b45]">
              {user?.fullName}
              {user?.recommend ? (
                <PiSealCheckFill size={14} className="text-[#14ABE3]" />
              ) : (
                ""
              )}
            </p>
            <p className="block text-xs font-normal leading-[1.33] text-left text-[#8f9bb3]">
              {user?.email}
            </p>
          </div>
        </div>
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          {user.profession?.name}
        </p>
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          <TruncatedText text={user?.address} maxLength={20} />
        </p>
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          {user.phoneNumber}
        </p>
      </td>
      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          {formatDate(user.createdAt)}
        </p>
      </td>

      <td className="px-4 py-1 border-b border-blue-gray-50">
        <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
          {user.providerType === "INDIVIDUAL" ? "Particulier" : "Entreprise"}
        </p>
      </td>
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

const TruncatedText = ({ text, maxLength }: any) => {
    const truncatedText =
        text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return <span>{truncatedText}</span>;
};


export default ListOfEmployees;
