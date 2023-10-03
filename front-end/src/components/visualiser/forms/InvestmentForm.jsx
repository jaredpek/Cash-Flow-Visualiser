import { useEffect, useState } from "react";
import ModalForm from "../records/ModalForm";
import { addInvestment, updateInvestment } from "../../../redux/slices/InvestmentSlice";
import { useDispatch } from "react-redux";

export default function InvestmentForm({ setState, index, investment, mode }) {
    const dispatch = useDispatch();
    const [name, setName] = useState((mode == "update") ? investment.name : "");
    const [initialAmount, setInitialAmount] = useState((mode == "update") ? investment.initialAmount : "");
    const [annualAmount, setAnnualAmount] = useState((mode == "update") ? investment.annualAmount : "");
    const [annualInterest, setAnnualInterest] = useState((mode == "update") ? investment.annualInterest : "");
    const [startAge, setStartAge] = useState((mode == "update") ? investment.startAge : "");
    const [endAge, setEndAge] = useState((mode == "update") ? investment.endAge : "");
    const [withdrawAge, setWithdrawAge] = useState((mode == "update") ? investment.withdrawAge : "");
    const [annualWithdrawAmount, setAnnualWithdrawAmount] = useState((mode == "update") ? investment.annualWithdrawAmount : "");

    useEffect(() => {
        if (initialAmount < 0) setInitialAmount(0);
        if (annualAmount < 0) setAnnualAmount(0);
        if (annualInterest < 0) setAnnualInterest(0);
        if (startAge < 0) setStartAge(0);
        if (endAge < 0) setEndAge(0);
        if (withdrawAge < 0) setWithdrawAge(0);
        if (annualWithdrawAmount < 0) setAnnualWithdrawAmount(0);
    }, [initialAmount, annualAmount, annualInterest, startAge, endAge, withdrawAge, annualWithdrawAmount])

    return (
        <ModalForm setState={setState}>
            <div className="input-section">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
                <hr />
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
                <hr />
                <input
                    min={0}
                    type="number"
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
                <hr />
                <input
                    min={0}
                    type="number"
                    value={withdrawAge}
                    onChange={e => setWithdrawAge(e.target.value)}
                    placeholder="Withdrawal Age"
                />
                <input
                    min={0}
                    type="number"
                    value={annualWithdrawAmount}
                    onChange={e => setAnnualWithdrawAmount(e.target.value)}
                    placeholder="Annnual Withdrawal"
                />
                <div 
                    className="btn-main"
                    onClick={
                        (mode == "update") ?
                        () => {
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
                            setState();
                        } :
                        () => {
                            dispatch(addInvestment({
                                name,
                                initialAmount: Number(initialAmount), 
                                annualAmount: Number(annualAmount), 
                                annualInterest: Number(annualInterest), 
                                startAge: Number(startAge), 
                                endAge: Number(endAge),
                                withdrawAge: Number(withdrawAge),
                                annualWithdrawAmount: Number(annualWithdrawAmount),
                            }))
                            setName("");
                            setInitialAmount("");
                            setAnnualAmount("");
                            setAnnualInterest("");
                            setStartAge("");
                            setEndAge("");
                            setWithdrawAge("");
                            setAnnualWithdrawAmount("");
                            setState();
                        }
                    }
                >
                    Submit
                </div>
            </div>
        </ModalForm>
    )
}