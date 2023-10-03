import { BiTrash, BiEditAlt } from "react-icons/bi";

export default function RecordCard({ children, setUpdating, deleteRecord }) {
    return (
        <div className="record-card">
            <div className="record-details">
                {children}
            </div>
            <div className="icon-section">
                <BiEditAlt
                    onClick={setUpdating}
                    className="icon update"
                />
                <BiTrash
                    onClick={deleteRecord}
                    className="icon delete"
                />
            </div>
        </div>
    )
}