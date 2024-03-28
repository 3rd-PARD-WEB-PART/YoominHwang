import Email from "./Component/Email";
import Nickname from "./Component/Nickname";
import Password from "./Component/Password";
import PasswordCheck from "./Component/PasswordCheck";
import SignIn from "./Component/SignIn";
import Input from "./Component/Input";
import "../../App.css";

function RegisterPage() {
    // const email = {
    //     title: "이메일",
    //     text: "",
    //     ph: "이메일"
    // };

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
            {/* <Input email={email} /> */}
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