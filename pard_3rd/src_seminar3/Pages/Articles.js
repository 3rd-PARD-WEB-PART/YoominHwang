import {NavLink, Outlet} from 'react-router-dom';

function Articles() {
    // const activeStyle = {
    //     color: 'green',
    //     fontSize: 21,
    // }

    return (
        <div>
            {/* Route의 자식 요소들을 보여준다는 뜻 */}
            {/* <Outlet />
            <ul>
                <li>
                    <NavLink
                        to="/articles/1"
                        style={({isActive}) => (
                            isActive
                                ? activeStyle
                                : undefined
                        )}>게시글 1</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/articles/2"
                        style={({isActive}) => (
                            isActive
                                ? activeStyle
                                : undefined
                        )}>게시글 2</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/articles/3"
                        style={({isActive}) => (
                            isActive
                                ? activeStyle
                                : undefined
                        )}>게시글 3</NavLink>
                </li>
            </ul> */}
            
            {/* <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>   
                </li>
                    */}
            
            <Outlet />
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
};

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    const defaultStyle ={
        color: 'black',
    }

    return(
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({isActive}) => (isActive? activeStyle : defaultStyle)}>
                    게시글 {id}
                </NavLink>
        </li>
    )
}

export default Articles;