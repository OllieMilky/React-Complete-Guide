import ExpenseList from "./components/Expenses/ExpenseList";

function App() {
	const expenses = [
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
	return (
		<div>
			<ExpenseList expenses={expenses} />
		</div>
	);
}

export default App;
