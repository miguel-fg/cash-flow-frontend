import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// bootstrap components
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// hooks
import { useBudgetsContext } from "../hooks/useBudgetContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Balance = () => {
    // balance object state
    const [balance, setBalance] = useState(0);

    //form validation state
    const [validated, setValidated] = useState(false);

    // budget hook
    const { dispatch } = useBudgetsContext();

    //user hook
    const { user } = useAuthContext();

    //navigate object
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // exits function if there is no user
        if (!user) {
            return;
        }

        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            sendData();
        }

        setValidated(true);
    };

    const sendData = async () => {
        const apiURL =
            "https://cash-flow-backend-zt10.onrender.com/api/budget/";
        const testApiURL = "http://localhost:5000/api/budget/";

        const budget = { balance };

        const response = await fetch(testApiURL, {
            method: "POST",
            body: JSON.stringify(budget),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });

        const data = await response.json();

        if(response.ok){
            dispatch({type: "SET_BUDGET", payload: data});
            console.log("budget updated successfully!");
            setBalance(0);
            navigate("/");
        }
    };

    return (
        <Container className="form-card rounded">
            <h1>One More Step...</h1>
            <hr className="form-divider" />
            <Form
                className="user-form"
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
            >
                <Form.Group className="mb-3" controlId="signup.Email">
                    <Form.Label className="form-label">
                        Your current total balance
                    </Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="$3500.00"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                        required
                        isValid={balance && balance > 0}
                    />
                </Form.Group>
                <Button type="submit" className="btn">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Balance;
