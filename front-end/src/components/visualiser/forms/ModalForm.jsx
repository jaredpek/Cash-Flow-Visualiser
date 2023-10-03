import { GiCrossedSabres } from "react-icons/gi";

export default function ModalForm({ children, setState }) {
    return (
        <div className="modal-section">
            <div
                className="overlay"
                onClick={setState}
            />
            <div
                className="modal-exit"
                onClick={setState}
            >
                <GiCrossedSabres />
            </div>
            <div className="modal">
                {children}
            </div>
        </div>
    )
}