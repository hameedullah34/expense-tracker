import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TransactionContextProvider from "./Components/TransactionContextProvider.jsx";

createRoot(document.getElementById("root")).render(
	<TransactionContextProvider>
		<App />
	</TransactionContextProvider>,
);
