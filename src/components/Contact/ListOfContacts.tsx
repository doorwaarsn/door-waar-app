import React from "react";
import Mail from "../../assets/icons/mail.svg";
import Trash from "../../assets/icons/trash.svg";
import Phone from "../../assets/icons/phone.svg";
import Start from "../../assets/icons/star.svg";

const contacts = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    address: "131 Simone Harbor Suite 305",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    address: "103 Ritchie Cliff Apt, MA 01323",
  },
  {
    id: 3,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "555-123-4567",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    address: "78 Baker Street, NY 10001",
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "444-321-6789",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    address: "245 Maple Lane, CA 90210",
  },
  {
    id: 5,
    name: "Jessica Williams",
    email: "jessica.williams@example.com",
    phone: "333-654-0987",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    address: "56 Cedar Street, TX 77002",
  },
  {
    id: 6,
    name: "David Miller",
    email: "david.miller@example.com",
    phone: "222-789-6543",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    address: "101 Pine Road, FL 33101",
  },
  {
    id: 7,
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    phone: "111-456-7890",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    address: "45 Oak Street, IL 60601",
  },
  {
    id: 8,
    name: "James Anderson",
    email: "james.anderson@example.com",
    phone: "999-321-4567",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    address: "23 Elm Street, OH 44101",
  },
];

const ListOfContacts = () => {
  return (
    <table className="table-auto w-full  border-[#eff4fa] bg-white rounded-md p-4">
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id} className="border-b border-gray-200">
            <td className="px-4 py-4 flex gap-2 items-center">
              <img src={Start} alt="" />
              <img
                src={contact.photo}
                alt={contact.name}
                className="w-8 h-8 rounded-full"
              />
              <p className="flex flex-col">
                <span className="text-[13px] font-semibold leading-[1.23] text-left text-[#222b45]">
                  {contact.name}
                </span>
                <span className="text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
                  {contact.phone}
                </span>
              </p>
            </td>
            <td className="px-4 py-4 text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
              {contact.email}
            </td>
            <td className="px-4 py-4 text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
              {contact.address}
            </td>
            <td className="px-4 py-4 text-[12px] font-normal leading-[1.25] text-left text-[#222b45] flex  items-center gap-4">
              <button className="flex items-center justify-center">
                <img src={Phone} alt="Edit" />
              </button>
              <button className="flex items-center justify-center">
                <img src={Mail} alt="Edit" />
              </button>
              <button className="flex items-center justify-center">
                <img src={Trash} alt="Delete" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListOfContacts;
