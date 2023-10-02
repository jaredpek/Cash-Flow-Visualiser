import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncome, deleteIncome } from "../../redux/slices/IncomeSlice";
import RecordCard from "./RecordCard";
import { getKey } from "../../lib/Helpers";

export default function IncomeSection() {
    // income = {
    //     name: String,
    //     annualAmount: Number,
    //     startAge: Number,
    //     endAge: Number,
    // }

    const dispatch = useDispatch();
    const incomes = useSelector(state => state.Income)

    const [name, setName] = useState("");
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
            Income
            <div className="input-section">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
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
                            name,
                            annualAmount: Number(annualAmount), 
                            startAge: Number(startAge), 
                            endAge: Number(endAge),
                        }))
                        setName("");
                        setAnnualAmount("");
                        setStartAge("");
                        setEndAge("");
                    }}
                >
                    +
                </div>
            </div>
            <div className="record-section">
                {incomes.map(income => {
                    return (
                        <RecordCard
                            key={getKey()}
                            deleteRecord={() => {dispatch(deleteIncome(income))}}
                        >
                            <div>
                                {income.name} ({income.startAge} to {income.endAge})
                                <hr />
                                {income.annualAmount}
                            </div>
                        </RecordCard>
                    )
                })}
            </div>
        </div>
    )
}