import "../../../css/Reg.css";

function Nickname() {
    return (
        <div>
            <p className="title">닉네임</p>
            <p className="title">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
            <input type="text" className="input" placeholder="별명 (2~15자)" />
        </div>
    );
}

export default Nickname;