import { useState } from "react";
import { useSelector } from "react-redux";
import { getKey } from "../../lib/Helpers";
import ExpenseRecord from "./records/ExpenseRecord";
import TitleCard from "./TitleCard";
import ExpenseForm from "./forms/ExpenseForm";

export default function ExpenseSection() {
    // expense = {
    //     name: String,
    //     annualAmount: Number,
    //     startAge: Number,
    //     endAge: Number,
    // }

    const expenses = useSelector(state => state.Expense)
    const [adding, setAdding] = useState(false);

    return (
        <div>
            <TitleCard
                title={"Expenses"}
                setState={() => setAdding(true)}
            />
            <hr />
            {
                adding &&
                <ExpenseForm setState={() => setAdding(false)} />
            }
            <div className="record-section">
                {
                    expenses.length ?
                    expenses.map(expense => {
                        return <ExpenseRecord key={getKey()} index={expenses.indexOf(expense)} expense={expense} />;
                    }) :
                    <div>No expense records...</div>
                }
            </div>
        </div>
    )
}