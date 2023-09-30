import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInvestment } from "../../redux/slices/InvestmentSlice";
import RecordCard from "./RecordCard";

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
    
    return (
        <div>
            Investment Section
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
                            initialAmount, annualAmount, annualInterest, startAge, endAge,
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
                        <RecordCard key={investments.indexOf(investment)}>
                            {investment.startAge} - {investment.endAge}: {investment.initialAmount} + {investment.annualAmount} annually at {investment.annualInterest}% interest
                        </RecordCard>
                    )
                })}
            </div>
        </div>
    )
}