import "../../../css/Edit.css";
import { Input } from "./Nickname";
import { useState } from "react";
import { myBday, myInfoSelector } from "../../../Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Introduce() {
    // const [intro, setIntro] = useState("안녕하세요 웹파트 과제입니다.");
    // const onChange = (e) => {
    //     setIntro(e.target.value);
    // }

    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useSetRecoilState(myInfoSelector);

    const onChange = (e) => {
        setMyInfo({...myInfo, intro: e.target.value})
    };

    return (
        <div className="component">
            <div className="component-label">한줄 소개<p className="required">* 필수항목</p></div>
            <span className="component-element">
            <Input onChange={onChange} type="text" value={myInfo.intro} />
            </span>
        </div>
    );
}

export default Introduce;