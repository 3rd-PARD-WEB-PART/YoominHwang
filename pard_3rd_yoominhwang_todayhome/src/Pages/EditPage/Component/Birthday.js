import { useState } from "react";
import "../../../css/Edit.css";
import { Input } from "./Nickname";

function Birthday() {
    const [bday, setBday] = useState();
    const onChange = (e) => {
        setBday(e.target.value);
    }

    return (
        <div className="component">
            <div className="component-label">생년월일</div>
            <span className="component-element">
            <Input onChange={onChange} type="date" value={bday} />
            </span>
        </div>
    );
}

export default Birthday;