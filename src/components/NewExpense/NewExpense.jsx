import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [shouldFormAppear, setShouldFormAppear] = useState(false);

  const closeFormHandler = () => setShouldFormAppear(false);
  const openFormHandler = () => setShouldFormAppear(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    closeFormHandler();
  };

  const render = shouldFormAppear ? (
    <ExpenseForm
      onClose={closeFormHandler}
      onSaveExpenseData={saveExpenseDataHandler}
    />
  ) : (
    <button onClick={openFormHandler}>Add new expense</button>
  );

  return <div className="new-expense">{render}</div>;
};

export default NewExpense;
