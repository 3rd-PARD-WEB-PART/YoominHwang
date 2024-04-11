import "../../../css/App.css";

function Password() {
    return (
        <div>
            <p className="title">비밀번호</p>
            <p className="title">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <input type="password" className="input" placeholder="비밀번호" />
        </div>
    );
}

export default Password;