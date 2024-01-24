// hooks
import { useTransactionsContext } from "../../../hooks/useTransactionsContext";
import { useBudgetsContext } from "../../../hooks/useBudgetContext";

// recharts components
import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ResponsiveContainer,
} from "recharts";

export default function MainChart() {
    // app state
    const { transactions } = useTransactionsContext();
    const { balance } = useBudgetsContext();

    let data = {}

    // calculate running balance
    let runningBalance = balance || 0;

// building the data for the graph
    if(transactions){

        const reversedTransactions = [...transactions].reverse();

        const dates = transactions.map((transaction) =>
            new Date(transaction.createdAt).toLocaleDateString("en-ZA")
        );
        const amounts = reversedTransactions.map((transaction) => {
            const amount = transaction.type === "Expense"
                    ? -transaction.amount
                    : transaction.amount;;
            runningBalance += amount;
            return runningBalance;
        });

        data = dates.map((date, index) => ({
            date: dates[index],
            amount: amounts[index],
        }));
    }

    // main balance graph
    return (
        <ResponsiveContainer className="main-chart-responsive-container">
        <LineChart data={data} margin={{bottom: 110}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" angle={-45} textAnchor="end"/>
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#4d4cac" strokeWidth={3}/>
        </LineChart>
        </ResponsiveContainer>
    );
}
