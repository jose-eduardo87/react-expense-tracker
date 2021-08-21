import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

import "./Expenses.css";

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState("2021");

  const filteredResults = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === selectedDate
  );

  const dateFilterHandler = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedDate}
          onDateFilter={dateFilterHandler}
        />
        <ExpensesChart expenses={filteredResults} />
        <ExpensesList expenses={filteredResults} />
      </Card>
    </div>
  );
}

export default Expenses;
