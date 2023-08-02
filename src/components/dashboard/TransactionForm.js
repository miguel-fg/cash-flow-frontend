import { useState } from "react";
import axios from "axios";

// bootstrap components
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TransactionForm() {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Expense");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            const apiURL = "http://localhost:5000/api/transactions/";
            const transaction = { title, type, amount, category };
    
            axios.post(apiURL, transaction);
    
            setTitle("");
            setAmount("");
            setCategory("");
        }

        setValidated(true);

    };

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <span className="accordion-title-text">Add New</span>
                </Accordion.Header>
                <Accordion.Body>
                    <Form
                        onSubmit={handleSubmit}
                        noValidate
                        validated={validated}
                    >
                        <Form.Group
                            className="mb-3"
                            controlId="transactionForm.title"
                        >
                            <Form.Label>
                                <span className="form-text form-label">
                                    Description
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="T&T Supermarket, Lululemon, ..."
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    setValidated(false);
                                }}
                                className="form-text"
                                required
                            />
                            <Form.Control.Feedback />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="transactionForm.type"
                        >
                            <Form.Label>
                                <span className="form-text form-label">
                                    Type
                                </span>
                            </Form.Label>
                            <Form.Select
                                value={type}
                                onChange={(e) => {
                                    setType(e.target.value);
                                    setValidated(false);
                                }}
                                className="form-text"
                            >
                                <option value="Expense">Expense</option>
                                <option value="Income">Income</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="transactionForm.amount"
                        >
                            <Form.Label>
                                <span className="form-text form-label">
                                    Amount
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    setValidated(false);
                                }}
                                className="form-text"
                                required
                            />
                            <Form.Control.Feedback />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="transactionForm.category"
                        >
                            <Form.Label>
                                <span className="form-text form-label">
                                    Category
                                </span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Food, Entertainment, ..."
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                    setValidated(false);
                                }}
                                className="form-text"
                                required
                            />
                            <Form.Control.Feedback />
                        </Form.Group>
                        <Button type="submit" className="add-button">
                            Add
                        </Button>
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}
