import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKey } from "../../lib/Helpers";
import LiabilityRecord from "./records/LiabilityRecord";
import TitleCard from "./TitleCard";
import LiabilityForm from "./forms/LiabilityForm";

export default function LiabilitySection() {
    // liability = {
    //     name: String,
    //     initialAmount: Number,
    //     annualAmount: Number,
    //     startAge: Number,
    //     endAge: Number,
    // }

    const liabilities = useSelector(state => state.Liability)
    const [adding, setAdding] = useState(false);
    
    return (
        <div>
            <TitleCard
                title={"Liabilities"}
                setState={() => setAdding(true)}
            />
            <hr />
            {
                adding &&
                <LiabilityForm setState={() => setAdding(false)} />
            }
            <div className="record-section">
                {
                    liabilities.length ?
                    liabilities.map(liability => {
                        return <LiabilityRecord key={getKey()} index={liabilities.indexOf(liability)} liability={liability} />
                    }) :
                    <div>No liability records...</div>
                }
            </div>
        </div>
    )
}