import React from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { myInfoAge, myInfoName, myInfoSelector } from "../Atom";
import { useNavigate } from "react-router-dom";

function UpdateInfo() {
    // 이렇게 하면 수정 취소 눌러도 수정 내용이 반영됨 -> 이럴 때 useState 사용하면 됨
    
    // const [myAge, setMyAge] = useRecoilState(myInfoAge);
    // const [myName, setMyName] = useRecoilState(myInfoName);

    // const navigator = useNavigate();            // event 끝나고 페이지 이동

    // const submitHandler = () => {
    //     if(window.confirm('수정하시겠습니까?')) {           // html 개념 alert, confirm, prompt
    //         alert("수정되었습니다.");
    //         navigator("/");
    //     }
    //     else {
    //         alert("취소되었습니다.");
    //     }
    // }

    // useState

    // const [myAge, setMyAge] = useRecoilState(myInfoAge);
    // const [myName, setMyName] = useRecoilState(myInfoName);

    // const [inputUserAge, setInputUserAge] = useState(24);

    // const navigator = useNavigate();            // event 끝나고 페이지 이동

    // const submitHandler = () => {
    //     if(window.confirm('수정하시겠습니까?')) {           // html 개념 alert, confirm, prompt
    //         // setMyAge(inputUserAge);
    //         alert("수정되었습니다.");
    //     }
    //     else {
    //         alert("취소되었습니다.");
    //     }
    //     navigator("/");
    // }

    // return(
    //     <div>
    //         <h1>정보 수정하는 페이지</h1>
    //         <div>
    //             <span>나이 </span>
    //             <input type="number" value={myAge} onChange={(e) => setMyAge(e.target.value)} />
    //         </div>
    //         <div>
    //             <span>이름 </span>
    //             <input type="text" value={myName} onChange={(e) => setMyName(e.target.value)} />
    //         </div>
    //         <button onClick={submitHandler}>수정하기</button>
    //     </div>
    // );

    const [myAge, setMyAge] = useRecoilState(myInfoAge);
    const [myName, setMyName] = useRecoilState(myInfoName);

    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useSetRecoilState(myInfoSelector);

    const navigator = useNavigate();            // event 끝나고 페이지 이동

    const submitHandler = () => {
        if(window.confirm('수정하시겠습니까?')) {           // html 개념 alert, confirm, prompt
            alert("수정되었습니다.");
            navigator("/");
        }
        else {
            alert("취소되었습니다.");
        }
        navigator("/");
    }

    return(
        <div>
            <h1>정보 수정하는 페이지</h1>
            <div>
                <span>나이 </span>
                {/* age라는 값만 바꾸기 위한 함수형태 */}
                <input type="number" value={myInfo.age} onChange={(e) => setMyInfo({...myInfo, age: e.target.value})} />
            </div>
            <div>
                <span>이름 </span>
                <input type="text" value={myInfo.name} onChange={(e) => setMyInfo({...myInfo, name: e.target.value})} />
            </div>
            <button onClick={submitHandler}>수정하기</button>
        </div>
    );
}

export default UpdateInfo;