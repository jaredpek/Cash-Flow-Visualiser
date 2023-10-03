import { useEffect, useState } from "react";
import ModalForm from "../records/ModalForm";
import { addExpense, updateExpense } from "../../../redux/slices/ExpenseSlice";
import { useDispatch } from "react-redux";

export default function ExpenseForm({ setState, index, expense, mode }) {
    const dispatch = useDispatch();
    const [name, setName] = useState((mode === "update") ? expense.name : "");
    const [annualAmount, setAnnualAmount] = useState((mode === "update") ? expense.annualAmount : "");
    const [startAge, setStartAge] = useState((mode === "update") ? expense.startAge : "");
    const [endAge, setEndAge] = useState((mode === "update") ? expense.endAge : "");

    useEffect(() => {
        if (annualAmount < 0) setAnnualAmount(0)
        if (startAge < 0) setStartAge(0)
        if (endAge < 0) setEndAge(0)
    }, [annualAmount, startAge, endAge])

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
                    value={annualAmount}
                    onChange={e => setAnnualAmount(e.target.value)}
                    placeholder="Annual Amount"
                />
                <div 
                    className="btn-main"
                    onClick={
                        (mode === "update") ?
                        () => {
                            dispatch(updateExpense({
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
                            dispatch(addExpense({
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