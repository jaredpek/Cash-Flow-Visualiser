import { useEffect, useState } from "react";
import ModalForm from "./ModalForm";
import { addIncome, updateIncome } from "../../../redux/slices/IncomeSlice";
import { useDispatch } from "react-redux";

export default function IncomeForm({ setState, index, income, mode }) {
    const dispatch = useDispatch();
    const [name, setName] = useState((mode === "update") ? income.name : "");
    const [annualAmount, setAnnualAmount] = useState((mode === "update") ? income.annualAmount : "");
    const [startAge, setStartAge] = useState((mode === "update") ? income.startAge : "");
    const [endAge, setEndAge] = useState((mode === "update") ? income.endAge : "");

    useEffect(() => {
        if (annualAmount < 0) setAnnualAmount(0)
        if (startAge < 0) setStartAge(0)
        if (endAge < 0) setEndAge(0)
    }, [annualAmount, startAge, endAge])

    return (
        <ModalForm setState={setState}>
            <div className="input-section">
                <div className="title-text">Income</div>
                <hr />
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
                    value={annualAmount}
                    onChange={e => setAnnualAmount(e.target.value)}
                    placeholder="Annual Amount"
                />
                <div 
                    className="btn-main"
                    onClick={
                        (mode === "update") ?
                        () => {
                            dispatch(updateIncome({
                                index, 
                                data: {
                                    name, 
                                    annualAmount: Number(annualAmount), 
                                    startAge: Number(startAge), 
                                    endAge: Number(endAge)
                                }
                            }))
                            setState();
                        } :
                        () => {
                            dispatch(addIncome({
                                name,
                                annualAmount: Number(annualAmount), 
                                startAge: Number(startAge), 
                                endAge: Number(endAge),
                            }))
                            setName("");
                            setAnnualAmount("");
                            setStartAge("");
                            setEndAge("");
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