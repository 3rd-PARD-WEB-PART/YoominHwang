import "../../../css/Edit.css";
import { useRef } from "react";
import styled from "styled-components";

function ProfileImage() {
    const fileInput = useRef(null);
        const onCancel = () => {
            fileInput.current.value = "";
        };

        return (
            <div className="component">
                <div className="component-label">프로필 이미지</div>
                <span className="component-element">
                <input type="file" accept="image/*" ref={fileInput} />
                <button onClick={onCancel}>Cancel</button>
                </span>
            </div>
        );
}

const Button = styled.button`
    background-color: #35C5F0;
    width: 100%;
    height: 50px;

    border-radius: 3px;
    border-color: #DBDBDB;
    border: 1px;
    border-style: solid;

    color: #ffffff;
    font-family: 'Inter';
    font-size: 17px;
    font-weight: 700;
    line-height: 20.57px;
    text-align: center;

    margin-bottom: 35px;

    cursor: pointer;
`

export default ProfileImage;