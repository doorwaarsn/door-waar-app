import React, { useState } from "react";
import classNames from "classnames";
import { RxDashboard } from "react-icons/rx";
import { IoIosList } from "react-icons/io";
import ListOfDepartments from "../../components/Departments/ListOfDepartments";
import CardOfDepartments from "../../components/Departments/CardOfDepartments";
import AddDepartments from "../../components/Departments/AddDepartments";
import { useDepartments } from "../../contexts/Department/department.provider";

const Department = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeView, setActiveView] = useState(1);
  const { departments, loading, error } = useDepartments();

  const handleViewChange = (view: number) => {
    setActiveView(view);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center">
      <div className="w-full flex justify-between items-center gap-5">
        <ViewToggleButtons activeView={activeView} onViewChange={handleViewChange} />
        {isModalOpen && <AddDepartments setShowModal={setIsModalOpen} />}
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white"
        >
          Add New
        </button>
      </div>

      {activeView === 1 ? (
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

const ViewToggleButtons = ({
  activeView,
  onViewChange,
}: {
  activeView: number;
  onViewChange: (view: number) => void;
}) => (
  <div className="flex items-center w-[80px] h-[30px] py-[7px] rounded-md border border-[#eff4fa] overflow-hidden">
    <button
      onClick={() => onViewChange(1)}
      className={classNames("flex-1 h-full flex items-center justify-center py-4", {
        "bg-[#14ABE3] text-white": activeView === 1,
        "text-[#231f20]": activeView !== 1,
      })}
    >
      <IoIosList size={16} />
    </button>
    <button
      onClick={() => onViewChange(2)}
      className={classNames("flex-1 h-full flex items-center justify-center py-4", {
        "bg-[#14ABE3] text-white": activeView === 2,
        "text-[#231f20]": activeView !== 2,
      })}
    >
      <RxDashboard size={16} />
    </button>
  </div>
);

export default Department;
