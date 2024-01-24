import { useEffect } from "react";

// components
import TransactionForm from "../components/dashboard/TransactionForm";
import Transactions from "../components/dashboard/Transactions";
import MainChart from "../components/dashboard/charts/MainChart";
import CategoryChart from "../components/dashboard/charts/CategoryChart";
import SpendingChart from "../components/dashboard/charts/SpendingChart";

// bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

// hooks
import { useTransactionsContext } from "../hooks/useTransactionsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useBudgetsContext } from "../hooks/useBudgetContext";

export default function Dashboard() {
    // transaction state
    const { dispatch: dispatchTransactions }  = useTransactionsContext();

    // budget state
    const { dispatch: dispatchBudget } = useBudgetsContext();

    // user state
    const { user } = useAuthContext();
    
    useEffect(() => {
        // function to request all transactions from the DB
        const getTransactions = async () => {
            const apiURL =
                "https://cash-flow-backend-zt10.onrender.com/api/transactions/";

            const testApiURL = "http://localhost:5000/api/transactions";

            // sends authorization token as part of the request
            const response = await fetch(testApiURL, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const data = await response.json();

            if(response.ok){
                dispatchTransactions({type: "SET_TRANSACTIONS", payload: data});
            }
        };

        // function to request the current budget from the DB
        const getBudget = async () => {
            const apiURL =
                "https://cash-flow-backend-zt10.onrender.com/api/budget/";

            const testApiURL = "http://localhost:5000/api/budget";

            const response = await fetch(testApiURL, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            const data = await response.json();
            if(response.ok){
                dispatchBudget({type: "SET_BUDGET", payload: data[0].balance})
            }
        };

        // only try to get transactions if a user exists
        if(user){
            getTransactions();
            getBudget();
        }

    }, [dispatchTransactions, dispatchBudget, user]);

    return (
        <Container fluid className="dashboard-container">
            <Stack gap={4} direction="horizontal" className="dashboard-stack">
                <Container className="transaction-container rounded">
                    <Stack className="transaction-stack rounded">
                        <span className="dashboard-card-title">
                            Transactions
                        </span>
                        <TransactionForm />
                        <Transactions />
                    </Stack>
                </Container>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="main-chart rounded">
                            <span className="dashboard-card-title">
                                Balance
                            </span>
                            <MainChart />
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            lg={6}
                            className="dashboard-card pie-chart rounded"
                        >
                            <span className="dashboard-card-title">
                                Category summary
                            </span>
                            <CategoryChart />
                        </Col>
                        <Col lg={6} className="dashboard-card goals rounded">
                            <span className="dashboard-card-title">
                                Spending history
                            </span>
                            <SpendingChart />
                        </Col>
                    </Row>
                </Container>
            </Stack>
        </Container>
    );
}
