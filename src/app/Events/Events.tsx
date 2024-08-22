import React, { useState } from "react";
import { Event } from "react-big-calendar";
import MyCalendar from "../../components/Calendar/Calendar";
import AddEvent from "../../components/Events/AddEvent";

interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
  color: string;
}
const myEventsList: MyEvent[] = [
  {
    title: "Meeting with Bob",
    start: new Date(2024, 5, 20, 10, 0),
    end: new Date(2024, 5, 20, 11, 0),
    color: "#884dff",
  },
  {
    title: "Lunch with Alice",
    start: new Date(2024, 5, 21, 12, 0),
    end: new Date(2024, 5, 21, 13, 0),
    color: "#00e096",
  },
  {
    title: "Conference",
    start: new Date(2024, 5, 22, 9, 0),
    end: new Date(2024, 5, 22, 17, 0),
    color: "#0067b2",
  },
  {
    title: "Dinner with friends",
    start: new Date(2024, 5, 23, 19, 0),
    end: new Date(2024, 5, 23, 21, 0),
    color: "#ffb45e",
  },
  {
    title: "Marketing Team Meeting",
    start: new Date(2024, 5, 17, 11, 0),
    end: new Date(2024, 5, 17, 13, 0),
    color: "#ff2d55",
  },
];

const Events = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-auto flex flex-col gap-10 items-center">
      <div className="w-full flex items-center justify-between gap-5">
        <div></div>
        {showModal && (
          <AddEvent setShowModal={setShowModal} showModal={showModal} />
        )}
        <button
          onClick={() => setShowModal(true)}
          className="w-[88px] h-[34px] p-[9px] px-[15px] rounded-lg bg-custom-green text-[13px] font-semibold leading-[1.23] text-center text-white"
        >
          Add New
        </button>
      </div>
      <MyCalendar myEventsList={myEventsList} />
    </div>
  );
};

export default Events;
