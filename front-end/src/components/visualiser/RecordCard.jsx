import { BsFillTrash3Fill } from "react-icons/bs";

export default function RecordCard({ children, deleteRecord }) {
    return (
        <div className="record-card">
            <div>
                {children}
            </div>
            <BsFillTrash3Fill
                onClick={deleteRecord}
                className="icon"
            />
        </div>
    )
}