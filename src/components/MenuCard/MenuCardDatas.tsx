import Users from "../../assets/icons/people.svg";
import Holidays from "../../assets/icons/briefcase.svg";
import Events from "../../assets/icons/calendar.svg";
import Payroll from "../../assets/icons/credit-card.svg";
import Account from "../../assets/icons/list.svg";
import Report from "../../assets/icons/pie-chart.svg";

interface MenuCardItem {
  title: string;
  icon: any;
  url: string;
}

export const MenuCardDatas: MenuCardItem[] = [
  {
    title: "Workers",
    icon: Users,
    url: "/dashboard/workers",
  },
  {
    title: "Professions",
    icon: Holidays,
    url: "/dashboard/professions",
  },
  {
    title: "Events",
    icon: Events,
    url: "/dashboard/events",
  },
  {
    title: "Payroll",
    icon: Payroll,
    url: "/dashboard/payroll",
  },
  {
    title: "Accounts",
    icon: Account,
    url: "/dashboard/account",
  },
  {
    title: "Report",
    icon: Report,
    url: "/dashboard/report",
  },
];
