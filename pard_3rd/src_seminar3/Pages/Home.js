// import React from 'react';

import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>

            {/* URL param */}
            {/* <Link to="/about">소개</Link> */}

            {/* Query string
            use param 쓰는 url param과 달리 use location을 씀
            location이라는 객체를 반환해줌
            그 뒤에 있는 정보를 받아옴
            */}
            <Link to="/about?regdata=2024-01-01">소개</Link>

            <ul>
                <li>
                    <Link to="/profiles/Pmj">박민지의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/Kki">김광일의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>   
                </li>
                <li>
                    <Link to="/articles">게시물</Link>   
                </li>
            </ul>
        </div>        
    );
};

export default Home;