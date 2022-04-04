import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expense(props) {
  const [year, setSelectedYear] = React.useState("2020");

  function SelectExpensesFilterHandler(year) {
    setSelectedYear(year);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onExpensesFilter={SelectExpensesFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;
