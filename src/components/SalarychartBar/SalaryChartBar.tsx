import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO } from "date-fns";
import React from "react";

// Type des utilisateurs pour une meilleure gestion des types
interface User {
  createdAt: string;
  providerType: string;
}

// Objet de correspondance des mois
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

const SalaryChartBar = ({ users }: { users: User[] }) => {
  // Initialiser un tableau avec tous les mois en français
  const allMonths = Object.values(monthTranslations);

  // Grouper les données par mois
  const groupedData = allMonths.map((month) => {
    const monthData = users
        .filter(
            (user: User) =>
                monthTranslations[format(parseISO(user.createdAt), "MMM")] === month
        )
        .reduce(
            (acc: any, user: User) => ({
              "Total Ouvriers": acc["Total Ouvriers"] + 1, // Chaque utilisateur est compté
              "Total Entreprises":
                  acc["Total Entreprises"] + (user.providerType === "ENTITY" ? 1 : 0),
              "Total Particuliers":
                  acc["Total Particuliers"] +
                  (user.providerType === "INDIVIDUAL" ? 1 : 0),
            }),
            { "Total Ouvriers": 0, "Total Entreprises": 0, "Total Particuliers": 0 }
        );

    return {
      name: month,
      ...monthData,
    };
  });

  // Composant légende personnalisée
    const CustomLegend = ({ payload = [] }: { payload?: any[] }) => (
        <div className="flex justify-center mt-4 gap-2">
            {payload?.map((entry, index) => (
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

  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={200}
            data={groupedData}
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
          <Bar dataKey="Total Ouvriers" fill="#14ABE3" radius={20} />
          <Bar dataKey="Total Entreprises" fill="#94cbff" radius={20} />
          <Bar dataKey="Total Particuliers" fill="#cde7ff" radius={20} />
        </BarChart>
      </ResponsiveContainer>
  );
};

export default SalaryChartBar;
