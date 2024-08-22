import React from "react";
import RichTextEditor from "../../components/Activities/RichTextEditor";

const Activities = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center rounded-[8px] border border-[#eff4fa] bg-[#fff]">
      <RichTextEditor />
    </div>
  );
};

export default Activities;
