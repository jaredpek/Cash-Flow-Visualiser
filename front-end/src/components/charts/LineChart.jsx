import { Line } from "react-chartjs-2";
import { generateList } from "../../lib/Financials";

export default function LineChart({ balances, minAge, maxAge }) {
    return (
        <div className='chart-container'>
            <Line
                className='w-full h-full'
                data={{
                    labels: generateList(true),
                    datasets: [
                        {
                            label: "Cash",
                            data: balances.cash,
                        },
                        {
                            label: "Investments",
                            data: balances.investments,
                        },
                    ]
                }}
                options={{
                    scales: {
                        x: {
                            min: minAge ?? 20,
                            max: maxAge ?? 100,
                        }
                    }
                }}
            />
        </div>
    )
}