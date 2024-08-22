import { BsWindow } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { GoFlame } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { BiDockTop } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { BsPersonVcard } from "react-icons/bs";
import { VscReferences } from "react-icons/vsc";
import { MdOutlineLeaderboard } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";

interface sidebarItem {
  title: string;
  icon: any;
  url: string;
}

export const sideData: sidebarItem[] = [
  {
    title: "Tableau de bord",
    icon: <BsWindow size={18} />,
    url: "/dashboard",
  },
  {
    title: "Ouvriers",
    icon: <HiOutlineUsers size={18} />,
    url: "/dashboard/workers",
  },
  {
    title: "Professions",
    icon: <BiDockTop size={18} />,
    url: "/dashboard/professions",
  },

  {
    title: "Clients",
    icon: <PiUsersThree size={18} />,
    url: "/dashboard/customers",
  },
  {
    title: "Holidays",
    icon: <IoMdCheckmarkCircleOutline size={18} />,
    url: "/dashboard/holidays",
  },
  {
    title: "Events",
    icon: <GoFlame size={18} />,
    url: "/dashboard/events",
  },
  {
    title: "Payroll",
    icon: <CiCreditCard1 size={18} />,
    url: "/dashboard/payroll",
  },
  {
    title: "Accounts",
    icon: <BsPerson size={18} />,
    url: "/dashboard/account",
  },
  {
    title: "Report",
    icon: <MdOutlineReportGmailerrorred size={18} />,
    url: "/dashboard/report",
  },
];

export const navbarData: sidebarItem[] = [
  {
    title: "Home",
    url: "/dashboard/profile",
    icon: <BiHomeAlt2 />,
  },
  {
    title: "My Infos",
    url: "/dashboard/profile/myinfo",
    icon: <BsPersonVcard />,
  },
  {
    title: "People",
    url: "/dashboard/profile/people",
    icon: <IoPeopleOutline />,
  },
  {
    title: "Reference",
    url: "/dashboard/profile/reference",
    icon: <VscReferences />,
  },
  {
    title: "Commercial",
    url: "/dashboard/profile/commercial",
    icon: <MdOutlineLeaderboard />,
  },
];
