import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    console.log(title);
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log(amount);
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(date);
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");

    props.onSaveExpenseData(expense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={amount}
            onChange={amountChangeHandler}
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
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
