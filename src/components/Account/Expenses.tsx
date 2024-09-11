import Visa from "../../assets/icons/visa.svg";
import Paypal from "../../assets/icons/paypal.svg";
import React from "react";

const InvoicesDatas = [
  {
    Invoice_No: "HP Laptop",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    from: "Paytem",
    Status: "Approved",
    Salary: "15,000",
  },
  {
    Invoice_No: "Imac Desktop",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Paypal,
    from: "Ebay USA",
    Status: "Approved",
    Salary: "15,000",
  },
  {
    Invoice_No: "Logitech USB Mouse, Keyboard",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    from: "Amazon",
    Status: "Pending",
    Salary: "15,000",
  },
  {
    Invoice_No: "Logitech USB Mouse, Keyboard",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Paypal,
    from: "Amazon",
    Status: "Approved",
    Salary: "15,000",
  },
  {
    Invoice_No: "Macbook Air 2017",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    from: "Ebay USA",
    Status: "Pending",
    Salary: "15,000",
  },
];

const ListOfExpenses = () => {
  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border">
      <div className="pb-6 px-0">
        <table className="w-full text-left table-auto min-w-max">
          <thead className="bg-[#eff4fa]">
            <tr>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Item
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Order By
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Form
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Date
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Paid By
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Status
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {InvoicesDatas.map((item, i) => (
              <tr key={i}>
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
                    {item.from}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfExpenses;
