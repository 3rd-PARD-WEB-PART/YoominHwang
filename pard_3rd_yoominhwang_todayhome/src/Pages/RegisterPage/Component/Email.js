import "../../../css/App.css";
// import { myInfoSelector } from "../../../Atom";
import { userInfoSet } from "../../../Atom";
import { useRecoilState, useRecoilValue } from "recoil";

function Email() {
    // const myInfo = useRecoilValue(myInfoSelector);
    // const setMyInfo = useSetRecoilState(myInfoSelector);

    // const onChange = (e) => {
    //     const str = e.target.value.split("@");
    //     setMyInfo({...myInfo, email: str[0], domain: str[1]});
    // }

    const [tempInfo, setTempInfo] = useRecoilState(userInfoSet);
    const onChange = (e) => {
      setTempInfo({...tempInfo, email: e.target.value});
    }

    return (
        <div>
            <p className="title">이메일</p>
            <input type="text" className="input" placeholder="이메일" onChange={onChange} />
        </div>
    );
}

export default Email;