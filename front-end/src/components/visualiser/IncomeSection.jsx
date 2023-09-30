import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../../redux/slices/IncomeSlice";
import RecordCard from "./RecordCard";

export default function IncomeSection() {
    // income = {
    //     annualAmount: Number,
    //     startAge: Number,
    //     endAge: Number,
    // }

    const dispatch = useDispatch();
    const incomes = useSelector(state => state.Income)

    const [annualAmount, setAnnualAmount] = useState("");
    const [startAge, setStartAge] = useState("");
    const [endAge, setEndAge] = useState("");
    
    return (
        <div>
            Income Section
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
                        dispatch(addIncome({
                            annualAmount, startAge, endAge,
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
                {incomes.map(income => {
                    return (
                        <RecordCard key={incomes.indexOf(income)}>
                            {income.startAge} - {income.endAge}: {income.annualAmount}
                        </RecordCard>
                    )
                })}
            </div>
        </div>
    )
}