import Card from "../UI/Card";
import "./Expenses.css";
import { Expense } from "../../App";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

export interface ExpensesProps {
  items: Expense[];
}

const Expenses = (props: ExpensesProps) => {
  const [filteredYear, setFilteredYear] = useState<string>("2021");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
