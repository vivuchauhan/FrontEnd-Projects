import "./App.css";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
import ExpenseForm from "./Components/NewExpense/ExpenseForm";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "1",
      title: "insurance",
      amount: 164.5,
      date: new Date(2022, 7, 14),
    },
    {
      id: "2",
      title: "Laptop",
      amount: 1600.672,
      date: new Date(2022, 7, 25),
    },
    {
      id: "3",
      title: "Ear Pods",
      amount: 294.67,
      date: new Date(2022, 5, 17),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("app.js");
    console.log(expenses);
  };
  return (
    <div className="App">
      <ExpenseForm/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
