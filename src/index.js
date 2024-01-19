import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// context
import { TransactionsContextProvider } from "./context/TransactionContext";
import { AuthContextProvider } from "./context/AuthContext";
import { BudgetsContextProvider } from "./context/BudgetContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
        <BudgetsContextProvider>
            <TransactionsContextProvider>
                <App />
            </TransactionsContextProvider>
        </BudgetsContextProvider>
    </AuthContextProvider>
);
