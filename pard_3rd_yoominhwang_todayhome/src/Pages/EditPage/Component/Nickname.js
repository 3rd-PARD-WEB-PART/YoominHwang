import "../../../css/Edit.css";
import styled from "styled-components";
import { useState } from "react";
import { myBday, myInfoSelector } from "../../../Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Nickname() {
    // const [nickname, setNickname] = useState("팡일Kim");
    // const onChange = (e) => {
    //     setNickname(e.target.value);
    // }

    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useSetRecoilState(myInfoSelector);

    const onChange = (e) => {
        setMyInfo({...myInfo, nickname: e.target.value})
    };

    return (
        <div className="component">
            <div className="component-label">별명<p className="required">* 필수항목</p></div>
            <span className="component-element">
            <Input onChange={onChange} value={myInfo.nickname} />
            </span>
        </div>
    );
}

export const Input = styled.input`
    width: 360px;

    margin-bottom: 32px;
    padding-left: 9px;

    border-radius: 5px;
    border: 1px;
    border-style: solid;
    border-color: #DBDBDB;

    font-size: 15px;
    font-family: 'Inter';
    line-height: 18.15px;
    text-indent: 15px;
`;

export default Nickname;