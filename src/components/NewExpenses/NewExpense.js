import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		onAddExpense(expenseData);
		setIsEditing(!isEditing);
	};

	const clickHandler = () => {
		setIsEditing(!isEditing);
	};

	return (
		<div className="new-expense">
			{isEditing ? (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
				/>
			) : (
				<button onClick={clickHandler}>Add New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
