// import { useState } from "react";
import "../../../css/Edit.css";
import { Input } from "./Nickname";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { myBday, myInfoSelector } from "../../../Atom";
import { useState } from "react";

function Birthday() {
    // const [bday, setBday] = useState("");
    // const onChange = (e) => {
    //     setBday(e.target.value);
    // }

    // const [bday, setBday] = useRecoilState(myBday);
    // const onChange = (e) => {
    //     setBday(e.target.value);
    // }

    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useSetRecoilState(myInfoSelector);

    const onChange = (e) => {
        setMyInfo({...myInfo, bday: e.target.value})
    };

    return (
        <div className="component">
            <div className="component-label">생년월일</div>
            <span className="component-element">
            <Input type="date" value={myInfo.bday} onChange={onChange} />
            </span>
        </div>
    );
}

export default Birthday;