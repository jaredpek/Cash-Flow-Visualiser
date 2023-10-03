import { useDispatch } from "react-redux";
import RecordCard from "../RecordCard";
import { deleteLiability } from "../../../redux/slices/LiabilitySlice";
import { useState } from "react";
import LiabilityForm from "../forms/LiabilityForm";

export default function LiabilityRecord({ index, liability }) {
    const dispatch = useDispatch();
    const [updating, setUpdating] = useState(false);

    return (
        <RecordCard
            updating={updating}
            setUpdating={setUpdating}
            deleteRecord={() => {
                dispatch(deleteLiability(index))
            }}
        >
            {
                updating &&
                <LiabilityForm setState={() => {setUpdating(false)}} index={index} liability={liability} mode={"update"} />
            }
            {liability.name} ({liability.startAge} to {liability.endAge})
            <hr />
            ${liability.initialAmount} initial + <br />
            ${liability.annualAmount} p.a.
        </RecordCard>
    )
}