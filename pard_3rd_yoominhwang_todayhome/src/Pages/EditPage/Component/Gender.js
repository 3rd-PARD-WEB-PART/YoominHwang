import "../../../css/Edit.css";
import styled from "styled-components";
import { useState } from "react";

function Gender() {
    const [gender, setGender] = useState(1);
    const radioHandler = (e) => {
        setGender(Number(e.target.value));
    };
    
    return (
        <div className="component">
            <div className="component-label">성별</div>
            <div className="component-element">
            <span className="edit-input-radio">
                <Radio type="radio" value={0} onChange={radioHandler} checked={gender == 0} />남성
                <Radio type="radio" value={1} onChange={radioHandler} checked={gender == 1} />여성
            </span>
            </div>
        </div>
    );
}

const Radio = styled.input`
font-fmaily: 'Inter';
font-size: 13px;
text-align: left;
font-weight: 400;
`

export default Gender;