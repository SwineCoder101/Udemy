import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../Filter/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const items = props.items;
  const [selectedYearState, setSelectedYearState] = useState(2021);

  const filterChangeHandler = (selectedYear) => {
    setSelectedYearState(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYearState}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
