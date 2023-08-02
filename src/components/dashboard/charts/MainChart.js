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

export default function MainChart(props) {
    const { transactions, isLoading } = props;
    let data = {}

    if(!isLoading && transactions !== null){
        const dates = transactions.map((transaction) =>
            new Date(transaction.createdAt).toLocaleDateString()
        );
        const amounts = transactions.map(function (transaction) {
            return transaction.type === "Expense"
                ? transaction.amount * -1
                : transaction.amount;
        });

        const reversedKeys = Object.keys(dates).reverse();

        data = reversedKeys.map((index) => ({
            date: dates[index],
            amount: amounts[index],
        }));
    }

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
