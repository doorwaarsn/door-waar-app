import React from "react";
import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

export interface PieData {
  name: string;
  value: number;
  color: string;
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
      <g>
        <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius - 5}
            outerRadius={outerRadius + 10}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
        />
      </g>
  );
};

interface Props {
  directUsers: { id: number; name: string }[]; // Type précis pour directUsers
  organicUsers: { id: number; name: string }[]; // Type précis pour organicUsers
}

const RChart = ({ directUsers, organicUsers }: Props) => {
  const data: PieData[] = [
    {
      name: "Certifiés",
      value: directUsers?.length || 0,
      color: "#14ABE3",
    },
    {
      name: "Non Certifiés",
      value: organicUsers?.length || 0,
      color: "#94cbff",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined); // Remplacer null par undefined
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
      <div className="w-full h-full flex flex-col justify-start items-center">
        <ResponsiveContainer width="80%" height="80%">
          <PieChart>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="76%"
                outerRadius="90%"
                labelLine={false}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={() => setActiveIndex(undefined)} // Utilisation de undefined
                paddingAngle={activeIndex !== undefined ? 3 : 0}
                animationDuration={800}
                cornerRadius={5}
            >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="flex gap-3 justify-center mt-3">
          {data.map((entry, index) => (
              <div key={index} className="flex justify-center items-center gap-1">
                <div
                    className="w-[12px] h-[12px] aspect-square rounded-full"
                    style={{ background: entry.color }}
                />
                <p className="text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
                  {entry.name} ({entry.value})
                </p>
              </div>
          ))}
        </div>
      </div>
  );
};

export default RChart;
