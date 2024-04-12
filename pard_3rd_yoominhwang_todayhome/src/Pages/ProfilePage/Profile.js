import "../../css/Profile.css";
import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";
import { BsTicketPerforated } from "react-icons/bs";
import { useState } from "react";
import { Navigate, Link, Outlet } from "react-router-dom";
import { PiCursorClickDuotone } from "react-icons/pi";

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
    // const handleClick = () => {
    //     setIsLoggedIn(false);
    // };

    const [ heart, setHeart ] = useState(false);

    // if(!isLoggedIn) {
    //     return <Navigate to="/profile" replace={true} />
    // }

    return (
        <div className="profile-body">
            <Outlet />
            <div className="header-bottom">
                <MenuBar>
                    <MyLink to="/">모두보기</MyLink>
                    <MyLink to="/">사진</MyLink>
                    <MyLink to="/">집들이</MyLink>
                    <MyLink to="/">노하우</MyLink>
                    <MyLink to="/">질문과답변</MyLink>
                    <MyLink to="/">스크랩북</MyLink>
                    <MyLink to="/">좋아요</MyLink>
                </MenuBar>
            </div>
            <div className="contents">
                <div></div>
                <ProfileBox>
                    <div className="profile-top">
                        <div>
                            <img src="profile.png" className="profile-pic" alt="Profile Picture" />
                        </div>
                        <div className="name">
                            팡일Kim
                        </div>
                        <div className="follow">
                            <div></div>
                            <Follow>팔로워 <span className="fnum">0</span></Follow>
                            <Follow>팔로잉 <span className="fnum">0</span></Follow>
                            <div></div>
                        </div>
                        <Link to="/edit"><Button>설정</Button></Link>
                    </div>
                    <Line />
                    <div className="profile-bottom">
                        <div>
                            <Bookmark />
                            <p className="label">스크랩북</p>
                            <h3>0</h3> 
                        </div>
                        <div>
                            <Heart  src={heart? "/redheart.png":"/heart.png"} className="heart-icon"
                            onClick={() => {
                                setHeart((heart) => !heart);
            
                            }}
                            />
                            <p className="label">좋아요</p> 
                            <h3>{heart ? "1" : "0"}</h3>                
                        </div>
                        <div>
                            <Ticket />
                            <p className="label">내 쿠폰</p>
                            <h3>0</h3> 
                        </div>
                    </div>
                </ProfileBox>
                <div className="box-wrapper">
                    <div className="box">
                        <p className="heading">사진 <span className="num">0</span></p>
                        <Box>
                            <Msg>+ 첫 번째 사진을 올려보세요.</Msg>
                        </Box>
                    </div>
                    <div className="box">
                        <p className="heading">집들이 <span className="num">0</span></p>
                        <Box>
                            <Msg>+ 첫 번째 집들이를 올려보세요.</Msg>
                        </Box>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

const Msg = styled.p`
    font-family: Inter;
    font-size: 13px;
    font-weight: 700;
    line-height: 15.73px;
    text-align: center;
    margin-top: 80px;
    color: #757575;
`

const Box = styled.div`
    width: 700px;
    height: 187.28px;

    border: 1px dashed #757575;
`

const Line = styled.hr`
    width: 231px;
    border: 1px solid #EAEBEF;
    border-radius: 10px;
    margin-bottom: 27.89px;
`

const Bookmark = styled(BsBookmark)`
    font-size: 24.9px;
`

const Heart = styled.img`
    &:hover {
        color: #F05656;
        transition: 0.5s;
    }
    height: 24.9px;
    width: 24.9px;
`

const Ticket = styled(BsTicketPerforated)`
    font-size: 24.9px;
`

const MenuBar = styled.div`
    display: flex;
`

const MyLink = styled(Link)`
    &:hover {
        color: #35C5F0;
        transition: 0.5s;
    }
    padding: 10px;
    padding-bottom: 5px;

    text-decoration: none;
    color: #292929;
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 18.15px;
    text-align: center;
`

const ProfileBox = styled.div`
    border-style: solid;
    border-color: #DBDBDB;
    border-width: 1px;
    border-radius: 3px;

    width: 285px;
    height: 460.24px;

    justify-content: center;
    align-items: center;

    margin: 30.88px;
    padding: 31.88px;
`

const Follow = styled.div`
    font-weight: 400;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 15px;
`

const Button = styled.button`
    width: 60px;
    height: 34.87px;

    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    border-color: #DBDBDB;

    color: #000000;
    background-color: #FFFFFF;

    font-size: 13px;
    font-weight: 400;

    margin: 10px;
    margin-bottom: 20px;

    cursor: pointer;
`
  
export default Profile;