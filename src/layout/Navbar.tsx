import { AiFillMail } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/auth/auth.context";

const Navbar = ({ title }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="w-full h-auto  font-montserrat flex flex-col items-center">
      <div className="w-[96%] px-4 h-[60px] flex justify-between items-center">
        <div className="flex items-center gap-4 w-full md:w-1/2"></div>
        <div className="flex items-center gap-3 md:gap-5 w-full md:w-1/2 justify-end">
          <span className="text-[16px] mr-3 font-normal text-[#222b45] whitespace-nowrap">
            Language
          </span>
          <span className="text-[16px] mr-3 font-normal text-[#222b45] whitespace-nowrap">
            Reports
          </span>
          <span className="text-[16px] mr-3 font-normal text-[#222b45] whitespace-nowrap">
            Project
          </span>
          <span className="text-[17px] font-normal text-[#222b45] whitespace-nowrap">
            <AiFillMail size={20} />
          </span>
          <span className="text-[17px] font-normal text-[#222b45] whitespace-nowrap">
            <IoNotifications size={20} />
          </span>
          <div className="relative inline-flex">
            <a
              onClick={toggleDropdown}
              className="flex items-center gap-2 whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none bg-white p-2 rounded-lg border text-[14px] font-semibold leading-[1.23] text-[#222b45] text-left"
              href="#"
              id="dropdownMenuButton2"
              role="button"
              data-twe-dropdown-toggle-ref
              aria-expanded="false"
            >
              {profile?.fullName}
              <img
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                className="rounded-full"
                style={{ height: "25px", width: "25px" }}
                alt=""
                loading="lazy"
              />
            </a>

            {isOpen && (
              <div
                className={`origin-top-right absolute right-0 mt-12 p-2 w-40 rounded shadow-sm bg-[#fff] border border-[#eff4fa] dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition transform z-50 ${
                  isOpen
                    ? "ease-out duration-100 opacity-100 scale-100"
                    : "ease-in duration-75 opacity-0 scale-95"
                }`}
              >
                <ul
                  className="py-1 space-y-4 dark:text-white"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <li className="text-[13px] font-semibold leading-[1.23] text-[#222b45] text-left">
                    <Link
                      to="/dashboard/profile"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#0095ff]"
                      onClick={toggleDropdown}
                    >
                      <div className="mr-3">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                      </div>
                      Account
                    </Link>
                  </li>
                  <li className="text-[13px] font-semibold leading-[1.23] text-[#222b45] text-left">
                    <Link
                      to="dashboard/settings"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-[#0095ff]"
                      onClick={toggleDropdown}
                    >
                      <div className="mr-3">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                      </div>
                      Setting
                    </Link>
                  </li>
                  <hr className="dark:border-[#8f9bb3]" />
                  <li
                    className="text-[13px] font-semibold leading-[1.23] text-[#222b45] text-left"
                    onClick={handleLogout}
                  >
                    <a
                      href="#"
                      className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                    >
                      <div className="mr-3 text-red-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </div>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[21px] flex justify-center mt-1 ">
        <div className="w-[95%] h-[2px] bg-[#eff4fa]" />
      </div>
    </nav>
  );
};

export default Navbar;
