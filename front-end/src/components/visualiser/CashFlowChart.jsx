import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../redux/slices/BalanceSlice";
import { getBalance } from "../../lib/Financials";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import LineChart from "../charts/LineChart";

Chart.register(CategoryScale);

export default function CashFlowChart() {
    const dispatch = useDispatch();
    const {
        Balance: balances,
        Income: incomes,
        Expense: expenses,
        Investment: investments,
        Liability: liabilities,
    } = useSelector(state => state);

    const [minAge, setMinAge] = useState(20);
    const [maxAge, setMaxAge] = useState(100);

    useEffect(() => {
        dispatch(setBalance(getBalance(incomes, expenses, investments, liabilities)));
    }, [incomes, expenses, investments, liabilities])

    return (
        <div>
            <div className="input-section">
                <div>
                    <label>From: </label>
                    <input
                        min={0}
                        type="number"
                        value={minAge}
                        onChange={e => setMinAge(e.target.value)}
                        placeholder="Minimum Age"
                    />
                </div>
                <div>
                    <label>To: </label>
                    <input
                        min={0}
                        type="number"
                        value={maxAge}
                        onChange={e => setMaxAge(e.target.value)}
                        placeholder="Maximum Age"
                    />
                </div>
            </div>
            <LineChart balances={balances} minAge={Number(minAge)} maxAge={Number(maxAge)} />
        </div>
    )
}