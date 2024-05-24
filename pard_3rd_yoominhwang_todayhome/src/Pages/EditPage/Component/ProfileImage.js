import "../../../css/App.css";
import { useCallback, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { userInfo } from "../../../Atom";

function ProfileImage() {
    const fileInput = useRef(null);
    const [myInfo, setMyInfo] = useRecoilState(userInfo);

    const onCancel = () => {
        fileInput.current.value = "";
    }

    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setMyInfo((prevUserInfo) => ({
        ...prevUserInfo,
        profile: imageUrl,
      }));
    };

    const fileInputHandler = useCallback((e) => {
        const files = e.target && e.target.files;
        if(files && files[0]) {
            setMyInfo({...myInfo, profile: files[0].name});
        }
    }, []);

    return (
        <div className="component">
            <div className="component-label">프로필 이미지</div>
            <span className="component-element">
                <File type="file" ref={fileInput} onChange={handleFileInputChange} styled={{ display: "none" }} />
                <Button onClick={onCancel}>Cancel</Button>
            </span>
        </div>
    );
}

const File = styled.input`
    display: block;
`;

const Button = styled.button`
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

export default ProfileImage;