import React, { useState } from "react";

// bootstrap components
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// signup custom hook
import { useSignup } from "../hooks/useSignup";

// About me page
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
    }

    return (
        <Container className="form-card rounded">
            <h1>Welcome to CashFlow!</h1>
            <hr className="form-divider"/>
            <Form className="user-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="signup.Email">
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="signup.Password">
                    <Form.Label className="form-label">Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button type="submit" className="btn" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Sign up"}
                </Button>
                {error && <div className="user-form-error rounded">{error}</div>}
            </Form>
        </Container>
    );
}

export default Signup;