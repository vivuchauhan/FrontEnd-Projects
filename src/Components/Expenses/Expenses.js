import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expenses(props) {
  const [filteredYear,setfilteredYear]=useState('2020');
  const filterChangeHandler = (slectedYear) => {
    setfilteredYear(slectedYear);
  }
  const filterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
