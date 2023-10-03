import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInvestment } from "../../redux/slices/InvestmentSlice";
import { getKey } from "../../lib/Helpers";
import InvestmentRecord from "./records/InvestmentRecord";
import TitleCard from "./TitleCard";
import ModalForm from "./records/ModalForm";
import InvestmentForm from "./forms/InvestmentForm";

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
    const investments = useSelector(state => state.Investment)
    const [adding, setAdding] = useState(false);

    return (
        <div>
            <TitleCard
                title={"Investments"}
                setState={() => setAdding(true)}
            />
            <hr />
            {
                adding &&
                <InvestmentForm setState={() => setAdding(false)} />
            }
            <div className="record-section">
                {
                    investments.length ?
                    investments.map(investment => {
                        return <InvestmentRecord key={getKey()} index={investments.indexOf(investment)} investment={investment} />
                    }) :
                    <div>No investment records...</div>
                }
            </div>
        </div>
    )
}
