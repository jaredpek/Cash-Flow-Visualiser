import { useDispatch } from "react-redux";
import RecordCard from "../RecordCard";
import { deleteExpense } from "../../../redux/slices/ExpenseSlice";
import { useState } from "react";
import ExpenseForm from "../forms/ExpenseForm";

export default function ExpenseRecord({ index, expense }) {
    const dispatch = useDispatch();
    const [updating, setUpdating] = useState(false);

    return (
        <RecordCard
            updating={updating}
            setUpdating={setUpdating}
            deleteRecord={() => {
                dispatch(deleteExpense(index))
            }}
        >
            {
                updating &&
                <ExpenseForm setState={() => setUpdating(false)} index={index} expense={expense} mode={"update"} />
            }
            {expense.name} ({expense.startAge} to {expense.endAge})
            <hr />
            ${expense.annualAmount} p.a.
        </RecordCard>
    )
}