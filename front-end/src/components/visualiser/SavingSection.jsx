import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSaving } from "../../redux/slices/SavingSlice";
import RecordCard from "./RecordCard";

export default function SavingSection() {
    // saving = {
    //     amount: Number,
    //     age: Number
    // }
    
    const dispatch = useDispatch();
    const savings = useSelector(state => state.Saving);
    const [amount, setAmount] = useState("");
    const [age, setAge] = useState("");

    return (
        <div>
            Saving Section
            <div className="input-section">
                <input
                    min={0}
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <input
                    min={0}
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    placeholder="Age"
                />
                <div 
                    className="btn-main add"
                    onClick={() => {
                        dispatch(addSaving({
                            amount, age,
                        }))
                        setAmount("");
                        setAge("");
                    }}
                >
                    +
                </div>
            </div>
            <div>
                {savings.map(saving => {
                    return (
                        <RecordCard key={savings.indexOf(saving)}>
                            {saving.age}: {saving.amount}
                        </RecordCard>
                    )
                })}
            </div>
        </div>
    )
}