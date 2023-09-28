import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    // sign up state
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    //  authentication context
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("http://localhost:5000/api/user/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){
            // save user to localStorage
            localStorage.setItem("user", JSON.stringify(json));

            // update authentication context
            dispatch({type: "LOGIN", payload: json});

            setIsLoading(false);
        }
    }

    return { login, isLoading, error }
}
