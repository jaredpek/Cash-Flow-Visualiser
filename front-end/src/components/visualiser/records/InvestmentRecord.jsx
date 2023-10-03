import { useDispatch } from "react-redux";
import RecordCard from "../RecordCard";
import { deleteInvestment } from "../../../redux/slices/InvestmentSlice";
import { useState } from "react";
import InvestmentForm from "../forms/InvestmentForm";

export default function InvestmentRecord({ index, investment }) {
    const dispatch = useDispatch();
    const [updating, setUpdating] = useState(false);

    return (
        <RecordCard
            updating={updating}
            setUpdating={setUpdating}
            deleteRecord={() => {
                dispatch(deleteInvestment(index))
            }}
        >
            {
                updating &&
                <InvestmentForm setState={() => setUpdating(false)} index={index} investment={investment} mode={"update"} />
            }
            {investment.name} ({investment.startAge} to {investment.endAge})
            <hr />
            ${investment.initialAmount} initial + <br />
            ${investment.annualAmount} at {investment.annualInterest}% p.a.
            <hr />
            Withdraw ${investment.annualWithdrawAmount} p.a. <br />
            From {investment.withdrawAge} y.o.
        </RecordCard>
    )
}