import React, { useContext, useEffect, useState } from "react";
import TransactionContext from "./TransactionContext";

const Form = () => {
	const { data, setdata } = useContext(TransactionContext);
	const [task, setTask] = useState({
		month: "",
		category: "",
		description: "",
		amount: "",
		payment: "",
		note: "",
	});

	const transactionAdder = () => {
		const updatedData = [...data, task];
		setdata(updatedData);
		localStorage.setItem("Expense", JSON.stringify(updatedData));
		setTask(() => ({
			month: "",
			category: "",
			description: "",
			amount: "",
			payment: "",
			note: "",
		}));
	};

	const dataHandler = (e) => {
		setTask((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const deleteHandler = () => {
		localStorage.clear();
		setdata([]);
	};

	return (
		<form
			className="max-w-4xl mx-auto my-3 bg-zinc-900 text-white rounded-2xl p-6 shadow-xl"
			onSubmit={transactionAdder}
		>
			<h2 className="text-xl font-bold mb-5 text-zinc-100">
				Add New Transaction
			</h2>

			<div className="flex flex-col">
				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="month" className="text-zinc-400 text-sm">
						Enter The Month
					</label>
					<input
						required
						type="text"
						name="month"
						id="month"
						className="bg-zinc-800 text-white rounded-md px-3 py-2 w-full outline-none border border-zinc-700 focus:border-zinc-500 transition-all"
						value={task.month}
						onChange={dataHandler}
					/>
				</div>

				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="category" className="text-zinc-400 text-sm">
						Enter The Category
					</label>
					<input
						required
						type="text"
						name="category"
						id="category"
						className="bg-zinc-800 text-white rounded-md px-3 py-2 w-full outline-none border border-zinc-700 focus:border-zinc-500 transition-all"
						value={task.category}
						onChange={dataHandler}
					/>
				</div>

				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="description" className="text-zinc-400 text-sm">
						Enter The Description
					</label>
					<input
						required
						type="text"
						name="description"
						id="description"
						className="bg-zinc-800 text-white rounded-md px-3 py-2 w-full outline-none border border-zinc-700 focus:border-zinc-500 transition-all"
						value={task.description}
						onChange={dataHandler}
					/>
				</div>

				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="amount" className="text-zinc-400 text-sm">
						Enter The Amount
					</label>
					<input
						required
						type="number"
						name="amount"
						id="amount"
						className="bg-zinc-800 text-white rounded-md px-3 py-2 w-full outline-none border border-zinc-700 focus:border-zinc-500 transition-all"
						value={task.amount}
						onChange={dataHandler}
					/>
				</div>

				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="payment" className="text-zinc-400 text-sm">
						Enter The Payment Method
					</label>
					<input
						required
						type="text"
						name="payment"
						id="payment"
						className="bg-zinc-800 text-white rounded-md px-3 py-2 w-full outline-none border border-zinc-700 focus:border-zinc-500 transition-all"
						value={task.payment}
						onChange={dataHandler}
					/>
				</div>

				<div className="flex flex-col gap-1 mb-3">
					<label htmlFor="note" className="text-zinc-400 text-sm">
						Enter The Note
					</label>
					<input
						type="text"
						name="note"
						id="note"
						className="bg-zinc-800 text-white rounded-md px-3 py-2 w-full outline-none border border-zinc-700 focus:border-zinc-500 transition-all"
						value={task.note}
						onChange={dataHandler}
					/>
				</div>
				<div className="flex gap-3 items-center mt-2 w-full">
					<button
						type="submit"
						className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-md transition-colors shadow-md active:scale-[0.99] flex-1"
					>
						ADD TRANSACTION
					</button>

					<button
						type="button"
						className="bg-red-500/10 hover:bg-red-500/20 text-red-400 font-medium py-2.5 px-5 rounded-md border border-red-500/20 transition-all active:scale-[0.99] flex-1"
						onClick={deleteHandler}
					>
						DELETE ALL
					</button>
				</div>
			</div>
		</form>
	);
};

export default Form;
