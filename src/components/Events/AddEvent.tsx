import ColorPicker from "./ColorPicker";
import HoureSelector from "./HoureSelector";
import Default_on from "../../assets/icons/Default_ ON.svg";
import { useDispatch } from "react-redux";
import Autosuggest, { InputProps } from "react-autosuggest";
import { useState } from "react";
import { EventCategory } from "../../contexts/category/type";
import { useUsers } from "../../contexts/users/users.provider";
import { User } from "../../common/users/users.models";

const AddEvent = ({ showModal, setShowModal }: any) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [attendees, setAttendees] = useState<User[]>([]);
  const [category, setCategory] = useState<EventCategory>(EventCategory.BLUE);
  const { users } = useUsers();

  const handleStartTimeChange = (time: string) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time: string) => {
    setEndTime(time);
  };
  const handleSelectChange = (event: any) => {
    const selectedEmails = Array.from(
      event.target.selectedOptions,
      (option: any) => option.value
    );
    const selectedUsers = users.filter((user) =>
      selectedEmails.includes(user.phoneNumber)
    );
    // setAttendees(selectedUsers);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newEvent = {
      title,
      description,
      startTime: new Date(`${startDate}T${startTime}`),
      endTime: new Date(`${endDate}T${endTime}`),
      location,
      hostId: "currentUserId",
      attendees,
      category,
    };
    // dispatch(createEvent(newEvent));
    setShowModal(false);
  };

  //console.log(attendees, title, location,description, startDate, startTime, endDate, endTime, category);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-[660px] h-[550px] flex flex-col gap-4">
            <div className="flex justify-between items-center pb-3">
              <h2 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
                Add Event
              </h2>

              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <div className="w-full flex justify-between items-center">
              <p className="text-[15px] font-normal leading-[1.07] text-left text-[#c5cee0]">
                Informations Event
              </p>
              <div className="flex items-center gap-2">
                <ColorPicker
                  selectedCategory={category}
                  setSelectedCategory={setCategory}
                />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="w-full flex flex-col  gap-2">
                <div className="flex-1">
                  <input
                    placeholder="Title*"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    placeholder=" Address*"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-between gap-1">
                <div className="flex-1">
                  <label className="block text-[15px] font-normal leading-[1.07] text-left text-[#c5cee0]">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[15px] font-normal leading-[1.07] text-left text-[#c5cee0]">
                    Ends Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-between gap-1">
                <div className="flex-1">
                  <HoureSelector
                    time={startTime}
                    setTime={() => handleStartTimeChange}
                  />
                </div>
                <div className="flex-1">
                  <HoureSelector
                    time={endTime}
                    setTime={() => handleEndTimeChange}
                  />
                </div>
              </div>
              <div className="w-full flex justify-between gap-1">
                <textarea
                  name="desc"
                  id=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-[120px] rounded-md bg-[#f9fbfd] p-2"
                  placeholder="Type your note..."
                ></textarea>
              </div>
              {/* <div className="w-full flex-1">
               <label htmlFor="user-email-select">Invit persons</label>
                <input
                  list="user-emails"
                  id="user-email-select"
                  name="user-email"
                  onChange={handleSelectChange}
                  className="input ml-[5%]"
                />
                <datalist id="user-emails">
                  {users.map(user => (
                    <option key={user.id} value={user.email} />
                  ))}
                </datalist>
                </div> */}

              <div className="flex justify-between gap-4">
                <div className="flex gap-4 text-[12px] items-center font-normal leading-[1.33] text-left text-[#8f9bb3]">
                  <span>Notification</span>
                  <img src={Default_on} alt="" className="w-8" />
                </div>
                <div className="flex gap-4">
                  <button className="w-[100px] h-[34px] mt-[5px] mb-[25px]  rounded-lg bg-[#0095ff] text-[13px] font-semibold leading-[1.23] text-center text-[#fff]">
                    Add Event
                  </button>
                  <button
                    type="button"
                    className="bg-gray-300 w-[88px] h-[34px] mt-[5px] mb-[25px]  p-[9px] px-[15px] rounded-lg text-[13px] font-semibold leading-[1.23] text-center text-[#fff]"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEvent;
