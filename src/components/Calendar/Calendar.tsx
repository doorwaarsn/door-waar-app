import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";

const locales = {
  "en-FR": require("date-fns"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
  color: string;
  description?: string;
}

interface MyCalendarProps {
  myEventsList: MyEvent[];
}

const MyCalendar: React.FC<MyCalendarProps> = ({ myEventsList }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<MyEvent | null>(null);

  const openModal = (event: MyEvent) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const eventStyleGetter = (event: MyEvent) => {
    const backgroundColor = event.color;
    const style = {
      backgroundColor,
      borderRadius: "5px",
      color: "#eff4fa",
      border: "0px",
      display: "block",
      margin: "5px 0px",
    };
    return {
      style,
    };
  };

  return (
    <div className="myCustomHeight" style={{ height: "1156px", width: "100%" }}>
      <Calendar
        localizer={localizer}
        step={60}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: "100%",
          fontSize: "15px",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "1.07",
          letterSpacing: "normal",
          textAlign: "right",
          color: "#222b45",
        }}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={openModal}
        components={{
          event: ({ event }:any) => (
            <span>
              <strong>{event.title}</strong>
              <br />
              {moment(event.start).format("HH:mm")} -{" "}
              {moment(event.end).format("HH:mm")}
            </span>
          ),
        }}
      />

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded shadow-lg max-w-xl w-full flex flex-col gap-4">
            <>
              <div className="flex justify-start items-center gap-2 pb-4 border-b">
                <p
                  className={`w-6 h-6 rounded-full flex justify-center items-center bg-[${selectedEvent.color}]`}
                >
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                </p>
                <h2 className="text-[17px] font-semibold leading-[0.94] text-left text-[#222b45]">
                  {selectedEvent.title}
                </h2>
              </div>
              <p className="w-full flex gap-3 items-center text-[13px] font-normal leading-[1.23] text-left text-[#222b45]">
                <span className="text-[#8f9bb3]">Start:</span>
                {moment(selectedEvent.start).format("MMMM Do YYYY, h:mm a")}
              </p>
              <p className="w-full flex gap-3 items-center text-[13px] font-normal leading-[1.23] text-left text-[#222b45]">
                <span className="text-[#8f9bb3]">End:</span>{" "}
                {moment(selectedEvent.end).format("MMMM Do YYYY, h:mm a")}
              </p>
              <p className="w-full flex gap-3 items-center text-[13px] font-normal leading-[1.23] text-left text-[#222b45]">
                <span className="text-[#8f9bb3]">Description:</span>{" "}
                {selectedEvent.description}
              </p>
              <div className="w-full flex items-center justify-end gap-3">
                <button className="mt-4 px-5 py-1 bg-[#0067b2] text-white rounded hover:bg-blue-700">
                  Edit
                </button>
                <button
                  onClick={closeModal}
                  className="mt-4 px-5 py-1 border text-[#8f9bb3] rounded"
                >
                  Close
                </button>
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
