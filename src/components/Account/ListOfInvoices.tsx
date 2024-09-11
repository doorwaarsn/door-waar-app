import Trash from "../../assets/icons/trash.svg";
import { CiSearch } from "react-icons/ci";
import Mail from "../../assets/icons/mail.svg";
import Print from "../../assets/icons/print.svg";
import Visa from "../../assets/icons/visa.svg";
import Paypal from "../../assets/icons/paypal.svg";
import React from "react";

const InvoicesDatas = [
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    Status: "Approved",
    Salary: "15,000",
  },
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Paypal,
    Status: "Approved",
    Salary: "15,000",
  },
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    Status: "Pending",
    Salary: "15,000",
  },
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Paypal,
    Status: "Approved",
    Salary: "15,000",
  },
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    Status: "Pending",
    Salary: "15,000",
  },
];

const ListOfInvoices = () => {
  return (
    <div className="flex-1 w-full h-[444px] mt-4 pt-[16px] pb-[20px] flex flex-col">
      <div className="w-full flex justify-between items-center rounded-t-[8px] border border-[#eff4fa] bg-white py-[10px] px-[20px]">
        <h6 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
          Invoices
        </h6>
        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-white rounded-md border border-[#eff4fa]">
            <input
              className="w-full md:w-64 h-[34px] p-2 bg-transparent border-none placeholder:text-sm"
              placeholder="Search..."
            />
            <span className="flex items-center px-2 text-[#8f9bb3] cursor-pointer">
              <CiSearch size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border">
        <div className="pb-6 px-0">
          <table className="w-full text-left table-auto min-w-max">
            <thead className="bg-[#eff4fa]">
              <tr>
                <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                  <input type="checkbox" />
                </th>
                <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                  Invoice No
                </th>
                <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                  Clients
                </th>
                <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                  Date
                </th>
                <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                  Type
                </th>
                <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                  Status
                </th>
                <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                  Salary
                </th>
                <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {InvoicesDatas.map((item, i) => (
                <tr key={i}>
                  <td className="px-4 py-4 border-b border-blue-gray-50">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-4 border-b border-blue-gray-50">
                    <p className="block text-[13px] font-semibold leading-[1.23] text-left text-[#222b45]">
                      {item.Invoice_No}
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b border-blue-gray-50">
                    <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                      {item.Clients}
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b border-blue-gray-50">
                    <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                      {item.Date}
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b border-blue-gray-50">
                    <img src={item.Type} alt="" />
                  </td>
                  <td className="px-4 py-4 border-b border-blue-gray-50">
                    <p className="flex items-center gap-1 text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                      <span
                        className={`w-[8px] h-[8px] rounded-full ${
                          item.Status === "Approved"
                            ? "bg-[#0067b2]"
                            : "bg-[#ffb45e]"
                        } `}
                      ></span>
                      {item.Status}
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b border-blue-gray-50">
                    <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                      ${item.Salary}
                    </p>
                  </td>
                  <td className="px-4 py-4 border-b border-blue-gray-50">
                    <div className="flex justify-start items-center gap-5">
                      <button
                        className="flex items-center justify-center"
                        //   onClick={() => changeView("details")}
                      >
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
    </div>
  );
};

export default ListOfInvoices;
