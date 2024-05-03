import "../../css/Profile.css";
import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";
import { BsTicketPerforated } from "react-icons/bs";
import { useState } from "react";
import { Navigate, Link, Outlet, NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";    
import { myNickname } from "../../Atom";

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
    // const handleClick = () => {
    //     setIsLoggedIn(false);
    // };

    const activeStyle = {
        color: "#35C5F0",
    };
    const [ heart, setHeart ] = useState(false);

    const [nickname, setNickname] = useRecoilState(myNickname);
    // if(!isLoggedIn) {
    //     return <Navigate to="/profile" replace={true} />
    // }

    return (
        <div className="profile-body">
            <Outlet />
            <div className="header-bottom">
                <MenuBar>
                    <MyLink to={`/profile`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        모두보기
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        사진
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        집들이
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        노하우
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        질문과답변
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        스크랩북
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        좋아요
                    </MyLink>
                </MenuBar>
            </div>
            <div className="contents">
                <div></div>
                <ProfileBox className="profilebox-tab">
                    <div className="profile-top">
                        <div>
                            <img src="profile.png" className="profile-pic" alt="Profile Picture" />
                        </div>
                        <div className="profile-top-detail">
                            <div className="name">
                                {nickname}
                            </div>
                            <div className="follow">
                                <div></div>
                                <Follow>팔로워 <span className="fnum">0</span></Follow>
                                <Follow>팔로잉 <span className="fnum">0</span></Follow>
                                <div></div>
                            </div>
                            <Link to="/edit"><Button className="setting">설정</Button></Link>
                        </div>
                    </div>
                    <Line />
                    <div className="profile-bottom">
                        <div>
                            <Bookmark />
                            <p className="label">스크랩북</p>
                            <h3>0</h3> 
                        </div>
                        <div>
                            <Heart  src={heart ? "/redheart.png":"/heart.png"} className="heart-icon"
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
    font-size: 0.81rem;
    font-weight: 700;
    line-height: 1rem;
    text-align: center;
    margin-top: 5rem;
    color: #757575;
`;

const Box = styled.div`
    width: 43.75rem;
    height: 12rem;

    border: 1px dashed #757575;
`;

const Line = styled.hr`
    width: 14rem;
    border: 1px solid #EAEBEF;
    border-radius: 10px;
    margin-bottom: 1.74rem;

    @media screen and (max-width: 1023px) {
        width: 70vw;
    }
`;

const Bookmark = styled(BsBookmark)`
    font-size: 1.5rem;
`;

const Heart = styled.img`
    &:hover {
        color: #F05656;
        transition: 0.5s;
    }
    height: 1.5rem;
    width: 1.5rem;
`;

const Ticket = styled(BsTicketPerforated)`
    font-size: 1.5rem;
`;

const MenuBar = styled.div`
    display: flex;
`;

const MyLink = styled(NavLink)`
    &:hover {
        color: #35C5F0;
        transition: 0.5s;
    }
    padding: 0.625rem;

    text-decoration: none;
    color: #292929;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.13rem;
    text-align: center;
`;

const ProfileBox = styled.div`
    border-style: solid;
    border-color: #DBDBDB;
    border-width: 1px;
    border-radius: 3px;

    @media screen and (max-width: 1023px) {
        width: 70vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex-grow: 0;
    }

    @media screen and (min-width: 1024px) {
        width: 18rem;
        height: 29rem;
    }

    justify-content: center;
    align-items: center;

    margin: 1.93rem;
    padding: 2rem;
`;

const Follow = styled.div`
    font-weight: 400;
    font-size: 0.81rem;
    padding-top: 0.625rem;
    padding-bottom: 1rem;

    @media screen and (max-width: 1023px) {
        margin: 0.5rem;
    }
`;

const Button = styled.button`
    width: 3.75re,;
    height: 2.15rem;

    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    border-color: #DBDBDB;

    color: #000000;
    background-color: #FFFFFF;

    font-size: 0.81rem;
    font-weight: 400;

    margin: 0.625rem;
    margin-bottom: 1.25rem;

    cursor: pointer;
`;

export default Profile;