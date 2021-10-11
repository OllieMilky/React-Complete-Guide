import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "Booze",
		amount: 912,
		date: new Date(2020, 3, 14),
	},
	{
		id: "e3",
		title: "Taxi",
		amount: 542,
		date: new Date(2020, 1, 14),
	},
	{
		id: "e4",
		title: "Food",
		amount: 52,
		date: new Date(2020, 7, 16),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<ExpenseList items={expenses} />
		</div>
	);
}

export default App;
