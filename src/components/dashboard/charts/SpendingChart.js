// hooks
import { useTransactionsContext } from "../../../hooks/useTransactionsContext";

// recharts components
import {
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    ResponsiveContainer,
} from "recharts";

export default function SpendingChart() {
    // app state
    const { transactions } = useTransactionsContext();

    let data = [];

    //building the data for the graph
    if (transactions) {
        let spending = 0;

        const transactionEntries = Object.entries(transactions).reverse();
        // eslint-disable-next-line
        for (const [transactionKey, transaction] of transactionEntries) {
            if (transaction.type === "Expense") {
                const value = transaction.amount
                spending += value;
                data.push({
                    date: new Date(transaction.createdAt).toLocaleDateString("en-ZA"),
                    amount: spending,
                });
            }
        }
    }

    // spending graph
    return (
        <ResponsiveContainer>
            <LineChart data={data} margin={{bottom: 110}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" angle={-45} textAnchor="end" />
                <YAxis />
                <Line type="monotone" dataKey="amount" stroke="#fe616f" strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
    );
}
