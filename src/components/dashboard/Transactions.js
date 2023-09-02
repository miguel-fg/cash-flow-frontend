// bootstrap components
import Container from "react-bootstrap/Container";
import Transaction from "./Transaction";

// hooks
import { useTransactionsContext } from "../../hooks/useTransactionsContext";

export default function Transactions() {
    // app state
    const { transactions } = useTransactionsContext();

    // transaction list container
    return (
        <Container fluid>
            { transactions && transactions.map((transaction) =>{
                return(
                    <Transaction key={transaction._id} post={transaction} />
                );
            })}
        </Container>
    );
}
