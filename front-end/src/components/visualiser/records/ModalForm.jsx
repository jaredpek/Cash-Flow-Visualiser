export default function ModalForm({ children, setState }) {
    return (
        <div className="modal-section">
            <div
                className="overlay"
                onClick={setState}
            />
            <div className="modal">
                {children}
            </div>
        </div>
    )
}