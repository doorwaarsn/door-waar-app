import React from "react";

const AddContact = ({ showModal, setShowModal }: any) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-[1144px] h-[500px]">
            <div className="flex justify-between items-center pb-3">
              <h2 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
                Add Contact
              </h2>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="w-full flex justify-between gap-1">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-between gap-1">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              {/* <FileUpload /> */}
              <div className="flex justify-end gap-4">
                <button className="w-[100px] h-[34px] mt-[5px] mb-[25px]  rounded-lg bg-[#0095ff] text-[13px] font-semibold leading-[1.23] text-center text-[#fff]">
                  Add Contact
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

export default AddContact;
