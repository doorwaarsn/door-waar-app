import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoIosList } from "react-icons/io";
import ListOfDepartments from "../../components/Departments/ListOfDepartments";
import CardOfDepartments from "../../components/Departments/CardOfDepartments";
import AddDepartments from "../../components/Departments/AddDepartments";
import { useDepartments } from "../../contexts/Department/department.provider";

const Department = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDepartViews, setShowDepartViews] = useState(1);
  const { departments, loading, error } = useDepartments();

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      <div className="w-full flex  justify-between items-center gap-5">
        <div className="flex items-center w-[80px] h-[30px] py-[7px] rounded-md border border-[#eff4fa] overflow-hidden">
          <button
            onClick={() => setShowDepartViews(1)}
            className={`flex-1 ${
              showDepartViews === 1
                ? "bg-[#14ABE3] text-white "
                : "text-[#231f20]"
            } h-full flex items-center py-4 justify-center`}
          >
            <IoIosList size={16} />
          </button>
          <button
            onClick={() => setShowDepartViews(2)}
            className={`flex-1 ${
              showDepartViews === 2
                ? "bg-[#14ABE3] text-white "
                : "text-[#231f20]"
            }  h-full py-4 flex items-center justify-center`}
          >
            <RxDashboard size={16} />
          </button>
        </div>
        {showModal && <AddDepartments setShowModal={setShowModal} />}
        <button
          onClick={() => setShowModal(true)}
          className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white"
        >
          Add New
        </button>
      </div>

      {showDepartViews === 1 ? (
        <ListOfDepartments
          datas={departments}
          loading={loading}
          error={error}
        />
      ) : (
        <CardOfDepartments
          datas={departments}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
};

export default Department;
