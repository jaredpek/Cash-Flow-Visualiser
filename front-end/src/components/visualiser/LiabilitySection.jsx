import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLiability } from "../../redux/slices/LiabilitySlice";
import RecordCard from "./RecordCard";
import { getKey } from "../../lib/Helpers";

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

    useEffect(() => {
        if (initialAmount < 0) setInitialAmount(0);
        if (annualAmount < 0) setAnnualAmount(0);
        if (startAge < 0) setStartAge(0);
        if (endAge < 0) setEndAge(0);
    }, [initialAmount, annualAmount, startAge, endAge])
    
    return (
        <div>
            Liabilities
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
                            initialAmount: Number(initialAmount), 
                            annualAmount: Number(annualAmount), 
                            startAge: Number(startAge), 
                            endAge: Number(endAge),
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
                        <RecordCard key={getKey()}>
                            {liability.startAge} - {liability.endAge}: {liability.initialAmount} + {liability.annualAmount} annually
                        </RecordCard>
                    )
                    
                })}
            </div>
        </div>
    )
}