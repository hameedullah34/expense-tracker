import React, { useContext, useState } from "react";
import ExpenseTable from "./ExpenseTable";
import TransactionContext from "./TransactionContext";

const Display = () => {
	const buttons = ["month", "category", "payment mode"];

	const { ButtonText, setButtonText } = useContext(TransactionContext);

	const filterRunner = (button) => {
		setButtonText(button);
	};
	return (
		<div className="max-w-4xl mx-auto my-3 bg-zinc-900 border border-zinc-800/60 rounded-2xl p-2 shadow-lg">
			<div className="flex items-center p-4 gap-3 border-b border-zinc-800/80 pb-4">
				<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mr-2">
					Filter By:
				</span>
				{buttons.map((button, index) => (
					<button
						key={index}
						className="bg-zinc-800 hover:bg-zinc-700/80 active:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg px-4 py-1.5 text-xs font-medium tracking-wide border border-zinc-700/50 transition-all duration-150"
						onClick={() => filterRunner(button)}
					>
						{button.toUpperCase()}
					</button>
				))}
			</div>
			<div className="mt-2">
				<ExpenseTable />
			</div>
		</div>
	);
};

export default Display;
