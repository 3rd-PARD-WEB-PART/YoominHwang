import "../../css/Edit.css";
import Email from "./Component/Email";
import Nickname from "./Component/Nickname";
import Homepage from "./Component/Homepage";
import Gender from "./Component/Gender";
import Birthday from "./Component/Birthday";
import ProfileImage from "./Component/ProfileImage";
import Introduce from "./Component/Introduce";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function EditProfile() {

    return (
        <div className="edit-profile">
            <Outlet />
            <div className="header-bottom">
                <MenuBar>
                    <MyLink to="/">회원정보수정</MyLink>
                    <MyLink to="/">알림 설정</MyLink>
                    <MyLink to="/">사용자 숨기기 설정</MyLink>
                    <MyLink to="/">전문가 신청</MyLink>
                    <MyLink to="/">비밀번호 변경</MyLink>
                    <MyLink to="/">추천코드</MyLink>
                </MenuBar>
            </div>
            <div className="edit-contents">
                <div className="edit-contents-wrapper">
                    <Edit>
                        <div className="edit-header">
                            회원정보수정
                        </div>
                        <div className="edit-info">
                        <div className="edit-email"><Email /></div>
                        <Nickname />
                        <Homepage />
                        <Gender />
                        <Birthday />
                        <ProfileImage />
                        <Introduce />
                        </div>
                    </Edit>
                    <div className="edit-side">
                        <Link to="/" className="leave">탈퇴하기</Link>
                    </div>
                    <div className="edit-button"><Link to="/profile"><Button>수정하기</Button></Link></div>
                </div>
            </div>
        </div>
    );
}

const Edit = styled.div`
    display: grid;
    justify-content: left;
`

const MenuBar = styled.div`
    display: flex;
`

const MyLink = styled.ul`
    &:hover {
        color: #35C5F0;
        transition: 0.5s;
    }
    padding-bottom: 5px;
`

const Button = styled.button`
    width: 100px;
    height: 43px;

    border-style: none;
    border-radius: 5px;

    color: #FFFFFF;
    background-color: #35C5F0;

    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;

    margin-right: 52px;
    margin-bottom: 20px;

    cursor: pointer;
`
  
export default EditProfile;