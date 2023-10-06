import { useAuthContext } from "./useAuthContext";
import { useTransactionsContext } from "./useTransactionsContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: transactionsDispatch } = useTransactionsContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem("user");

        // dispatch logout action
        dispatch({type: "LOGOUT"});

        // clear transactions from app state
        transactionsDispatch({type: "SET_TRANSACTIONS", payload: null});
    }

    return { logout };
}