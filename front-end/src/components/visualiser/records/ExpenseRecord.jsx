import { useDispatch } from "react-redux";
import RecordCard from "../RecordCard";
import { updateExpense, deleteExpense } from "../../../redux/slices/ExpenseSlice";
import { useState } from "react";

export default function ExpenseRecord({ index, expense }) {
    const dispatch = useDispatch();
    const [updating, setUpdating] = useState(false);
    
    const [name, setName] = useState(expense.name);
    const [annualAmount, setAnnualAmount] = useState(expense.annualAmount);
    const [startAge, setStartAge] = useState(expense.startAge);
    const [endAge, setEndAge] = useState(expense.endAge);

    return (
        <RecordCard
            updating={updating}
            setUpdating={setUpdating}
            updateRecord={() => {
                dispatch(updateExpense({
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
                dispatch(deleteExpense(index))
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
                    {expense.name} ({expense.startAge} to {expense.endAge})
                    <hr />
                    ${expense.annualAmount} p.a.
                </>
            }
        </RecordCard>
    )
}