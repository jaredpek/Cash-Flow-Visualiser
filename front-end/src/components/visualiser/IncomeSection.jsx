import { useState } from "react";
import { useSelector } from "react-redux";
import { getKey } from "../../lib/Helpers";
import IncomeRecord from "./records/IncomeRecord";
import TitleCard from "./TitleCard";
import IncomeForm from "./forms/IncomeForm";

export default function IncomeSection() {
    // income = {
    //     name: String,
    //     annualAmount: Number,
    //     startAge: Number,
    //     endAge: Number,
    // }

    const incomes = useSelector(state => state.Income)
    const [adding, setAdding] = useState(false);
    
    return (
        <div>
            <TitleCard
                title={"Income"}
                setState={() => setAdding(true)}
            />
            <hr />
            {
                adding &&
                <IncomeForm setState={() => setAdding(false)} />
            }
            <div className="record-section">
                {
                    incomes.length ?
                    incomes.map(income => {
                        return <IncomeRecord key={getKey()} index={incomes.indexOf(income)} income={income} />;
                    }) :
                    <div>No income records...</div>
                }
            </div>
        </div>
    )
}