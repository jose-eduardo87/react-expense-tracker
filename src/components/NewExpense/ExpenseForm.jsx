import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (evt) => {
    setTitle(evt.currentTarget.value);
  };

  const priceChangeHandler = (evt) => {
    setPrice(evt.currentTarget.value);
  };

  const dateChangeHandler = (evt) => {
    setDate(evt.currentTarget.value);
  };

  const submitFormHandler = (evt) => {
    evt.preventDefault();

    const expenseData = {
      title,
      amount: +price,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);

    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
