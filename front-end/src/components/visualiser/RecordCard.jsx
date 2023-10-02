import { useState } from "react";
import { BiTrash, BiEditAlt, BiCheck } from "react-icons/bi";

export default function RecordCard({ children, updateRecord, deleteRecord }) {
    const [updating, setUpdating] = useState(false);
    return (
        <div className="record-card">
            <div className="record-details">
                {children}
            </div>
            <div className="icon-section">
                {
                    updating ?
                    <BiCheck
                        onClick={() => {
                            setUpdating(false);
                            updateRecord();
                        }}
                        className="icon update"
                    /> :
                    <BiEditAlt
                        onClick={() => {setUpdating(true)}}
                        className="icon update"
                    />
                }
                <BiTrash
                    onClick={deleteRecord}
                    className="icon delete"
                />
            </div>
        </div>
    )
}