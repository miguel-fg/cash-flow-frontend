import { RadarChart, ResponsiveContainer, PolarGrid, PolarAngleAxis,Radar } from "recharts";

export default function CategoryChart(props){
    //building the data for the graph
    const { transactions, isLoading } = props;
    let data = {}
    let objData = {}
    
    if(!isLoading && transactions !== null){
        for(const index in transactions){
            const category = transactions[index].category;
            if(category in data){
                data[category]++;
            } else {
                data[category] = 1;
            }
        }

        objData = Object.entries(data).map(([category, amount]) => ({
            category: category,
            amount: amount,
        }));
    }

    return(
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={objData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <Radar name="Category" dataKey="amount"  stroke="#4d4cac" strokeWidth={1} fill="#5e81f4" fillOpacity={0.5}/>
            </RadarChart>
        </ResponsiveContainer>
    );
}