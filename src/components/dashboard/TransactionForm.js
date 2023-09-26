import { useState } from "react";

// bootstrap components
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// hooks
import { useTransactionsContext } from "../../hooks/useTransactionsContext";

export default function TransactionForm() {
    // transaction object state
    const [title, setTitle] = useState("");
    const [type, setType] = useState("Expense");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");

    //form validation state
    
    const [validated, setValidated] = useState(false);

    // transaction hook
    const { dispatch } = useTransactionsContext();

    // form submission
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) { //form validation
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            sendData();
        }

        setValidated(true);
    };

    // post request
    const sendData = async () => {
        const apiURL =
            "http://localhost:5000/api/transactions/";
        const transaction = { title, type, amount, category };

        const response = await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(transaction),
            headers: {"Content-Type": "application/json"},
        })

        const data = await response.json();

        if(response.ok) {
            setTitle("");
            setType("Expense");
            setAmount("");
            setCategory("");
            setValidated(false);
            console.log("new transaction added!");
            dispatch({type: "CREATE_TRANSACTION", payload: data});
        }
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
                                type="number"
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
