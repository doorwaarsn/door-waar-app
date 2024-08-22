import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosList } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import ListOfContacts from "../../components/Contact/ListOfContacts";
import AddContact from "../../components/Contact/AddContact";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDepartViews, setShowDepartViews] = useState(1);
  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      <div className=" w-full flex flex-col gap-4 bg-white p-4 rounded-md">
        <div className="w-full flex justify-between items-center gap-5 pb-4 border-b">
          <div className=" flex gap-10">
            <p className="flex flex-col items-start gap-2">
              <span className="text-xs font-normal leading-[1.33] tracking-normal text-left text-[#8f9bb3]">
                My Income
              </span>
              <span className="text-[13px] font-semibold leading-[1.23] tracking-normal text-left text-[#222b45]">
                $5,510
              </span>
            </p>
            <p className="flex flex-col items-start gap-2">
              <span className="text-xs font-normal leading-[1.33] tracking-normal text-left text-[#8f9bb3]">
                Site Traffic
              </span>
              <span className="text-[13px] font-semibold leading-[1.23] tracking-normal text-left text-[#222b45]">
                53% Up
              </span>
            </p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center w-[80px] h-[30px] py-[7px] rounded-lg border border-[#eff4fa] overflow-hidden">
              <button
                onClick={() => setShowDepartViews(1)}
                className={`flex-1 ${
                  showDepartViews === 1
                    ? "bg-custom-blue text-white "
                    : "text-[#231f20]"
                } h-full flex items-center py-4 justify-center`}
              >
                <IoIosList size={16} />
              </button>
              <button
                onClick={() => setShowDepartViews(2)}
                className={`flex-1 ${
                  showDepartViews === 2
                    ? "bg-[#0067b2] text-white "
                    : "text-[#231f20]"
                }  h-full py-4 flex items-center justify-center`}
              >
                <RxDashboard size={16} />
              </button>
            </div>
            {showModal && (
              <AddContact setShowModal={setShowModal} showModal={showModal} />
            )}
            <button
              onClick={() => setShowModal(true)}
              className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white"
            >
              Add New
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full">
          <div className="w-full relative flex items-center bg-white rounded-md border border-[#eff4fa]">
            <input
              className="w-full h-[34px] p-2 bg-[#f9fbfd] border-none placeholder:text-sm "
              placeholder="Search..."
            />
            <span className="flex items-center px-2 text-[#8f9bb3] cursor-pointer">
              <CiSearch size={20} />
            </span>
          </div>
        </div>
      </div>
      <ListOfContacts />
    </div>
  );
};

export default Contact;
