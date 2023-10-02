import { useDispatch } from "react-redux";
import RecordCard from "../RecordCard";
import { updateIncome, deleteIncome } from "../../../redux/slices/IncomeSlice";
import { useState } from "react";

export default function IncomeRecord({ index, income }) {
    const dispatch = useDispatch();
    const [updating, setUpdating] = useState(false);
    
    const [name, setName] = useState(income.name);
    const [annualAmount, setAnnualAmount] = useState(income.annualAmount);
    const [startAge, setStartAge] = useState(income.startAge);
    const [endAge, setEndAge] = useState(income.endAge);

    return (
        <RecordCard
            updating={updating}
            setUpdating={setUpdating}
            updateRecord={() => {
                dispatch(updateIncome({
                    index, 
                    data: {
                        name, 
                        annualAmount: Number(annualAmount), 
                        startAge: Number(startAge), 
                        endAge: Number(endAge)
                    }
                }))
            }}
            deleteRecord={() => {
                dispatch(deleteIncome(index))
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
                    <input
                        min={0}
                        type="number"
                        value={annualAmount}
                        onChange={e => setAnnualAmount(e.target.value)}
                        placeholder="Annual Amount"
                    />
                </> :
                <>
                    {income.name} ({income.startAge} to {income.endAge})
                    <hr />
                    ${income.annualAmount} p.a.
                </>
            }
        </RecordCard>
    )
}