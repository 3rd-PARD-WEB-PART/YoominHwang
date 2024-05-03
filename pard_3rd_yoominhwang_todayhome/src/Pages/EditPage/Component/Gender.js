import "../../../css/Edit.css";
import styled from "styled-components";
import { myInfoSelector } from "../../../Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";

function Gender() {
    // const [gender, setGender] = useState(1);
    // const radioHandler = (e) => {
    //     setGender(Number(e.target.value));
    // };

    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useSetRecoilState(myInfoSelector);

    const radioHandler = (e) => {
        setMyInfo({...myInfo, gender: Number(e.target.value)});
    };
    
    return (
        <div className="component">
            <div className="component-label">성별</div>
            <RadioContainer>
                <div>
                    <Radio type="radio" value={0} onChange={radioHandler} checked={myInfo.gender === 0} />
                    <Label>남성</Label>
                    <Radio value={1} onChange={radioHandler} checked={myInfo.gender === 1} />
                    <Label>여성</Label>
                </div>
            </RadioContainer>
        </div>
    );
}

const Radio = styled.input.attrs({type: 'radio'})`
`;

const Label = styled.label`
    font-size: 1rem;
    font-family: 'Inter';
    font-weight: 400;

    line-height: 1.13rem;
    text-indent: 1rem;
`;

const RadioContainer = styled.div`
    width: 100%;
`;

export default Gender;