import "../../../css/App.css";
import styled from "styled-components";
import { userInfo } from "../../../Atom";
import { useRecoilValue, useRecoilState } from "recoil";
import { getUserData } from "../../../API/AxiosAPI";
import { useState, useEffect } from "react";

function Gender() {
    // const [gender, setGender] = useState(1);
    // const radioHandler = (e) => {
    //     setGender(Number(e.target.value));
    // };

    // HW4
    // const myInfo = useRecoilValue(myInfoSelector);
    // const setMyInfo = useSetRecoilState(myInfoSelector);

    // const radioHandler = (e) => {
    //     setMyInfo({...myInfo, gender: Number(e.target.value)});
    // };

    const id = 1;
    const [userInfo, setUserInfo] = useRecoilState(userInfoSet);
    const [tempUserInfo, setTempUserInfo] = useState({});

    const onChange = (e) => {
        setTempUserInfo ({
          ...userInfo.gender,
          gender: Number(e.target.value)
        });
    }

    const getMemberData = async(id) => {
      try {
        const response = await getUserData(id);
        setTempInfo ((tempInfo) => ({
          ...tempInfo,
          gender: response.data.gender,
        }))
      } catch(err) {
        console.error(err);
      }
    }

    useEffect(() => {
      getUserData(id);
      console.log(tempInfo);
    }, [])
    
    return (
        <div className="component">
            <div className="component-label">성별</div>
            <RadioContainer>
                <div>
                    <Radio type="radio" value={0} onChange={onChange} checked={tempInfo.gender === 0} />
                    <Label>남성</Label>
                    <Radio value={1} onChange={onChange} checked={tempInfo.gender === 1} />
                    <Label>여성</Label>
                </div>
            </RadioContainer>
        </div>
    );
}

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

export default Gender;