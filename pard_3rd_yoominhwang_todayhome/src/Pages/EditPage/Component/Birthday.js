// import { useState } from "react";
import "../../../css/App.css";
import { Input } from "./Nickname";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
// import { myBday, myInfoSelector } from "../../../Atom";
import { userInfoSet } from "../../../Atom";
import { useState, useEffect } from "react";
import { getUserData } from "../../../API/AxiosAPI";

function Birthday() {
    // const [bday, setBday] = useState("");
    // const onChange = (e) => {
    //     setBday(e.target.value);
    // }

    // const [bday, setBday] = useRecoilState(myBday);
    // const onChange = (e) => {
    //     setBday(e.target.value);
    // }

    // HW4
    // const myInfo = useRecoilValue(myInfoSelector);
    // const setMyInfo = useSetRecoilState(myInfoSelector);

    //   const onChange = (e) => {
    //    setMyInfo({...myInfo, bday: e.target.value})
    //    };

    const id = 1;
    const [userInfo, setUserInfo] = useRecoilState(userInfoSet);
    const [tempUserInfo, setTempUserInfo] = useState({});

    const onChange = (e) => {
        setTempInfo ({
          ...userInfo.bday,
          bday: e.target.value
        });
    }

    const getMemberData = async(id) => {
      try {
        const response = await getUserData(id);
        setTempInfo ((userInfo) => ({
          ...userInfo,
          bday: response.data.bday,
        }))
      } catch(err) {
        console.error(err);
      }
    }

    useEffect(() => {
      getUserData(id);
      console.log(userInfo);
    }, [])

    return (
        <div className="component">
            <div className="component-label">생년월일</div>
            <span className="component-element">
            <Input type="date" value={tempUserInfo.bday} onChange={(e) => onChange(e)} />
            </span>
        </div>
    );
}

export default Birthday;