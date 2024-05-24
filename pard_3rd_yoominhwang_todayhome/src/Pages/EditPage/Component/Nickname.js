import "../../../css/App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
// import { myNickName, myInfoSelector } from "../../../Atom";
import { userInfo } from "../../../Atom";
import { getUserData } from "../../../API/AxiosAPI";
import { useRecoilValue, useRecoilState } from "recoil";

function Nickname() {
    // const [nickname, setNickname] = useState("팡일Kim");
    // const onChange = (e) => {
    //     setNickname(e.target.value);
    // }

    // HW4
    // const myInfo = useRecoilValue(myInfoSelector);
    // const setMyInfo = useSetRecoilState(myInfoSelector);

    // const onChange = (e) => {
    //     setMyInfo({...myInfo, nickname: e.target.value})
    // };

    const id = 1;
    const [tempInfo, setTempInfo] = useRecoilState(userInfo);

    const onChange = (e) => {

        setInfo ({
          ...info,
          nickname: e.target.value
        });
    }

    const getMemberData = async (id) => {
      try {
        const response = await getUserData(id);
        setTempInfo ((tempInfo) => ({
          ...tempInfo,
          bday: response.data.bday,
        }))
      } catch(err) {
        console.error(err);
      }
    }

    useEffect(() => {
      getMemberData(id);
      console.log(tempInfo);
    }, [])

    return (
        <div className="component">
            <div className="component-label">별명<p className="required">* 필수항목</p></div>
            <span className="component-element">
            <Input onChange={onChange} value={tempInfo.nickname} />
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