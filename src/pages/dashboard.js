import TransactionForm from "../components/dashboard/TransactionForm";
import Transactions from "../components/dashboard/Transactions";
import MainChart from "../components/dashboard/charts/MainChart";

import axios from "axios";
import { useEffect, useState } from "react";

// bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import CategoryChart from "../components/dashboard/charts/CategoryChart";
import SpendingChart from "../components/dashboard/charts/SpendingChart";

export default function Dashboard() {
    const [appState, setAppState] = useState({
        loading: false,
        transactions: null,
    });

    const getTransactions = () => {
        const apiURL = "http://localhost:5000/api/transactions/";

        axios.get(apiURL).then((response) => {
            const allTransactions = response.data;
            setAppState({ loading: false, transactions: allTransactions });
        });
    };

    useEffect(() => {
        setAppState({ loading: true });

        getTransactions();
    }, [setAppState]);

    return (
        <Container fluid className="dashboard-container">
            <Stack gap={4} direction="horizontal" className="dashboard-stack">
                <Container className="transaction-container rounded">
                    <Stack className="transaction-stack rounded">
                        <span className="dashboard-card-title">
                            Transactions
                        </span>
                        <TransactionForm />
                        <Transactions
                            isLoading={appState.loading}
                            transactions={appState.transactions}
                        />
                    </Stack>
                </Container>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="main-chart rounded">
                            <span className="dashboard-card-title">
                                Balance
                            </span>
                            <MainChart
                                isLoading={appState.loading}
                                budget={appState.budget}
                                transactions={appState.transactions}
                            />
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
                            <CategoryChart
                                isLoading={appState.loading}
                                transactions={appState.transactions}
                            />
                        </Col>
                        <Col lg={6} className="dashboard-card goals rounded">
                            <span className="dashboard-card-title">
                                Spending history
                            </span>
                            <SpendingChart isLoading={appState.loading} transactions={appState.transactions} />
                        </Col>
                    </Row>
                </Container>
            </Stack>
        </Container>
    );
}
