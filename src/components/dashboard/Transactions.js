import Container from "react-bootstrap/Container";
import Transaction from "./Transaction";

export default function Transactions(props){

    const { transactions, isLoading } = props;

    return (
        <Container fluid>
            {!isLoading && transactions !== null && transactions.map((transaction) =>{
                return(
                    <Transaction key={transaction._id} post={transaction} />
                );
            })}
        </Container>
    );
}
