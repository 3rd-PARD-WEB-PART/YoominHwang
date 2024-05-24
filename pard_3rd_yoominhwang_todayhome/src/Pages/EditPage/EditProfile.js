import "../../css/App.css";
// import Email from "./Component/Email";
// import Nickname from "./Component/Nickname";
// import Homepage from "./Component/Homepage";
// import Gender from "./Component/Gender";
// import Birthday from "./Component/Birthday";
// import ProfileImage from "./Component/ProfileImage";
// import Introduce from "./Component/Introduce";
import styled from "styled-components";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import { getUserData, patchUserData } from "../../API/AxiosAPI";
import { userInfoSet } from "../../Atom";
import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

function EditProfile({id}) {
    const [userInfo, setUserInfo] = useRecoilState(userInfoSet);
    const emailSplit = userInfo.email.split('@');

    const [info, setInfo] = useState({
      email: userInfo.email,
      e: emailSplit[0],
      domain: emailSplit[1],
      nickname: userInfo.nickname,
      homepage: userInfo.homepage,
      gender: parseInt(userInfo.gender),
      bday: userInfo.bday,
      profileImage: userInfo.profileImage,
      intro: userInfo.intro
    });

    const activeStyle = {
        color: "#35C5F0",
    };

    const navigator = useNavigate();

    const getMemberData = async (id) => {
      try {
        const response = await getUserData(id);
        console.log(response);
        const file = response.profileImage;
        
        setUserInfo((userInfo) => ({
          ...userInfo,
          id: response.id,
          email: response.email,
          nickname: response.nickname,
          gender: response.gender,
          bday: response.bday,
          password: response.password,
          profileImage: (file === "" ? "/profile.png" : file),
          intro: response.intro
        }));
      } catch(err) {
        console.error(err);
      }
    };

    const patchMemberData = async (id, data) => {
      try {
        const response = await patchUserData(id, data);
      } catch(err) {
        console.error(err);
      }
    };

    useEffect(() => {
      getMemberData(id);
      console.log(userInfo);
    }, []);

    const submitHandler = async () => {
      const data = {
        email: info.e + "@" + info.domain,
        e: info.e,
        domain: info.domain,
        nickname: info.nickname,
        homepage: info.homepage,
        gender: info.gender,
        bday: info.bday,
        profileImage: info.profileImage,
        intro: info.intro,
      }
      console.log("submit data.", data);
      await patchMemberData(id, data);
      getMemberData(id);
      alert("저장되었습니다.");
      navigator("../profile");
    };

    const onChange = (e, field) => {
      setInfo((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        profileImage: imageUrl,
      }));
    };

    const fileInput = useRef();

    const onClickFile = () => {
      fileInput.current.click();
    }

    return (
        <div className="edit-profile">
            <Outlet />
            {/* menu bar */}
            <div className="header-bottom">
                <MenuBar>
                    <MyLink to={`/edit`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        회원정보수정
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        알림 설정
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        사용자 숨기기 설정
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        전문가 신청
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        비밀번호 변경
                    </MyLink>
                    <MyLink to={`/`}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                        추천코드
                    </MyLink>
                </MenuBar>
            </div>
            {/* contents */}
            <div className="edit-contents">
                <div className="edit-contents-wrapper">
                    <Edit>
                        <Title>
                            회원정보수정
                        </Title>
                        <div className="edit-info">
                          {/* <div className="edit-email">
                            <Email />
                          </div>
                          <Nickname />
                          <Homepage />
                          <Gender />
                          <Birthday />
                          <ProfileImage />
                          <Introduce /> */}
                          {/* email */}
                          <div className="edit-email">
                            <div className="component">
                              <div className="component-label">이메일<p className="required">* 필수항목</p></div>
                              <div className="component-element">
                                  <div className="input-wrapper">
                                      <Input value={info.e} readonly />
                                      <span className="separator">@</span>
                                      <Input value={info.domain} readonly />
                                  </div>
                                  <Msg>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</Msg>
                              </div>
                            </div>
                          </div>
                          {/* nickname */}
                          <div className="component">
                              <div className="component-label">별명<p className="required">* 필수항목</p></div>
                              <span className="component-element">
                              <Input onChange={onChange} value={info.nickname} />
                              </span>
                          </div>
                          {/* homepage */}
                          <div className="component">
                              <div className="component-label">홈페이지</div>
                              <span className="component-element">
                              <Input onChange={onChange} type="text" value={info.homepage} />
                              </span>
                          </div>
                          {/* gender */}
                          <div className="component">
                              <div className="component-label">성별</div>
                              <RadioContainer>
                                  <div>
                                      <Radio type="radio" value={0} onChange={onChange} checked={info.gender === 0} />
                                      <Label>남성</Label>
                                      <Radio value={1} onChange={onChange} checked={info.gender === 1} />
                                      <Label>여성</Label>
                                  </div>
                              </RadioContainer>
                          </div>
                          {/* birthday */}
                          <div className="component">
                              <div className="component-label">생년월일</div>
                              <span className="component-element">
                              <Input type="date" value={info.bday} onChange={(e) => onChange(e)} />
                              </span>
                          </div>
                          {/* profile image */}
                          <div className="component">
                              <div className="component-label">프로필 이미지</div>
                              <span className="component-element">
                                <button type="button" onClick={onClickFile}>
                                  <img src={info.profileImage} alt="profile image"></img>
                                </button>
                                  <input type="file" ref={fileInput} onChange={handleFileInputChange} styled={{ display: "none" }} />
                              </span>
                          </div>
                          {/* introduction */}
                          <div className="component">
                              <div className="component-label">한줄 소개<p className="required">* 필수항목</p></div>
                              <span className="component-element">
                              <Input onChange={onChange} type="text" value={info.intro} />
                              </span>
                          </div>
                        </div>
                        <div></div>
                    </Edit>
                    <div className="edit-side">
                        <SignOut>
                            <Link to="/" className="leave">탈퇴하기</Link>
                        </SignOut>
                        <Update>
                            <Button onClick={submitHandler}>수정하기</Button>
                        </Update>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Title = styled.p`
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 4rem;
    margin-left: 80px;
    margin-bottom: 0;
    text-align: left;
`;

const Edit = styled.div`
    display: grid;
    justify-content: left;
`;

const SignOut = styled.div`
    margin-top: 3rem;
    margin-left: auto;
    margin-bottom: auto;
    margin-top: 
`;

const Update = styled.div`
    margin-left: auto;
    margin-top: auto;
`;

const MenuBar = styled.div`
    display: flex;
`;

const MyLink = styled(NavLink)`
    &:hover {
        color: #35C5F0;
        transition: 0.5s;
    }
    padding: 10px;

    text-decoration: none;
    color: #292929;
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 18.15px;
    text-align: center;
`;

const Button = styled.button`
    width: 100px;
    height: 43px;

    border-style: none;
    border-radius: 5px;

    color: #FFFFFF;
    background-color: #35C5F0;

    font-size: 15px;
    font-weight: 400;
    line-height: 18.15px;

    margin-right: 52px;
    margin-bottom: 5rem;

    cursor: pointer;
`;

const Radio = styled.input.attrs({type: 'radio'})`
`;

const Label = styled.label`
    font-size: 1rem;
    font-family: 'Inter';
    font-weight: 400;

    line-height: 1.13rem;
    text-indent: 1rem;
`;

const RadioContainer = styled.div`
    width: 100%;
`;

const Msg = styled.p`
margin-top: 0;
margin-left: 1rem;
font-size: 0.81rem;
font-weight: 700;
line-height: 1rem;
text-align: left;
font-variation-settings: 'slnt' 0;
color: #9E9E9E;
`;

const Input = styled.input`
    width: 7.81rem;

    margin: 0 0.625rem 0 0.625rem;
    margin-bottom: 0.625rem;
    padding-left: 0.56rem;

    border-radius: 5px;
    border: 1px;
    border-style: solid;
    border-color: #DBDBDB;

    font-size: 1rem;
    font-family: 'Inter';
    line-height: 1.13rem;
    text-indent: 1rem;
`;

const FileButton = styled.button`
    background-color: #DBDBDB;
    width: 100%;
    height: 2rem;

    border-radius: 3px;
    border-color: #DBDBDB;
    border: 1px;
    border-style: solid;

    color: #ffffff;
    font-family: 'Inter';
    font-size: 1rem;
    font-weight: 400;
    line-height: 20.57px;
    text-align: center;

    margin-bottom: 35px;

    cursor: pointer;
`;

export default EditProfile;