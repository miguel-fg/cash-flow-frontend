// react-bootstrap components
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import CloseButton from "react-bootstrap/CloseButton";

// hooks
import { useTransactionsContext } from "../../hooks/useTransactionsContext";

// date formatter
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function Transaction(props) {
    const { post } = props;
    const { dispatch } = useTransactionsContext();

    // money amount styling
    const typeColor = post.type === "Expense" ? "typeRed" : "typeGreen";

    // delete request
    const handleDelete = async () => {
        const id = post._id;

        const apiURL = `https://cash-flow-backend-zt10.onrender.com/api/transactions/${id}`;

        const response = await fetch(apiURL, { method: "DELETE" });
        const data = await response.json();

        if (response.ok) {
            dispatch({ type: "DELETE_TRANSACTION", payload: data });
        }
    };

    // transaction card component
    return (
        <Container className="transaction-card rounded" key={post._id}>
            <Stack direction="horizontal">
                <Stack className="hello">
                    <span className="transaction-title">{post.title}</span>
                    <span className="transaction-date">
                        {formatDistanceToNow(new Date(post.createdAt), {
                            addSuffix: true,
                        })}
                    </span>
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
