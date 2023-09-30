import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLiability } from "../../redux/slices/LiabilitySlice";
import RecordCard from "./RecordCard";

export default function LiabilitySection() {
    // liability = {
    //     initialAmount: Number,
    //     annualAmount: Number,
    //     startAge: Number,
    //     endAge: Number,
    // }

    const dispatch = useDispatch();
    const liabilities = useSelector(state => state.Liability)

    const [initialAmount, setInitialAmount] = useState("");
    const [annualAmount, setAnnualAmount] = useState("");
    const [startAge, setStartAge] = useState("");
    const [endAge, setEndAge] = useState("");
    
    return (
        <div>
            Liability Section
            <div className="input-section">
                <input
                    min={0}
                    type="number"
                    value={initialAmount}
                    onChange={e => setInitialAmount(e.target.value)}
                    placeholder="Initial Amount"
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
                        dispatch(addLiability({
                            initialAmount, annualAmount, startAge, endAge,
                        }))
                        setInitialAmount("");
                        setAnnualAmount("");
                        setStartAge("");
                        setEndAge("");
                    }}
                >
                    +
                </div>
            </div>
            <div>
                {liabilities.map(liability => {
                    return (
                        <RecordCard key={liabilities.indexOf(liability)}>
                            {liability.startAge} - {liability.endAge}: {liability.initialAmount} + {liability.annualAmount} annually
                        </RecordCard>
                    )
                    
                })}
            </div>
        </div>
    )
}