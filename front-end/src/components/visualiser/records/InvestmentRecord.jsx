import { useDispatch } from "react-redux";
import RecordCard from "../RecordCard";
import { updateInvestment, deleteInvestment } from "../../../redux/slices/InvestmentSlice";
import { useState } from "react";

export default function InvestmentRecord({ index, investment }) {
    const dispatch = useDispatch();
    const [updating, setUpdating] = useState(false);
    
    const [name, setName] = useState(investment.name);
    const [initialAmount, setInitialAmount] = useState(investment.initialAmount);
    const [annualAmount, setAnnualAmount] = useState(investment.annualAmount);
    const [annualInterest, setAnnualInterest] = useState(investment.annualInterest);
    const [startAge, setStartAge] = useState(investment.startAge);
    const [endAge, setEndAge] = useState(investment.endAge);
    const [withdrawAge, setWithdrawAge] = useState(investment.withdrawAge);
    const [annualWithdrawAmount, setAnnualWithdrawAmount] = useState(investment.annualWithdrawAmount);

    return (
        <RecordCard
            updating={updating} 
            setUpdating={setUpdating}
            updateRecord={() => {
                dispatch(updateInvestment({
                    index,
                    data: {
                        name,
                        initialAmount: Number(initialAmount),
                        annualAmount: Number(annualAmount),
                        annualInterest: Number(annualInterest),
                        startAge: Number(startAge),
                        endAge: Number(endAge),
                        withdrawAge: Number(withdrawAge),
                        annualWithdrawAmount: Number(annualWithdrawAmount),
                    }
                }))
            }}
            deleteRecord={() => {
                dispatch(deleteInvestment(index))
            }}
        >
            {
                updating ?
                <>
                    <div className="input-section">
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Name"
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
                    </div>
                    <hr />
                    <div className="input-section">
                        <input
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
                    </div>
                    <hr />
                    <div className="input-section">
                        <input
                            value={annualWithdrawAmount}
                            onChange={e => setAnnualWithdrawAmount(e.target.value)}
                            placeholder="Annual Withdrawal"
                        />
                        <input
                            min={0}
                            type="number"
                            value={withdrawAge}
                            onChange={e => setWithdrawAge(e.target.value)}
                            placeholder="Withdrawal Age"
                        />
                    </div>
                </> :
                <>
                    {investment.name} ({investment.startAge} to {investment.endAge})
                    <hr />
                    ${investment.initialAmount} initial + <br />
                    ${investment.annualAmount} at {investment.annualInterest}% p.a.
                    <hr />
                    Withdraw ${investment.annualWithdrawAmount} p.a. <br />
                    From {investment.withdrawAge} y.o.
                </>
            }
        </RecordCard>
    )
}