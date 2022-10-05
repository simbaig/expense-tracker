import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const getYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter selected={filteredYear} getYear={getYearHandler} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList filteredExpenses={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
