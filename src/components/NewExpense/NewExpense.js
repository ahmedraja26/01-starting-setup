import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React from "react";

function NewExpense(props) {
  const [isEditing, setEditing] = React.useState(false);

  function SaveExpenseDateHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  function startEditingHandler() {
    setEditing(true);
  }

  function stopEditingHandler() {
    setEditing(false);
  }

  if (isEditing === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseDate={SaveExpenseDateHandler}
          onCancel={stopEditingHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}>Add New Expense</button>
      </div>
    );
  }
}

export default NewExpense;
