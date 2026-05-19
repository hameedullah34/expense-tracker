import React, { useContext, useState } from "react";
import { Display, Form, Summery } from "./Components";
import {
	BsBank2,
	BsCurrencyDollar,
	BsPiggyBank,
	BsGraphUp,
} from "react-icons/bs";
import TransactionContext from "./Components/TransactionContext";
import TransactionContextProvider from "./Components/TransactionContextProvider";

const App = () => {
	const { data, totalIncome } = useContext(TransactionContext);

	const totalExpense = data.reduce((acc, curr) => acc + Number(curr.amount), 0);
	const biggestExpense =
		data.length > 0 ? Math.max(...data.map((e) => e.amount)) : 0;
	const savings = totalIncome - totalExpense;

	const summeryData = [
		{
			icon: BsBank2,
			title: "Income",
			figures: totalIncome,
		},
		{
			icon: BsCurrencyDollar,
			title: "Expense",
			figures: totalExpense,
		},
		{
			icon: BsPiggyBank,
			title: "Savings",
			figures: savings,
		},
		{
			icon: BsGraphUp,
			title: "Highest",
			figures: biggestExpense,
		},
	];

	return (
		<>
			<div className="min-h-screen bg-zinc-950 p-4 sm:p-8 text-white antialiased selection:bg-emerald-500/30">
				<div className="max-w-4xl mx-auto space-y-6">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-zinc-900/50 border border-zinc-800/60 p-4 rounded-3xl backdrop-blur-sm">
						{summeryData.map((item, index) => (
							<Summery
								key={index}
								Icon={item.icon}
								title={item.title}
								figures={item.figures}
							/>
						))}
					</div>

					<div className="bg-zinc-900 border border-zinc-800/80 rounded-3xl p-2 shadow-xl">
						<Form />
					</div>

					<div className="bg-zinc-900/30 border border-zinc-800/40 rounded-3xl p-2 shadow-inner">
						<Display />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
