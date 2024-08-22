import React from "react";
import WordIcon from "../../assets/icons/037-word.svg";
import FolderIcon from "../../assets/icons/alert-circle-fill.svg";

const FileCard = ({ datas }: any) => {
  return (
    <div className="flex-1 h-[67px] border p-3 rounded-md flex gap-3 items-center">
      <img src={datas.type === "file" ? WordIcon : FolderIcon} alt="" />
      <div className="flex flex-col justify-between gap-1">
        <p className="text-xs font-semibold leading-[1.23] text-left text-[#222b45]">
          {datas.title}
        </p>
        <p className="text-xs font-normal leading-[1.33] text-left text-[#8f9bb3]">
          {datas.file ? `${datas.file} files` : ""} {datas.fileSize} GIB
        </p>
      </div>
    </div>
  );
};

export default FileCard;
