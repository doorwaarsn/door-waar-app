import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import React from "react";


const data = [
  {
    name: "Page A",
    "Bank of America": 4000,
    "RBG Bank": 2400,
    "Shinhan Bank": 5000,
  },
  {
    name: "Page B",
    "Bank of America": 3000,
    "RBG Bank": 1398,
    "Shinhan Bank": 2210,
  },
  {
    name: "Page C",
    "Bank of America": 2000,
    "RBG Bank": 4500,
    "Shinhan Bank": 2290,
  },
  {
    name: "Page D",
    "Bank of America": 2780,
    "RBG Bank": 3908,
    "Shinhan Bank": 2000,
  },
  {
    name: "Page E",
    "Bank of America": 1890,
    "RBG Bank": 4800,
    "Shinhan Bank": 2181,
  },
  {
    name: "Page F",
    "Bank of America": 2390,
    "RBG Bank": 3800,
    "Shinhan Bank": 2500,
  },
  {
    name: "Page G",
    "Bank of America": 3490,
    "RBG Bank": 4300,
    "Shinhan Bank": 2100,
  },
];

const LineChartBalance = () => {
  const CustomLegend = ({ payload }: any) => {
    return (
      <ul className="flex flex-col gap-2 mt-3">
        {payload.map((entry: any, index: any) => (
          <li
            key={`item-${index}`}
            className="flex items-center gap-2 text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]"
          >
            <span
              style={{ backgroundColor: entry.color }}
              className="w-[20px] h-[2px] block rounded-full"
            />
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={300}
        height={100}
        data={data}
        margin={{
          left: 0,
        }}
      >
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 8 }}
          tickMargin={0}
        />
        <Tooltip />
        <Legend content={<CustomLegend />} />
        <Line
          type="monotone"
          dataKey="Bank of America"
          stroke="#14ABE3"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="RBG Bank"
          stroke="#ff2d55"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Shinhan Bank"
          stroke="#00e096"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartBalance;
