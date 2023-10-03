import { MdOutlineAddBox } from "react-icons/md";

export default function TitleCard({ title, setState }) {
    return (
        <div className="title-section">
            <div>{title}</div>
            <MdOutlineAddBox
                onClick={setState}
                className="icon add"
            />
        </div>
    )
}