import { BudgetsContext } from "../context/BudgetContext";
import { useContext } from "react";

export const useBudgetsContext = () => {
    const context = useContext(BudgetsContext);

    if(!context){
        throw Error("useBudgetsContext must be used inside a BudgetsContextProvider");
    }

    return context;
}