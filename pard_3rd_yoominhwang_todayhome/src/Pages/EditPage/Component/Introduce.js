import "../../../css/App.css";
import { Input } from "./Nickname";
import { useState, useEffect } from "react";
// import { myBday, myInfoSelector } from "../../../Atom";
import { userInfo } from "../../../Atom";
import { getUserData } from "../../../API/AxiosAPI";
import { useRecoilValue, useRecoilState } from "recoil";

function Introduce() {
    // const [intro, setIntro] = useState("안녕하세요 웹파트 과제입니다.");
    // const onChange = (e) => {
    //     setIntro(e.target.value);
    // }

    // HW4
    // const myInfo = useRecoilValue(myInfoSelector);
    // const setMyInfo = useSetRecoilState(myInfoSelector);

    // const onChange = (e) => {
    //     setMyInfo({...myInfo, intro: e.target.value})
    // };

    const id = 1;
    const [tempInfo, setTempInfo] = useRecoilState(userInfo);

    const onChange = (e) => {
        setTempInfo ({
          ...tempInfo.intro,
          intro: e.target.value
        });
    }

    const getMemberData = async(id) => {
      try {
        const response = await getUserData(id);
        setTempInfo ((tempInfo) => ({
          ...tempInfo,
          intro: response.data.intro,
        }))
      } catch(err) {
        console.error(err);
      }
    }

    useEffect(() => {
      getUserData(id);
      console.log(tempInfo);
    }, [])

    return (
        <div className="component">
            <div className="component-label">한줄 소개<p className="required">* 필수항목</p></div>
            <span className="component-element">
            <Input onChange={onChange} type="text" value={tempInfo.intro} />
            </span>
        </div>
    );
}

export default Introduce;