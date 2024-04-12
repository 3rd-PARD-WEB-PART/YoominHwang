import { Link, useNavigate } from "react-router-dom";
import Email from "./Component/Email";
import Nickname from "./Component/Nickname";
import Password from "./Component/Password";
import PasswordCheck from "./Component/PasswordCheck";
import SignIn from "./Component/SignIn";
import "../../css/Reg.css";

const RegisterPage = ({setIsLoggedIn}) => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     setIsLoggedIn(true);
    //     navigate("../profile");
    // }

    return (
        <div className="regpage">
            <div className="Wrapper">
                <div className="logocontainer">
                    <img src="/logo.png" className="logo" alt="Today Home" />
                </div>
                <div className="container">
                    <div className="header">
                        회원가입
                    </div>
                    <div className="info">
                    <Email />
                    <Password />
                    <PasswordCheck />
                    <Nickname />
                    </div>
                    <Link to="/profile"><SignIn /></Link>
                    <div className="footer">
                        이미 아이디가 있으신가요?&nbsp;
                        <span><Link to="/profile" className="link">로그인</Link></span>
                        {/* <span><Link className="link" onClick={handleClick}>로그인</Link></span> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
  
export default RegisterPage;