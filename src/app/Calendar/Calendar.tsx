import React from "react";
import AddIcon from "../../assets/icons/arrow-circle-down-fill Copy 3.svg";
import "./Calendar.css";
import MyCalendar from "../../components/Calendar/Calendar";
import { Event } from "react-big-calendar";
import moment from "moment";

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
    color: "#ff3d71",
  },
];

const Calendar = () => {
  return (
    <div className="w-full h-auto flex  gap-4 items-start justify-center">
      <div className="w-1/3 rounded-md flex flex-col justify-start gap-5">
        <div className="p-4 bg-white rounded-md  flex flex-col gap-3 shadow-sm">
          <div className="w-full flex justify-between items-center pb-2 border-b">
            <p className="text-sm font-normal leading-[1.33] text-left text-[#222b45]">
              Events List
            </p>
            <button>
              <img src={AddIcon} alt="" />
            </button>
          </div>
          <div className="container">
            <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
              {myEventsList.map((event, i) => (
                <div className="flex md:contents" key={i}>
                  <div
                    className={`bg-[${event.color}] h-[38px] flex justify-start items-center gap-3 p-2 rounded-md my-2 mr-auto shadow-sm w-full`}
                  >
                    <h3 className="text-xs font-semibold leading-[0.67] text-left text-white">
                      {moment(event.start).format("HH:mm")} -{" "}
                      {moment(event.end).format("HH:mm")}
                    </h3>
                    <p className="text-xs font-normal leading-[0.67] text-left text-white">
                      {event.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-md  flex flex-col  shadow-sm gap-4">
          <div className="w-full flex justify-between items-center pb-2  border-b">
            <p className="text-sm font-normal leading-[1.33] text-left text-[#222b45]">
              Todo List
            </p>
            <button>
              <img src={AddIcon} alt="" />
            </button>
          </div>

          <div className="w-full flex flex-col gap-5">
            {myEventsList.map((event, i) => (
              <div className="border-b" key={i}>
                <input className="hidden" type="checkbox" id={event.color} />
                <label
                  className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
                  htmlFor={event.color}
                >
                  <span className="flex items-center justify-center w-4 h-4 rounded-sm text-transparent border-2 border-gray-100">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="ml-4 text-xs font-normal leading-5 text-left text-[#222b45]">
                    {event.title}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/3 bg-white rounded-md h-[832px] shadow-sm p-4 flex flex-col gap-5">
        <div className="w-full flex justify-start items-center pb-3  border-b">
          <p className="text-sm font-normal leading-[1.33] text-left text-[#222b45]">
            Sara Hopkins
          </p>
        </div>
        <MyCalendar myEventsList={myEventsList} />
      </div>
    </div>
  );
};

export default Calendar;
