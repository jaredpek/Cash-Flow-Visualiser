import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInvestment } from "../../redux/slices/InvestmentSlice";
import RecordCard from "./RecordCard";
import { getKey } from "../../lib/Helpers";

export default function InvestmentSection() {
    // investment = {
    //     initialAmout: Number,
    //     annualAmount: Number,
    //     annualInterest: Number,    // percentage form, so specify 5 to indicate 5%
    //     startAge: Number,
    //     endAge: Number,
    // }

    const dispatch = useDispatch();
    const investments = useSelector(state => state.Investment)

    const [initialAmount, setInitialAmount] = useState("");
    const [annualAmount, setAnnualAmount] = useState("");
    const [annualInterest, setAnnualInterest] = useState("");
    const [startAge, setStartAge] = useState("");
    const [endAge, setEndAge] = useState("");

    useEffect(() => {
        if (initialAmount < 0) setInitialAmount(0);
        if (annualAmount < 0) setAnnualAmount(0);
        if (annualInterest < 0) setAnnualInterest(0);
        if (startAge < 0) setStartAge(0);
        if (endAge < 0) setEndAge(0);
    }, [initialAmount, annualAmount, annualInterest, startAge, endAge])

    return (
        <div>
            Investments
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
                    value={annualInterest}
                    onChange={e => setAnnualInterest(e.target.value)}
                    placeholder="Annual Interest"
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
                        dispatch(addInvestment({
                            initialAmount: Number(initialAmount), 
                            annualAmount: Number(annualAmount), 
                            annualInterest: Number(annualInterest), 
                            startAge: Number(startAge), 
                            endAge: Number(endAge),
                        }))
                        setInitialAmount("");
                        setAnnualAmount("");
                        setAnnualInterest("");
                        setStartAge("");
                        setEndAge("");
                    }}
                >
                    +
                </div>
            </div>
            <div>
                {investments.map(investment => {
                    return (
                        <RecordCard key={getKey()}>
                            {investment.startAge} - {investment.endAge}: {investment.initialAmount} + {investment.annualAmount} annually at {investment.annualInterest}% interest
                        </RecordCard>
                    )
                })}
            </div>
        </div>
    )
}