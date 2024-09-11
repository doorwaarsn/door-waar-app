import Trash from "../../assets/icons/trash.svg";
import Mail from "../../assets/icons/mail.svg";
import Print from "../../assets/icons/print.svg";
import React from "react";
const UsersDatas = [
  {
    employeeId: "E001",
    salaire: "$15,000",
    name: "David Wagner",
    email: "david_wagner@example.com",
    role: "Web Development",
    status: "Done",
  },
  {
    employeeId: "E002",
    salaire: "$13,300",
    name: "Ina Hogan",
    email: "windler.warren@runte.net",
    role: "Marketing",
    status: "Panding",
  },
  {
    employeeId: "E003",
    salaire: "$670",
    name: "Devin Harmon",
    email: "wintheiser_enos@yahoo.com",
    role: "App Development",
    status: "Done",
  },
  {
    employeeId: "E004",
    salaire: "$2,100",
    name: "Lena Page",
    email: "camila_ledner@gmail.com",
    role: "Support",
    status: "Panding",
  },
  {
    employeeId: "E005",
    salaire: "$1,560",
    name: "Eula Horton",
    email: "edula_dorton1221@gmail.com",
    role: "Accounts",
    status: "Done",
  },
  {
    employeeId: "E006",
    salaire: "$1,560",
    name: "Victoria Perez",
    email: "terrill.wiza@hotmail.com",
    role: "PHP Open Source",
    status: "Panding",
  },
];

const ListOfPayroll = () => {
  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border">
      <div className="pb-6 px-0">
        <table className="w-full text-left table-auto min-w-max">
          <thead className="bg-[#eff4fa]">
            <tr>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                #
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Employee
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Role
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Role
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Status
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-center text-[#8f9bb3]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {UsersDatas.map((item, i) => (
              <tr key={i}>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  {item.employeeId}
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt="User"
                      className="h-10 w-10 rounded-full border border-blue-gray-50 bg-blue-gray-50/50 p-1"
                    />
                    <div className="flex flex-col">
                      <p className="block text-[13px] font-semibold leading-[1.23] text-left text-[#222b45]">
                        {item.name}
                      </p>
                      <p className="block text-xs font-normal leading-[1.33] text-left text-[#8f9bb3]">
                        {item.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    {item.role}
                  </p>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    {item.salaire}
                  </p>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="flex items-center gap-1 text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    <span
                      className={`w-[8px] h-[8px] rounded-full ${
                        item.status === "Done" ? "bg-[#0067b2]" : "bg-[#ffb45e]"
                      } `}
                    ></span>
                    {item.status}
                  </p>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <div className="flex justify-center items-center gap-5">
                    <button className="flex items-center justify-center">
                      <img src={Mail} alt="Edit" />
                    </button>
                    <button className="flex items-center justify-center">
                      <img src={Print} alt="Edit" />
                    </button>
                    <button className="flex items-center justify-center">
                      <img src={Trash} alt="Delete" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfPayroll;
