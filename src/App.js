import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => [expenseData, ...prevState]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
