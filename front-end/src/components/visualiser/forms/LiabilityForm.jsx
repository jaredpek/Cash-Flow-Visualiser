import { useEffect, useState } from "react";
import ModalForm from "../records/ModalForm";
import { useDispatch } from "react-redux";
import { addLiability, updateLiability } from "../../../redux/slices/LiabilitySlice";

export default function LiabilityForm({ setState, index, liability, mode }) {
    const dispatch = useDispatch();
    const [name, setName] = useState((mode == "update") ? liability.name : "");
    const [initialAmount, setInitialAmount] = useState((mode == "update") ? liability.initialAmount : "");
    const [annualAmount, setAnnualAmount] = useState((mode == "update") ? liability.annualAmount : "");
    const [startAge, setStartAge] = useState((mode == "update") ? liability.startAge : "");
    const [endAge, setEndAge] = useState((mode == "update") ? liability.endAge : "");

    useEffect(() => {
        if (initialAmount < 0) setInitialAmount(0);
        if (annualAmount < 0) setAnnualAmount(0);
        if (startAge < 0) setStartAge(0);
        if (endAge < 0) setEndAge(0);
    }, [initialAmount, annualAmount, startAge, endAge])

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
                <div 
                    className="btn-main"
                    onClick={
                        (mode == "update") ?
                        () => {
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
                            setState();
                        } :
                        () => {
                            dispatch(addLiability({
                                name,
                                initialAmount: Number(initialAmount), 
                                annualAmount: Number(annualAmount), 
                                startAge: Number(startAge), 
                                endAge: Number(endAge),
                            }))
                            setName("");
                            setInitialAmount("");
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