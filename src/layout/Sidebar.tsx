import React, { useContext, useState } from "react";
import { sideData } from "./SidebarDatas";
import DoorWaar from "../assets/logo/door-warr.jpg";
import { CiSearch } from "react-icons/ci";
import { PiCalendarDotsLight } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../contexts/auth/auth.context";
import LOGO from "../assets/logo/logo1.png";

const Sidebar = () => {
  const { profile } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(true);

  const location = useLocation();
  return (
    <div className="flex h-screen">
      <div className="w-[60px] flex flex-col justify-between h-full bg-[#14ABE3] py-8">
        <div className="flex flex-col gap-7 items-center text-[#FFFFFF]/70">
          <span
            onClick={() => setOpenNav(!openNav)}
            className=" cursor-pointer"
          >
            <CgMenuLeft size={24} />
          </span>
          <Link to="#">
            <CiSearch />
          </Link>
          <Link to="/dashboard/calendar">
            <PiCalendarDotsLight />
          </Link>
          <Link to="/dashboard/contact">
            <IoPersonOutline />
          </Link>
          <Link to="/dashboard/messages">
            <AiOutlineMessage />
          </Link>
          <Link to="/dashboard/filemanager">
            <IoDocumentOutline />
          </Link>
        </div>
        <div className="flex flex-col gap-7 items-center text-[#FFFFFF]/70">
          <Link to="#">
            <IoSettingsOutline />
          </Link>
        </div>
      </div>
      <div
        className={`h-full bg-[#fff] flex flex-col gap-2 justify-start mt-2  ${
          openNav ? "w-[180px]" : "w-[60px]"
        } `}
      >
        {openNav ? (
          <div className="relative w-20 h-20 ml-4">
            <img
              src={LOGO}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain opacity-0"
            />
            <div
              className="absolute inset-0 w-full h-full bg-[#14ABE3]"
              style={{
                WebkitMaskImage: `url(${LOGO})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
              }}
            ></div>
          </div>
        ) : (
          <div className="w-full h-20 flex justify-center">
            <img
              src={DoorWaar}
              alt="Logo"
              className=" w-[40px] h-[40px] object-contain mt-4 rounded-sm"
            />
          </div>
        )}
        <div
          className={`h-full flex flex-col gap-5
          ${openNav ? "w-full" : "w-[60px] items-center"}
          `}
        >
          {sideData.map((item, i) => (
            <Link
              to={item.url}
              key={i}
              className={`flex justify-start items-center gap-2 px-2 text-[14px] font-normal text-[#8f9bb3] ${
                location.pathname.split("/").pop() === item.url.split("/").pop()
                  ? "border-r-4 border-[#14ABE3]"
                  : ""
              } `}
            >
              {item.icon}
              {openNav ? <span>{item.title}</span> : ""}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
