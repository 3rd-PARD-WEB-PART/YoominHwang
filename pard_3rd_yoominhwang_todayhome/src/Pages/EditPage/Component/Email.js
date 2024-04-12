import "../../../css/Edit.css";
import styled from "styled-components";

function Email() {
    // 운영자만 이메일을 변경해줄 수 있기 때문에 이메일을 수정하지 못하도록 하였음

    return (
        <div className="component">
            <div className="component-label">이메일<p className="required">* 필수항목</p></div>
            <div className="component-element">
                <div className="input-wrapper">
                    <span className="edit-input">webpart</span>
                    <span className="separator">@</span>
                    <span className="edit-input">pard.com</span>
                </div>
                <div className="message">이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</div>
            </div>
        </div>
    );   
}

export default Email;