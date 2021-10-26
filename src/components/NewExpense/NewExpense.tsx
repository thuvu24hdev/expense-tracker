import React from "react";
import { ExpenseItemProps } from "../Expenses/ExpenseItem";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

interface NewExpenseProps {
  onAddExpense: Function;
}
const NewExpense = (props: NewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseItemProps) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
