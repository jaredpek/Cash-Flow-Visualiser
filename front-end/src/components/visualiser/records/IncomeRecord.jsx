import { useDispatch } from "react-redux";
import RecordCard from "../RecordCard";
import { deleteIncome } from "../../../redux/slices/IncomeSlice";
import { useState } from "react";
import IncomeForm from "../forms/IncomeForm";

export default function IncomeRecord({ index, income }) {
    const dispatch = useDispatch();
    const [updating, setUpdating] = useState(false);

    return (
        <RecordCard
            updating={updating}
            setUpdating={setUpdating}
            deleteRecord={() => {
                dispatch(deleteIncome(index))
            }}
        >
            {
                updating &&
                <IncomeForm setState={() => setUpdating(false)} index={index} income={income} mode={"update"} />
            }
            {income.name} ({income.startAge} to {income.endAge})
            <hr />
            ${income.annualAmount} p.a.
        </RecordCard>
    )
}