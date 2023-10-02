import { useDispatch } from "react-redux";
import RecordCard from "../RecordCard";
import { updateLiability, deleteLiability } from "../../../redux/slices/LiabilitySlice";
import { useState } from "react";

export default function LiabilityRecord({ index, liability }) {
    const dispatch = useDispatch();
    const [updating, setUpdating] = useState(false);

    const [name, setName] = useState(liability.name);
    const [initialAmount, setInitialAmount] = useState(liability.initialAmount);
    const [annualAmount, setAnnualAmount] = useState(liability.annualAmount);
    const [startAge, setStartAge] = useState(liability.startAge);
    const [endAge, setEndAge] = useState(liability.endAge);

    return (
        <RecordCard
            updating={updating}
            setUpdating={setUpdating}
            updateRecord={() => {
                dispatch(updateLiability({
                    index,
                    data: {
                        name,
                        initialAmount: Number(initialAmount),
                        annualAmount: Number(annualAmount),
                        startAge: Number(startAge),
                        endAge: Number(endAge),
                    }
                }))
            }}
            deleteRecord={() => {
                dispatch(deleteLiability(index))
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
                    </div>
                </> :
                <>
                    {liability.name} ({liability.startAge} to {liability.endAge})
                    <hr />
                    ${liability.initialAmount} initial + <br />
                    ${liability.annualAmount} p.a.
                </>
            }
        </RecordCard>
    )
}