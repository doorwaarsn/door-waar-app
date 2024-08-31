import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO } from "date-fns";

const monthTranslations: { [key: string]: string } = {
  Jan: "Janv",
  Feb: "Févr",
  Mar: "Mars",
  Apr: "Avr",
  May: "Mai",
  Jun: "Juin",
  Jul: "Juil",
  Aug: "Août",
  Sep: "Sept",
  Oct: "Oct",
  Nov: "Nov",
  Dec: "Déc",
};

const EmployeechartBar = ({ users, customers }: any) => {
  // Initialiser un tableau avec tous les mois en français
  const allMonths = Object.values(monthTranslations);

  // Grouper les données par mois
  const groupedData = allMonths.map((month) => {
    const monthDataUsers = users
      .filter(
        (user: any) =>
          monthTranslations[format(parseISO(user.createdAt), "MMM")] === month
      )
      .reduce(
        (acc: any) => ({
          "Total Ouvriers": acc["Total Ouvriers"] + 1,
        }),
        { "Total Ouvriers": 0 }
      );

    const monthDataCustomers = customers
      .filter(
        (customer: any) =>
          monthTranslations[format(parseISO(customer.createdAt), "MMM")] ===
          month
      )
      .reduce(
        (acc: any) => ({
          "Total Clients": acc["Total Clients"] + 1,
        }),
        { "Total Clients": 0 }
      );

    return {
      name: month,
      ...monthDataUsers,
      ...monthDataCustomers,
    };
  });

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

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={200}
        data={groupedData}
        margin={{
          right: 10,
          left: 10,
          bottom: 5,
        }}
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
        <Line
          type="monotone"
          dataKey="Total Ouvriers"
          stroke="#ff2d55"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="Total Clients"
          stroke="#00e096"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EmployeechartBar;
