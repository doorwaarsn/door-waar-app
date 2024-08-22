import React, { useState } from "react";
// import FileUpload from "./FileUpload";
import { useDepartments } from "../../contexts/Department/department.provider";
import { useUsers } from "../../contexts/users/users.provider";
import { toast } from "react-toastify";
// Assurez-vous d'importer la bibliothèque de notification

interface AddDepartmentsProps {
  setShowModal: (show: boolean) => void;
}

const AddDepartments: React.FC<AddDepartmentsProps> = ({ setShowModal }) => {
  const { createDepartments } = useDepartments();
  const { users } = useUsers();
  const [formState, setFormState] = useState({
    name: "",
    // headUser: "",
    description: "",
    banner: "image.jpg", // Type string
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, files } = e.target;
  //   if (files && files.length > 0) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setFormState((prevState) => ({ ...prevState, [name]: reader.result as string }));
  //     };
  //     reader.readAsDataURL(files[0]);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const departmentData = {
      name: formState.name,
      description: formState.description,
      banner: formState.banner,
    };
    await createDepartments(departmentData);
    toast.success("Department created successfully!");
    setShowModal(false);
    setFormState({
      name: "",
      description: "",
      banner: "",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-1/3 h-[678px]">
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
            Add Departments
          </h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-3">
          <div className="w-full flex justify-between gap-1">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          {/* <div className="w-full flex justify-between gap-1">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Select Head
              </label>
              <select
                name="headUser"
                value={formState.headUser}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Select Head</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
          <div className="w-full flex justify-between gap-1">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Description *
              </label>
              <textarea
                name="description"
                value={formState.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="w-full flex justify-between gap-1">
            <div className="flex-1">
              {/* <FileUpload
                name="banner"
                onChange={handleFileChange}
              /> */}
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="w-[88px] h-[34px] mt-[5px] mb-[25px] p-[9px] px-[15px] rounded-lg bg-[#0095ff] text-[13px] font-semibold leading-[1.23] text-center text-[#fff]"
            >
              Add New
            </button>
            <button
              type="button"
              className="bg-gray-300 w-[88px] h-[34px] mt-[5px] mb-[25px] p-[9px] px-[15px] rounded-lg text-[13px] font-semibold leading-[1.23] text-center text-[#fff]"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDepartments;
