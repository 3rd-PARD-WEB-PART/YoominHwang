import Email from "./Component/Email";
import Nickname from "./Component/Nickname";
import Password from "./Component/Password";
import PasswordCheck from "./Component/PasswordCheck";
import SignIn from "./Component/SignIn"
import "../../App.css";

function RegisterPage() {
    return (
        <div className="regpage">
            <div className="header">
                회원가입
            </div>
            <div className="info">
                <Email />
                <Password />
                <PasswordCheck />
                <Nickname />
            </div>
            <div className="signin">
                <SignIn />
            </div>
            <div className="footer">
                이미 아이디가 있으신가요?&nbsp;
                <span><a className="link" href="#none" target="_blank" rel="noopener noreferrer">로그인</a></span>
            </div>
        </div>
    );
}
  
export default RegisterPage;