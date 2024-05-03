import "../../css/Edit.css";
import Email from "./Component/Email";
import Nickname from "./Component/Nickname";
import Homepage from "./Component/Homepage";
import Gender from "./Component/Gender";
import Birthday from "./Component/Birthday";
import ProfileImage from "./Component/ProfileImage";
import Introduce from "./Component/Introduce";
import styled from "styled-components";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";

function EditProfile() {
    const activeStyle = {
        color: "#35C5F0",
    };

    const navigator = useNavigate();

    const submitHandler = () => {
        if (window.confirm('수정하시겠습니까?')) {
            alert("수정되었습니다.");
            navigator("/profile");
        } else {
            alert("취소되었습니다.");
        }
    }

    return (
        <div className="edit-profile">
            <Outlet />
            {/* menu bar */}
            <div className="header-bottom">
                <MenuBar>
                    <MyLink to={`/edit`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        회원정보수정
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        알림 설정
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        사용자 숨기기 설정
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        전문가 신청
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        비밀번호 변경
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        추천코드
                    </MyLink>
                </MenuBar>
            </div>
            {/* contents */}
            <div className="edit-contents">
                <div className="edit-contents-wrapper">
                    <Edit>
                        <Title>
                            회원정보수정
                        </Title>
                        <div className="edit-info">
                        <div className="edit-email"><Email /></div>
                        <Nickname />
                        <Homepage />
                        <Gender />
                        <Birthday />
                        <ProfileImage />
                        <Introduce />
                        </div>
                        <div></div>
                    </Edit>
                    <div className="edit-side">
                        <SignOut>
                            <Link to="/" className="leave">탈퇴하기</Link>
                        </SignOut>
                        <Update>
                            <Button onClick={submitHandler}>수정하기</Button>
                        </Update>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Title = styled.p`
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 4rem;
    margin-left: 80px;
    margin-bottom: 0;
    text-align: left;
`;

const Edit = styled.div`
    display: grid;
    justify-content: left;
`;

const SignOut = styled.div`
    margin-top: 3rem;
    margin-left: auto;
    margin-bottom: auto;
    margin-top: 
`;

const Update = styled.div`
    margin-left: auto;
    margin-top: auto;
`;

const MenuBar = styled.div`
    display: flex;
`;

const MyLink = styled(NavLink)`
    &:hover {
        color: #35C5F0;
        transition: 0.5s;
    }
    padding: 10px;

    text-decoration: none;
    color: #292929;
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 18.15px;
    text-align: center;
`;

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
    margin-bottom: 5rem;

    cursor: pointer;
`;

export default EditProfile;