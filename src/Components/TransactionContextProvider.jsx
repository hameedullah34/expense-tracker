import React, { useState } from "react";
import TransactionContext from "./TransactionContext";
const TransactionContextProvider = ({ children }) => {
	const [data, setdata] = useState([]);
	let [totalIncome, settotalIncome] = useState(5000);
	const [ButtonText, setButtonText] = useState("");

	return (
		<TransactionContext.Provider
			value={{
				data,
				totalIncome,
				settotalIncome,
				setdata,
				ButtonText,
				setButtonText,
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
};

export default TransactionContextProvider;
