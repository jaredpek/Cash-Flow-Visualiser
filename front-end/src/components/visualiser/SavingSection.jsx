import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSaving } from "../../redux/slices/SavingSlice";

export default function SavingSection() {
    // saving = {
    //     amount: Number,
    //     age: Number
    // }
    
    const dispatch = useDispatch();
    const selector = useSelector(state => state.Saving);

    const [amount, setAmount] = useState('');
    const [age, setAge] = useState('');
    const [savings, setSavings] = useState([]);

    return (
        <div>
            Saving Section
            <div className="input-section">
                <input
                    type="number"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Savings"
                />
                <input
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
                {selector.map(saving => {
                    return <div key={selector.indexOf(saving)}>{saving.age}: {saving.amount}</div>
                })}
            </div>
        </div>
    )
}