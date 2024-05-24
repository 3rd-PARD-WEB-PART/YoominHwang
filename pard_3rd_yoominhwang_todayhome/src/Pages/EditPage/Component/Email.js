import styled from "styled-components";
import "../../../css/App.css";
// import { myEmail, myDomain } from "../../../Atom";
import { getUserData } from "../../../API/AxiosAPI";
import { useRecoilValue, useRecoilState } from "recoil";
import { userInfoSet } from "../../../Atom";
import { useState, useEffect } from "react";


function Email() {
    // 운영자만 이메일을 변경해줄 수 있기 때문에 이메일을 수정하지 못하도록 하였음
    // const [email, setEmail] = useState("webpart");
    // const [domain, setDomain] = useState("pard.com");

    // HW4
    // const myInfo = useRecoilValue(myInfoSelector);

    const id = 1;
    const [userInfo, setUserInfo] = useRecoilState(userInfoSet);
    const [tempUserInfo, setTempUserInfo] = useState({});
    const emailSplit = userInfo.email.split('@');

    const getMemberData = async(id) => {
      try {
        const response = await getUserData(id);
        setTempInfo ((userInfo) => ({
          ...userInfo,
          email: response.data.email,
          e: emailSplit[0],
          domain: emailSplit[1]
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
            <div className="component-label">이메일<p className="required">* 필수항목</p></div>
            <div className="component-element">
                <div className="input-wrapper">
                    <Input value={tempInfo.e} readonly />
                    <span className="separator">@</span>
                    <Input value={tempInfo.domain} readonly />
                </div>
                <Msg>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</Msg>
            </div>
        </div>
    );   
}

const Msg = styled.p`
margin-top: 0;
margin-left: 1rem;
font-size: 0.81rem;
font-weight: 700;
line-height: 1rem;
text-align: left;
font-variation-settings: 'slnt' 0;
color: #9E9E9E;
`;

const Input = styled.input`
    width: 7.81rem;

    margin: 0 0.625rem 0 0.625rem;
    margin-bottom: 0.625rem;
    padding-left: 0.56rem;

    border-radius: 5px;
    border: 1px;
    border-style: solid;
    border-color: #DBDBDB;

    font-size: 1rem;
    font-family: 'Inter';
    line-height: 1.13rem;
    text-indent: 1rem;
`;

export default Email;