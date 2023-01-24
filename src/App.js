 import './App.css';
import ExpenseItem from './Components/ExpenseItem';


function App() {
  const todos = [
    {
      id:'1',
      title: 'insurance',
      amount: 164.5,
      date:new Date(2022,7,14)
    },
    {
      id: '2',
      title: 'Laptop',
      amount: 1600.672,
      date: new Date(2022, 7, 25)
    },
    {
      id: '3',
      title: 'Ear Pods',
      amount: 294.67,
      date:new Date(2022,5,17)
    }
  ]
  return (
    <div className="App">
      <ExpenseItem
        title={todos[0].title}
        amount={todos[0].amount}
        date={todos[0].date}
      />
      <ExpenseItem
        title={todos[1].title}
        amount={todos[1].amount}
        date={todos[1].date}
      />
      <ExpenseItem
        title={todos[2].title}
        amount={todos[2].amount}
        date={todos[2].date}
      />
    </div>
  );
}

export default App;
