import styled from "styled-components";
import "../../../css/Edit.css";
import { myEmail, myDomain } from "../../../Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { myInfoSelector } from "../../../Atom";
import { useState } from "react";


function Email() {
    // 운영자만 이메일을 변경해줄 수 있기 때문에 이메일을 수정하지 못하도록 하였음
    // const [email, setEmail] = useState("webpart");
    // const [domain, setDomain] = useState("pard.com");

    const myInfo = useRecoilValue(myInfoSelector);

    return (
        <div className="component">
            <div className="component-label">이메일<p className="required">* 필수항목</p></div>
            <div className="component-element">
                <div className="input-wrapper">
                    <Input value={myInfo.email} readonly />
                    <span className="separator">@</span>
                    <Input value={myInfo.domain} readonly />
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