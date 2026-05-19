import React, { useContext, useEffect } from "react";
import TransactionContext from "./TransactionContext";

const ExpenseTable = () => {
	const { data, setdata } = useContext(TransactionContext);
	const { ButtonText, setButtonText } = useContext(TransactionContext);

	useEffect(() => {
		const obj = JSON.parse(localStorage.getItem("Expense"));
		if (obj) {
			setdata(obj);
		}
	}, []);

	const sortedData = data.sort((a, b) => {
		if (ButtonText === "month") {
			return a.month.localeCompare(b.month);
		}
		if (ButtonText === "category") {
			return a.category.localeCompare(b.category);
		}
		if (ButtonText === "payment mode") {
			return a.payment.localeCompare(b.payment);
		}

		return 0;
	});
	return (
		<div className="max-w-4xl mx-auto my-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-white shadow-xl">
			<div className="grid grid-cols-6 px-6 pb-3 text-zinc-400 text-sm font-semibold tracking-wider  border-zinc-800">
				<p>MONTH</p>
				<p>CATEGORY</p>
				<p>DESCRIPTION</p>
				<p>AMOUNT</p>
				<p>PAYMENT</p>
				<p>NOTES</p>
			</div>

			<div className="flex flex-col border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
				{data.map((expense, index) => (
					<div
						key={index}
						className="grid grid-cols-6 px-6 py-4 text-sm items-center hover:bg-zinc-800/40 border-b border-zinc-800 last:border-0 transition-colors text-zinc-200"
					>
						<p className="font-medium text-zinc-100">{expense.month}</p>
						<p className="text-zinc-300">{expense.category}</p>
						<p className="text-zinc-300 truncate">{expense.description}</p>
						<p className="font-semibold text-emerald-400">${expense.amount}</p>
						<p className="text-zinc-400 text-xs bg-zinc-800/80 px-2 py-1 rounded w-fit border border-zinc-700/30">
							{expense.payment}
						</p>
						<p
							className="text-zinc-500 italic truncate pr-2"
							title={expense.note}
						>
							{expense.note || "—"}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExpenseTable;
