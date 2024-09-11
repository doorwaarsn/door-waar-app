import Visa from "../../assets/icons/visa.svg";
import Paypal from "../../assets/icons/paypal.svg";
import React from "react";

const InvoicesDatas = [
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    pname: "UPLO - Bootstrap 4",
    Salary: "15,000",
  },
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Paypal,
    pname: "UPLO - Bootstrap 4",
    Salary: "15,000",
  },
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    pname: "UPLO - Bootstrap 4",
    Salary: "15,000",
  },
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Paypal,
    pname: "UPLO - Bootstrap 4",
    Salary: "15,000",
  },
  {
    Invoice_No: "#LA-0234",
    Clients: "vPro tec LLC",
    Date: "17 Aug, 2020",
    Type: Visa,
    pname: "UPLO - Bootstrap 4",
    Salary: "15,000",
  },
];

const ListOfPayments = () => {
  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border">
      <div className="pb-6 px-0">
        <table className="w-full text-left table-auto min-w-max">
          <thead className="bg-[#eff4fa]">
            <tr>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                ID
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Clients Name
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Project Name
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Date
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Type
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
                  <div className="flex items-center gap-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&usqp=CAU"
                      alt="User"
                      className="h-10 w-10 rounded-full border border-blue-gray-50 bg-blue-gray-50/50 p-1"
                    />
                    <div className="flex flex-col">
                      <p className="block text-[13px] font-semibold leading-[1.23] text-left text-[#222b45]">
                        {item.Clients}
                      </p>
                      <p className="block text-xs font-normal leading-[1.33] text-left text-[#8f9bb3]">
                        hagenes.isai@hotmail.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    {item.pname}
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

export default ListOfPayments;
