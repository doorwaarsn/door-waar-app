import React from "react";
import { useComments } from "../../contexts/Comment/Comment.provider";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiPhoneArrowDownLeft } from "react-icons/hi2";
import { format } from "date-fns";

const GrowthChart = () => {
  const { calls } = useComments();

  return (
    <div className="flex-1 h-[444px] p-5 rounded-[8px] border border-[#eff4fa] bg-[#fff] flex flex-col justify-between  items-center">
      <div className="w-full flex justify-between items-center border-b border-[#eff4fa] pb-2">
        <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
          Derniers Appels
        </h6>
      </div>
      <div className="flow-root w-full">
        <ul role="list" className="divide-y divide-gray-200">
          {calls.map((item: any) => (
            <li className="py-1 sm:py-2">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {item.callType === "CALL" ? (
                    <HiPhoneArrowDownLeft
                      size={32}
                      className="text-[#14ABE3] w-8 h-8"
                    />
                  ) : (
                    <IoLogoWhatsapp
                      size={32}
                      className="text-green-600 w-8 h-8"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-semibold text-gray-900 truncate">
                    {item.userApp?.fullName}
                  </p>
                  <p className="text-[11px] text-gray-500 truncate">
                    {item.userApp?.phoneNumber}
                  </p>
                </div>
                <div className="inline-flex items-center text-[11px] text-gray-500 truncate">
                  {format(new Date(item?.createdAt), "dd/MM/yyyy - HH:mm")}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GrowthChart;
