import React, { useState } from "react";

interface HourProps  {
  time: string;
  setTime:  React.Dispatch<React.SetStateAction<string>>;
}
const HourSelector: React.FC<HourProps> = ({time, setTime}) => {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(event.target.value);
  };

  const hours = Array.from({ length: 24 }, (_, index) => {
    const hour = index < 10 ? `0${index}` : `${index}`;
    return `${hour}:00`;
  });

  return (
      <div className="flex justify-center items-center mt-4">
      <select
        value={time}
        onChange={handleChange}
        className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled>
          Select Hour
        </option>
        {hours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HourSelector;
