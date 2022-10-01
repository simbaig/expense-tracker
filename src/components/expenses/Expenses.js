import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const getYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} getYear={getYearHandler} />
			<ExpenseItem
				title={expenses[0].title}
				date={expenses[0].date}
				amount={expenses[0].amount}
			/>
			<ExpenseItem
				title={expenses[1].title}
				date={expenses[1].date}
				amount={expenses[1].amount}
			/>
			<ExpenseItem
				title={expenses[2].title}
				date={expenses[2].date}
				amount={expenses[2].amount}
			/>
			<ExpenseItem
				title={expenses[3].title}
				date={expenses[3].date}
				amount={expenses[3].amount}
			/>
		</Card>
	);
};

export default Expenses;
