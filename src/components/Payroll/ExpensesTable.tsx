import React from "react";

const expenses = [
  {
    id: 1,
    date: "2024-06-01",
    category: "Transport",
    amount: 50.75,
    amount2: 49.34,
    amount3: 0,
  },
  {
    id: 2,
    date: "2024-06-02",
    category: "Groceries",
    amount: 120.45,
    amount2: 131.2,
    amount3: 123,
  },
  {
    id: 3,
    date: "2024-06-03",
    category: "Entertainment",
    amount: 30.0,
    amount2: 28.3,
    amount3: 0,
  },
  {
    id: 4,
    date: "2024-06-04",
    category: "Utilities",
    amount: 75.2,
    amount2: 71.3,
    amount3: 87.4,
  },
  {
    id: 5,
    date: "2024-06-05",
    category: "Dining",
    amount: 45.3,
    amount2: 52.2,
    amount3: 0,
  },
  {
    id: 6,
    date: "2024-06-06",
    category: "Health",
    amount: 60.0,
    amount2: 76.01,
    amount3: 100,
  },
  {
    id: 7,
    date: "2024-06-07",
    category: "Rent",
    amount: 800.0,
    amount2: 1300,
    amount3: 0,
  },
];

const calculateTotal = (expenses: any, key: any) => {
  return expenses
    .reduce((acc: any, expense: any) => acc + expense[key], 0)
    .toFixed(2);
};

const ExpensesTable = () => {
  const totalAmount = calculateTotal(expenses, "amount");
  const totalAmount2 = calculateTotal(expenses, "amount2");
  const totalAmount3 = calculateTotal(expenses, "amount3");

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg">
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-t">
              <td className="px-4 py-4 text-[12px] font-normal text-[#222b45]">
                {expense.date}
              </td>
              <td className="px-4 py-4 text-[12px] font-normal text-[#222b45]">
                {expense.category}
              </td>
              <td className="px-4 py-4 text-[12px] font-normal text-[#222b45]">{`$${expense.amount.toFixed(
                2
              )}`}</td>
              <td className="px-4 py-4 text-[12px] font-normal text-[#222b45]">{`$${expense.amount2.toFixed(
                2
              )}`}</td>
              <td className="px-4 py-4 text-[12px] font-normal text-[#222b45]">{`$${expense.amount3.toFixed(
                2
              )}`}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={2}
              className="px-4 py-4 text-[12px] font-normal text-[#8f9bb3] text-left"
            ></td>
            <td className="px-4 py-4 text-[12px] font-normal text-[#222b45]  text-left">{`$${totalAmount}`}</td>
            <td className="px-4 py-4 text-[12px] font-normal text-[#222b45] text-left">{`$${totalAmount2}`}</td>
            <td className="px-4 py-4 text-[12px] font-normal text-[#0095ff] text-left">{`$${totalAmount3}`}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpensesTable;
