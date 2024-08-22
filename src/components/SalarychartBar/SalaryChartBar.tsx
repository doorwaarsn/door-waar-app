import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 120,
    pv: 54,
    amt: 76,
  },
  {
    name: "Page B",
    uv: 80,
    pv: 60,
    amt: 45,
  },
  {
    name: "Page C",
    uv: 90,
    pv: 80,
    amt: 61,
  },
  {
    name: "Page D",
    uv: 90,
    pv: 100,
    amt: 60,
  },
  {
    name: "Page E",
    uv: 56,
    pv: 45,
    amt: 80,
  },
  {
    name: "Page F",
    uv: 23,
    pv: 34,
    amt: 45,
  },
];

const CustomLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="flex justify-center mt-4 gap-2">
      {payload.map((entry: any, index: any) => (
        <div key={`item-${index}`} className="flex items-center gap-2 ">
          <div
            style={{ backgroundColor: entry.color }}
            className="w-2 h-2 rounded-full"
          />
          <span className="text-[12px] font-normal leading-[1.33] text-left text-[#8f9bb3]">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default class SalaryChartBar extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={200}
          data={data}
          margin={{
            right: 10,
            left: 10,
            bottom: 5,
          }}
          barSize={8}
          barGap={0}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Bar dataKey="pv" fill="#14ABE3" radius={20} />
          <Bar dataKey="uv" fill="#94cbff" radius={20} />
          <Bar dataKey="amt" fill="#cde7ff" radius={20} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
