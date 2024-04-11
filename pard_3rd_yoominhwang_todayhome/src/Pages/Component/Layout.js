import{Outlet} from 'react-router-dom';
import styled from "styled-components";
import { BsBookmark } from "react-icons/bs";
import { SlBell } from "react-icons/sl";
import { BsCart } from "react-icons/bs";
import "../../css/Layout.css";

const NavBar = () => {
    return(
        <div>
            <header>
                <div className="header-top">
                    <MenuBar>
                        <MyLink to="/"><img src="/logo.png" className="logo" alt="Today Home" /></MyLink>
                        <MyLink to="/">커뮤니티</MyLink>
                        <MyLink to="/">쇼핑</MyLink>
                        <MyLink to="/">인테리어/생활</MyLink>
                        <div class="search">
                            <img src="search.png" className="search-img" />
                            <input type="text" placeholder="통합검색" />
                        </div>
                        <MyLink to="/"><Bookmark /></MyLink>
                        <MyLink to="/"><Bell /></MyLink>
                        <MyLink to="/"><Cart /></MyLink>
                        <img src="/profile.png" className="profile-icon" />
                        <Button>
                            <span>글쓰기</span>
                            <span><img src="/arrow.png" className="arrow"/></span>
                        </Button>
                    </MenuBar>
                </div>
                <div className="header-bottom">
                    <MenuBar>
                        <MyLink to="/">프로필</MyLink>
                        <MyLink to="/">나의 쇼핑</MyLink>
                        <MyLink to="/">나의 리뷰</MyLink>
                        <MyLink to="/">설정</MyLink>
                    </MenuBar>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

const Bookmark = styled(BsBookmark)`
    font-size: 18.5px;
`

const Bell = styled(SlBell)`
    font-size: 18.5px;
`

const Cart = styled(BsCart)`
    font-size: 18.5px;
`

const MenuBar = styled.div`
    display: flex;
    justify-content: center;

    font-size: 18px;
    padding-bottom: 10px;
`

const MyLink = styled.ul`
    &:hover {
        color: #35C5F0;
        transition: 0.5s;
    }
`

const Button = styled.button `
    background-color: #35C5F0;
    width: 100px;
    height: 43px;

    margin-left: 10px;
    margin-top: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8.08px;

    border-radius: 5px;
    border-color: #DBDBDB;
    border: 1px;
    border-style: solid;

    color: #FFFFFF;
    font-size: 15px;
    font-weight: 400;
    line-height: 20.57px;
    text-align: center;
`

export default NavBar;