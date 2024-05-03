import "../../../css/Edit.css";
import { Input } from "./Nickname";
import { myBday, myInfoSelector } from "../../../Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";

function Homepage() {
    // const [homepage, setHomepage] = useState("we-pard.com");
    // const onChange = (e) => {
    //     setHomepage(e.target.value);
    // }

    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useSetRecoilState(myInfoSelector);

    const onChange = (e) => {
        setMyInfo({...myInfo, homepage: e.target.value})
    };

    return (
        <div className="component">
            <div className="component-label">홈페이지</div>
            <span className="component-element">
            <Input onChange={onChange} type="text" value={myInfo.homepage} />
            </span>
        </div>
    );
}

export default Homepage;