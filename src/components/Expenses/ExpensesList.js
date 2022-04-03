import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpnesesList.css";

function ExpensesList(props) {
  let expensesContent = <p>No expenses found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Founds no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expMap) => (
        <ExpenseItem
          key={expMap.id}
          title={expMap.title}
          amount={expMap.amount}
          date={expMap.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpensesList;
