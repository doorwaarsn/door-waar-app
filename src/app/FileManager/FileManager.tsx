import React from "react";
import AddIcon from "../../assets/icons/arrow-circle-down-fill Copy 3.svg";
import FileCard from "../../components/FileManage/FileCard";
import ListOfFiesManager from "../../components/FileManage/ListOfFiesManager";

const fileMagagerDatas = [
  {
    title: "Content Marketing 2020",
    type: "file",
    lastUpdate: "18 Jan, 2020",
    owner: "Me",
    fileSize: "5.1",
  },
  {
    title: "Supports Various",
    type: "folder",
    lastUpdate: "18 Jan, 2020",
    owner: "Me",
    fileSize: "5.1",
    file: 3,
  },
  {
    title: "Graphics Design 2020",
    type: "file",
    lastUpdate: "18 Jan, 2020",
    owner: "Me",
    fileSize: "5.1",
  },
  {
    title: "Content for Design logo",
    type: "file",
    lastUpdate: "18 Jan, 2020",
    owner: "Me",
    fileSize: "5.1",
  },
  {
    title: "IOS App Development",
    type: "folder",
    lastUpdate: "18 Jan, 2020",
    owner: "Me",
    fileSize: "5.1",
    file: 5,
  },
];

const FileManager = () => {
  return (
    <div className="flex flex-col gap-5 items-start w-full">
      <div className="w-full h-[167px] bg-white rounded-md flex flex-col gap-2 justify-start">
        <div className="w-full flex justify-between items-center p-4 border-b">
          <p className="text-sm font-normal leading-[1.33] text-left text-[#222b45]">
            Recently Accessed Files
          </p>
          <button>
            <img src={AddIcon} alt="" />
          </button>
        </div>
        <div className="w-full flex  items-center p-4 gap-4">
          {fileMagagerDatas.map((item) => (
            <FileCard datas={item} />
          ))}
        </div>
      </div>
      <ListOfFiesManager datas={fileMagagerDatas}/>
    </div>
  );
};

export default FileManager;
