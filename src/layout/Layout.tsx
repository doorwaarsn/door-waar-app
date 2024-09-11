import { useTheme } from "./ThemeContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import React from "react";

interface AppProps {
  children: React.ReactNode;
}

const Layout: React.FC<AppProps> = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`main-container w-full h-screen relative mx-auto font-montserrat flex m-0 p-0 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Sidebar />

      <div className="flex-1 bg-[#F9FBFD] overflow-hidden h-auto ">
        <div className="w-full h-full flex flex-col gap-4 mt-1 overflow-hidden relative ">
          <Navbar />
          <main className="w-full px-8 mx-auto flex flex-col justify-start h-auto overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
