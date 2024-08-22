import React, { useState } from "react";
import { EventCategory } from "../../contexts/category/type";

interface Color {
  id: number;
  name: string;
  value: string;
  category: EventCategory;
}
const ColorPicker = ({ selectedCategory, setSelectedCategory }: any) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (category: EventCategory) => {
    setSelectedCategory(category);
  };

  const colors = [
    { id: 1, name: "Red", value: "#ff2d55", category: EventCategory.RED },
    { id: 2, name: "Blue", value: "#0095ff", category: EventCategory.BLUE },
    { id: 3, name: "Green", value: "#00e096", category: EventCategory.GREEN },
    { id: 4, name: "Yellow", value: "#ffb45e", category: EventCategory.YELLOW },
  ];

  return (
    <div className="flex justify-center items-center">
      {colors.map((color) => (
        <label
          key={color.id}
          className={`flex items-center justify-center mx-2 border border-gray-300 rounded-full h-7 w-7 cursor-pointer bg-[${color.value}]`}
          title={color.name}
        >
          <input
            type="radio"
            className="hidden"
            value={color.category}
            checked={selectedCategory === color.category}
            onChange={() => handleColorChange(color.category)}
          />
          <span
            className={`w-2 h-2 rounded-full ${
              selectedCategory === color.category ? "bg-white" : ""
            }`}
          ></span>
        </label>
      ))}
    </div>
  );
};

export default ColorPicker;
