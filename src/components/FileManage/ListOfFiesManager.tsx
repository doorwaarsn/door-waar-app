import React from "react";
import WordIcon from "../../assets/icons/037-word.svg";
import FolderIcon from "../../assets/icons/alert-circle-fill.svg";

const ListOfFiesManager = ({ datas }: any) => {
  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white rounded-xl bg-clip-border">
      <div className="pb-6 px-0">
        <table className="w-full text-left table-auto min-w-max">
          <thead className="bg-[#eff4fa]">
            <tr>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Name
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Share With
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Owner
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                Last Update
              </th>
              <th className="px-4 py-5 text-[15px] font-normal text-left text-[#8f9bb3]">
                File Size
              </th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item: any, i: any) => (
              <tr key={i}>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="text-[12px] font-normal leading-[1.23] text-left text-[#222b45] flex items-center gap-2 ">
                    <img
                      src={item.type === "file" ? WordIcon : FolderIcon}
                      alt=""
                      className="w-[20px]"
                    />
                    {item.title}
                  </p>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="flex -space-x-4 rtl:space-x-reverse">
                    <img
                      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                      alt=""
                    />
                    <img
                      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt=""
                    />
                    <img
                      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt=""
                    />
                    <img
                      className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                      src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                      alt=""
                    />
                  </p>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    {item.owner}
                  </p>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    {item.lastUpdate}
                  </p>
                </td>
                <td className="px-4 py-4 border-b border-blue-gray-50">
                  <p className="block text-[12px] font-normal leading-[1.25] text-left text-[#222b45]">
                    {item.fileSize} GIB
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

export default ListOfFiesManager;
