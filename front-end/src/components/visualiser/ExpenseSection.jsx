import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../../redux/slices/ExpenseSlice";
import RecordCard from "./RecordCard";
import { getKey } from "../../lib/Helpers";

export default function ExpenseSection() {
    // expense = {
    //     annualAmount: Number,
    //     startAge: Number,
    //     endAge: Number,
    // }

    const dispatch = useDispatch();
    const expenses = useSelector(state => state.Expense)

    const [annualAmount, setAnnualAmount] = useState("");
    const [startAge, setStartAge] = useState("");
    const [endAge, setEndAge] = useState("");

    useEffect(() => {
        if (annualAmount < 0) setAnnualAmount(0)
        if (startAge < 0) setStartAge(0)
        if (endAge < 0) setEndAge(0)
    }, [annualAmount, startAge, endAge])

    return (
        <div>
            Expenses
            <div className="input-section">
                <input
                    min={0}
                    type="number"
                    value={annualAmount}
                    onChange={e => setAnnualAmount(e.target.value)}
                    placeholder="Annual Amount"
                />
                <input
                    min={0}
                    type="number"
                    value={startAge}
                    onChange={e => setStartAge(e.target.value)}
                    placeholder="Start Age"
                />
                <input
                    min={0}
                    type="number"
                    value={endAge}
                    onChange={e => setEndAge(e.target.value)}
                    placeholder="End Age"
                />
                <div 
                    className="btn-main add"
                    onClick={() => {
                        dispatch(addExpense({
                            annualAmount: Number(annualAmount), 
                            startAge: Number(startAge), 
                            endAge: Number(endAge),
                        }))
                        setAnnualAmount("");
                        setStartAge("");
                        setEndAge("");
                    }}
                >
                    +
                </div>
            </div>
            <div>
                {expenses.map(expense => {
                    return (
                        <RecordCard key={getKey()}>
                            {expense.startAge} - {expense.endAge}: {expense.annualAmount}
                        </RecordCard>
                    )
                })}
            </div>
        </div>
    )
}