import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import CloseButton from "react-bootstrap/CloseButton";
import axios from "axios";

export default function Transaction(props) {
    const { post } = props;

    // money amount styling
    const typeColor = post.type === "Expense" ? "typeRed" : "typeGreen";

    // date formatting
    const date = new Date(post.createdAt).toDateString();

    const handleDelete = (e) => {
        const id = post._id;

        const apiURL = `http://localhost:5000/api/transactions/${id}`;

        axios
            .delete(apiURL)
            .then((response) => {
                console.log(response);
                window.location.reload(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Container className="transaction-card rounded">
            <Stack direction="horizontal">
                <Stack className="hello">
                    <span className="transaction-title">{post.title}</span>
                    <span className="transaction-date">{date}</span>
                </Stack>
                <div className="amount-container">
                    <span className={`transaction-amount ${typeColor}`}>
                        ${post.amount}
                    </span>
                </div>
                <CloseButton
                    onClick={handleDelete}
                    className="delete-transaction-button"
                />
            </Stack>
        </Container>
    );
}
