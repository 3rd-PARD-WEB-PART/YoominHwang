import{Link, Outlet, NavLink} from 'react-router-dom';
import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";
import { SlBell } from "react-icons/sl";
import { BsCart } from "react-icons/bs";
import "../../css/Layout.css";

const NavBar = () => {
    const activeStyle = {
        color: "#35C5F0",
    };

    return(
        <div>
            <header>
                <div className="header-top">
                    <MenuBar>
                        <img src="menu.png" className="menu-img" />
                        <MyLink to="/"><img src="/logo.png" className="logo" alt="Today Home" /></MyLink>
                        <div className="menu1">
                            <MyLink to="/">커뮤니티</MyLink>
                            <MyLink to="/">쇼핑</MyLink>
                            <MyLink to="/">인테리어/생활</MyLink>
                        </div>
                        <div class="search">
                            <img src="search.png" className="search-img" />
                            <input type="text" placeholder="통합검색"classname="search-bar" />
                        </div>
                        <img src="search-black.png" className="search-tab" />
                        <MyLink to="/" className="cart"><Cart /></MyLink>
                        <span className="icons">
                            <MyLink to="/"><Bookmark /></MyLink>
                            <MyLink to="/"><Bell /></MyLink>
                            <MyLink to="/"><Cart /></MyLink>
                        </span>
                        <img src="/profile.png" className="profile-icon" />
                        <Button className="write">
                            <span>글쓰기</span>
                            <span><img src="/arrow.png" className="arrow"/></span>
                        </Button>
                    </MenuBar>
                </div>
                <div className="header-bottom">
                    <MenuBar>
                        <MyLink to={`/profile`} style={({isActive}) => (isActive ? activeStyle : undefined)}>프로필</MyLink>
                        <MyLink to="/">나의 쇼핑</MyLink>
                        <MyLink to="/">나의 리뷰</MyLink>
                        <MyLink to={`/edit`}
                        style={({isActive}) => isActive ? activeStyle : undefined}
                        >설정</MyLink>
                    </MenuBar>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

const Bookmark = styled(BsBookmark)`
    font-size: 1.15rem;
`

const Bell = styled(SlBell)`
    font-size: 1.15rem;
`

const Cart = styled(BsCart)`
    font-size: 1.15rem;
`

const MenuBar = styled.div`
    display: flex;
    justify-content: center;

    font-size: 1.125rem;
    padding-bottom: 0.625rem;
`

const MyLink = styled(NavLink)`
    &:hover {
        color: #35C5F0;
        transition: 0.5s;
    }
    text-decoration: none;
    padding: 0.3rem;
    color: #292929;
    text-align: center;
    font-family: 'Inter';
    font-size: 1.125rem;
    font-weight: 700;
`

const Button = styled.button `
    background-color: #35C5F0;
    width: 6.25rem;
    height: 2.68rem;

    margin-left: 0.625rem;
    margin-bottom: 0.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    border-color: #DBDBDB;
    border: 1px;
    border-style: solid;

    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.28rem;
    text-align: center;

    @media screen and (max-width: 767px) {
        display: none;
    }
`

export default NavBar;