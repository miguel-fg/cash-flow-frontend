// react-bootstrap components
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import CloseButton from "react-bootstrap/CloseButton";

// hooks
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
//test push elliott
// date formatter
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function Transaction(props) {
    const { post } = props;
    const { dispatch } = useTransactionsContext();

    // delete request
    const handleDelete = async () => {
        const id = post._id;

        const apiURL = `http://localhost:5000/api/transactions/${id}`;

        const response = await fetch(apiURL, { method: "DELETE" });
        const data = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_TRANSACTION", payload: data });
        }
    };

    // money amount styling
    const typeColor = post.type === "Expense" ? "typeRed" : "typeGreen";
    // date formatting
    const date = post.createdAt
        ? formatDistanceToNow(new Date(post.createdAt))
        : null;



    // transaction card component
    return (
        <Container className="transaction-card rounded" key={post._id}>
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
