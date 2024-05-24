import { Link, useNavigate } from "react-router-dom";
// import Email from "./Component/Email";
// import Nickname from "./Component/Nickname";
// import Password from "./Component/Password";
// import PasswordCheck from "./Component/PasswordCheck";
import SignIn from "./Component/SignIn";
import "../../css/App.css";
import { userInfoSet } from "../../Atom";
import { useRecoilState } from "recoil";
import { getUserData } from "../../API/AxiosAPI";
import { useEffect } from "react";

const id = 1;

const RegisterPage = ({setIsLoggedIn}) => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     setIsLoggedIn(true);
    //     navigate("../profile");
    // }

    const [userInfo, setUserInfo] = useRecoilState(userInfoSet);

    const getMemberData = async (id) => {
      try {
        const response = await getUserData(id);
        console.log(response);
        const file = response.profile;
        
        setUserInfo((userInfo) => ({
          ...userInfo,
          id: response.id,
          email: response.email,
          nickname: response.nickname,
          password: response.password,
        }));
      } catch(err) {
        console.error(err);
      }
    }

    useEffect(() => {
      getMemberData(id);
    }, [])

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
                    {/* <Email />
                    <Password />
                    <PasswordCheck />
                    <Nickname /> */}
                    {/* email */}
                    <div>
                        <p className="title">이메일</p>
                        <input type="text" className="input" placeholder="이메일" />
                    </div>
                    {/* password */}
                    <div>
                        <p className="title">비밀번호</p>
                        <p className="title">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                        <input type="password" className="input" placeholder="비밀번호" />
                    </div>
                    {/* password check */}
                    <div>
                        <p className="title">비밀번호 확인</p>
                        <input type="password" className="input" placeholder="비밀번호 확인" />
                    </div>
                    {/* nickname */}
                    <div>
                        <p className="title">닉네임</p>
                        <p className="title">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                        <input type="text" className="input" placeholder="별명 (2~15자)" />
                    </div>
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