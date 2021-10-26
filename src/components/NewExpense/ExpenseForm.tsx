import React, { ChangeEvent, useState } from "react";

import "./ExpenseForm.css";

interface ExpenseFormProps {
  onSaveExpenseData: Function;
}
const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (
    event: ChangeEvent<{
      value: string;
    }>
  ) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (
    event: ChangeEvent<{
      value: string;
    }>
  ) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (
    event: ChangeEvent<{
      value: string;
    }>
  ) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
