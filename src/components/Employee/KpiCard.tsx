import React from "react";

const KpiCard = ({
  users,
  title,
  setViewsDatasChange,
  num,
  totaluser,
}: any) => {

  const porcentUser = (() => {
    if (title === "Total Workers") {
      return 100;
    }
    if (users.length && totaluser.length) {
      return (users.length / totaluser.length) * 100;
    }
    return 0;
  })();


  return (
    <div
      onClick={() => setViewsDatasChange(num)}
      className="w-[25%] h-[115px] bg-white rounded-md flex flex-col justify-between  items-start p-5 gap-4 border cursor-pointer"
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold leading-tight text-left text-[#222b45]">
            {users.length}
          </p>
          <p className="text-xs font-normal leading-5 text-left text-[#8f9bb3]">
            {title}
          </p>
        </div>

        <p
          className={`text-2xl font-normal leading-tight text-left ${
            porcentUser >= 50 ? "text-[#00e096]" : "text-[#14ABE3]"
          }`}
        >
          {porcentUser.toFixed(0)}%
        </p>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className={`${
            porcentUser >= 50 ? "bg-[#00e096]" : "bg-[#14ABE3]"
          } h-1 rounded-full`}
          style={{ width: `${porcentUser}%` }}
        ></div>
      </div>
    </div>
  );
};

export default KpiCard;
