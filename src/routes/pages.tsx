import { useContext } from "react";
import Account from "../app/Account/Account";
import Activities from "../app/Activities/Activities";
import Calendar from "../app/Calendar/Calendar";
import Contact from "../app/Contact/Contact";
import Department from "../app/Department/Department";
import Employee from "../app/Employee/Employee";
import Events from "../app/Events/Events";
import FileManager from "../app/FileManager/FileManager";
import Holidays from "../app/Holodays/Holidays";
import Home from "../app/Home/Home";
import Messages from "../app/Messages/Messages";
import Payroll from "../app/Payroll/Payroll";
import Report from "../app/Report/Report";
import { GDINPaths } from "./paths";
import AuthContext from "../contexts/auth/auth.context";
import { Role } from "../common/enums";

import SingleEmployee from "../components/Employee/SingleEmployee";

export const useNavigationPaths = [
  {
    title: "Dashboard",
    path: GDINPaths.Home,
    element: <Home />,
  },
  {
    title: "Account",
    path: GDINPaths.Account,
    element: <Account />,
  },
  {
    title: "Activities",
    path: GDINPaths.Activities,
    element: <Activities />,
  },
  {
    title: "Departments",
    path: GDINPaths.Department,
    element: <Department />,
  },
  {
    title: "Departments",
    path: GDINPaths.DepartmentDetails,
    element: <Employee />,
  },
  {
    title: "Events",
    path: GDINPaths.Events,
    element: <Events />,
  },
  {
    title: "Employee",
    path: GDINPaths.Employee,
    element: <Employee />,
  },
  {
    title: "Worker Details",
    path: GDINPaths.WorkersDetails,
    element: <SingleEmployee />,
  },
  {
    title: "Holidays",
    path: GDINPaths.Holidays,
    element: <Holidays />,
  },
  {
    title: "Reports",
    path: GDINPaths.Report,
    element: <Report />,
  },
  {
    title: "File Manager",
    path: GDINPaths.FileManager,
    element: <FileManager />,
  },
  {
    title: "Message",
    path: GDINPaths.Messages,
    element: <Messages />,
  },
  {
    title: "Calendar",
    path: GDINPaths.Calendar,
    element: <Calendar />,
  },
  {
    title: "Contact",
    path: GDINPaths.Contact,
    element: <Contact />,
  },
  {
    title: "Payroll",
    path: GDINPaths.Payroll,
    element: <Payroll />,
  },
];

// export const useNavigationPaths = () => {
//   const { hasRole } = useContext(AuthContext);

//   console.log(
//     hasRole && hasRole([Role.ADMIN, Role.HR_ADMIN, Role.CEO_AND_FOUNDER])
//   );
//   const paths = [...baseNavigationPaths];

//   if (hasRole && hasRole([Role.ADMIN, Role.HR_ADMIN, Role.CEO_AND_FOUNDER])) {
//     paths.push({
//       title: "Employees",
//       path: GDINPaths.Employee,
//       element: <Employee />,
//     });
//   }

//   return paths;
// };
