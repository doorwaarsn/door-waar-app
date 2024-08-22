import { useState } from "react";
import { useUsers } from "../../contexts/users/users.provider";
import { toast } from "react-toastify";
import { useDepartments } from "../../contexts/Department/department.provider";

const AddUsers = ({ showModal, setShowModal }: any) => {
  const { createUser, error } = useUsers();
  const { departments } = useDepartments();

  const [formState, setFormState] = useState({
    referenceID: "",
    firstName: "",
    lastName: "",
    email: "",
    jobId: "",
    password: "",
    confirmPassword: "",
    gender: "",
    // departId: "",
    type: "",
    role: "",
    street: "",
    city: "",
    phoneNumber: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser(formState);
    toast.success("User created successfully!");
    setShowModal(false);
    setFormState({
      referenceID: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      jobId: "",
      confirmPassword: "",
      gender: "",
      type: "",
      role: "",
      // departId: "",
      street: "",
      city: "",
      phoneNumber: "",
      country: "",
    });
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-[1144px] h-[678px]">
            <div className="flex justify-between items-center pb-3">
              <h2 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
                Add User
              </h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="w-full flex justify-between items-center gap-1">
                <div className="flex-1">
                  <input
                    type="text"
                    name="referenceID"
                    placeholder="Reference ID"
                    value={formState.referenceID}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <select
                    name="type"
                    value={formState.type}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Type</option>
                    <option value="ADVISOR">Advisors</option>
                    <option value="PROVIDER">Provider</option>
                    <option value="PARTNER">Partner</option>
                    <option value="EXTERN">Extern</option>
                    <option value="IN">In</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex justify-between gap-1">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formState.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formState.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-between gap-1">
                <div className="w-2/3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <select
                    name="gender"
                    value={formState.gender}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex justify-between gap-1">
                <div className="flex-1">
                  <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={formState.street}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formState.city}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-between gap-1">
                <div className="flex-1">
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formState.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formState.country}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
              <div className="w-full flex justify-between gap-1">
                <div className="flex-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formState.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="submit"
                  className="w-[88px] h-[34px] mt-[5px] mb-[25px] p-[9px] px-[15px] rounded-lg bg-[#0067b2] text-[13px] font-semibold leading-[1.23] text-center text-[#fff]"
                >
                  Add User
                </button>
                <button
                  type="button"
                  className="bg-gray-300 w-[88px] h-[34px] mt-[5px] mb-[25px]  p-[9px] px-[15px] rounded-lg text-[13px] font-semibold leading-[1.23] text-center text-[#fff]"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddUsers;
