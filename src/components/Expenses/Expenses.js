import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterData, setFilterData] = useState("2019");

  const onChangeFilterHandler = (enteredFilteData) => {
    setFilterData(enteredFilteData);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == filterData;
  });

  let expensesContent = <p>No expense available for this year</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterData}
        onChangeFilter={onChangeFilterHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
