import { createContext, useReducer } from "react";

export const BudgetsContext = createContext();

export const budgetsReducer = (state, action) => {
    switch(action.type){
        case "SET_BUDGET":
            return { balance: action.payload };
        case "UPDATE_BUDGET":
            return { balance: action.payload };
        default:
            return state;
    }
};

export const BudgetsContextProvider = ({ children }) => {
    const [ state, dispatch] = useReducer(budgetsReducer, { balance: null });

    return (
        <BudgetsContext.Provider value={{ ...state, dispatch }}>
            { children }
        </BudgetsContext.Provider>
    )
};