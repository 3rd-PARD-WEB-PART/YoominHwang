import "../../../css/Reg.css";
import { myInfoSelector } from "../../../Atom";
import { useSetRecoilState, useRecoilValue } from "recoil";

function Email() {
    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useSetRecoilState(myInfoSelector);

    const onChange = (e) => {
        const str = e.target.value.split("@");
        setMyInfo({...myInfo, email: str[0], domain: str[1]});
    }

    return (
        <div>
            <p className="title">이메일</p>
            <input type="text" className="input" placeholder="이메일" onChange={onChange} />
        </div>
    );
}

export default Email;