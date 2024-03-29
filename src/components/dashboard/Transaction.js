// react-bootstrap components
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import CloseButton from "react-bootstrap/CloseButton";

// hooks
import { useTransactionsContext } from "../../hooks/useTransactionsContext";
import { useAuthContext } from "../../hooks/useAuthContext";

// date formatter
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function Transaction(props) {
    const { post } = props;
    const { dispatch } = useTransactionsContext();

    const { user } = useAuthContext();

    // delete request
    const handleDelete = async () => {

        //exits function if there is no user
        if(!user){
            return
        }

        const id = post._id;

        const apiURL = `https://cash-flow-backend-zt10.onrender.com/api/transactions/${id}`;
        const testApiURL = `http://localhost:5000/api/transactions/${id}`;;

        const response = await fetch(testApiURL, { method: "DELETE", headers: {
            "Authorization": `Bearer ${user.token}`
        } });
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
