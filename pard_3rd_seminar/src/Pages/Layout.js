// 중첩 라우트는 최상위 폴더에 구현해야 함

import{Outlet} from 'react-router-dom';
import styled from "styled-components";

const Layout = () => {
    return(
        <div>
            <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
                <div>
                    <MyLink to="/">home</MyLink>
                    <MyLink to="/about">about</MyLink>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

// styled component my link
const MyLink = styled.ul `
    &:hover {
        color: yellow;
        transition: 0.5s;
    }
`;

export default Layout;