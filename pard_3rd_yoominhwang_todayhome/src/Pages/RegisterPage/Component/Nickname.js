import "../../../css/Reg.css";
import { myInfoSelector } from "../../../Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

function Nickname() {
    const myInfo = useRecoilValue(myInfoSelector);
    const setMyInfo = useSetRecoilState(myInfoSelector);

    const onChange = (e) => {
        setMyInfo({...myInfo, nickname: e.target.value})
    }

    return (
        <div>
            <p className="title">닉네임</p>
            <p className="title">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
            <input type="text" className="input" placeholder="별명 (2~15자)" onChange={onChange} />
        </div>
    );
}

export default Nickname;