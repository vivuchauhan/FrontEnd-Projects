import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/card";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";
import ExpensesLit from "./ExpensesLit";
function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState('2020');
  
  const filterChangeHandler = (slectedYear) => {
    setfilteredYear(slectedYear);
  }

  const filterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />

        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesLit item={filterdExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
