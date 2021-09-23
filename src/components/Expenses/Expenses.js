import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filterData, setFilterData] = useState("2019");

  const onChangeFilterHandler = (enteredFilteData) => {
    setFilterData(enteredFilteData);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == filterData;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterData}
          onChangeFilter={onChangeFilterHandler}
        />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
