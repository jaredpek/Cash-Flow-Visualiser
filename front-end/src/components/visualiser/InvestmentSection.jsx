import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInvestment, deleteInvestment } from "../../redux/slices/InvestmentSlice";
import RecordCard from "./RecordCard";
import { getKey } from "../../lib/Helpers";

// investment = {
//     name: String,
//     initialAmout: Number,
//     annualAmount: Number,
//     annualInterest: Number,    // percentage form, so specify 5 to indicate 5%
//     startAge: Number,
//     endAge: Number,
//     withdrawAge: Number,
//     annualWithdrawAmount: Number
// }

export default function InvestmentSection() {
    const dispatch = useDispatch();
    const investments = useSelector(state => state.Investment)

    const [name, setName] = useState("");
    const [initialAmount, setInitialAmount] = useState("");
    const [annualAmount, setAnnualAmount] = useState("");
    const [annualInterest, setAnnualInterest] = useState("");
    const [startAge, setStartAge] = useState("");
    const [endAge, setEndAge] = useState("");
    const [withdrawAge, setWithdrawAge] = useState("");
    const [annualWithdrawAmount, setAnnualWithdrawAmount] = useState("");

    useEffect(() => {
        if (initialAmount < 0) setInitialAmount(0);
        if (annualAmount < 0) setAnnualAmount(0);
        if (annualInterest < 0) setAnnualInterest(0);
        if (startAge < 0) setStartAge(0);
        if (endAge < 0) setEndAge(0);
        if (withdrawAge < 0) setWithdrawAge(0);
        if (annualWithdrawAmount < 0) setAnnualWithdrawAmount(0);
    }, [initialAmount, annualAmount, annualInterest, startAge, endAge, withdrawAge, annualWithdrawAmount])

    return (
        <div>
            Investments
            <div className="input-section">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
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
                <input
                    min={0}
                    type="number"
                    value={withdrawAge}
                    onChange={e => setWithdrawAge(e.target.value)}
                    placeholder="Withdrawal Age"
                />
                <input
                    min={0}
                    type="number"
                    value={annualWithdrawAmount}
                    onChange={e => setAnnualWithdrawAmount(e.target.value)}
                    placeholder="Annnual Withdrawal"
                />
                <div 
                    className="btn-main add"
                    onClick={() => {
                        dispatch(addInvestment({
                            name,
                            initialAmount: Number(initialAmount), 
                            annualAmount: Number(annualAmount), 
                            annualInterest: Number(annualInterest), 
                            startAge: Number(startAge), 
                            endAge: Number(endAge),
                            withdrawAge: Number(withdrawAge),
                            annualWithdrawAmount: Number(annualWithdrawAmount),
                        }))
                        setName("");
                        setInitialAmount("");
                        setAnnualAmount("");
                        setAnnualInterest("");
                        setStartAge("");
                        setEndAge("");
                        setWithdrawAge("");
                        setAnnualWithdrawAmount("");
                    }}
                >
                    +
                </div>
            </div>
            <div className="record-section">
                {investments.map(investment => {
                    return (
                        <RecordCard
                            key={getKey()}
                            deleteRecord={() => {dispatch(deleteInvestment(investment))}}
                        >
                            {investment.name}: {investment.startAge} - {investment.endAge}: {investment.initialAmount} + {investment.annualAmount} annually at {investment.annualInterest}% interest and withdraw {investment.annualWithdrawAmount} annually from age {investment.withdrawAge}
                        </RecordCard>
                    )
                })}
            </div>
        </div>
    )
}
