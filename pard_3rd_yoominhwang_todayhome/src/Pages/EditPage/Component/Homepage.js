import "../../../css/App.css";
import { Input } from "./Nickname";
import { userInfo } from "../../../Atom";
import { getUserData } from "../../../API/AxiosAPI";
import { useRecoilValue, useRecoilState } from "recoil";
import { useState, useEffect } from "react";

function Homepage() {
    // const [homepage, setHomepage] = useState("we-pard.com");
    // const onChange = (e) => {
    //     setHomepage(e.target.value);
    // }

    // HW4
    // const myInfo = useRecoilValue(myInfoSelector);
    // const setMyInfo = useSetRecoilState(myInfoSelector);

    // const onChange = (e) => {
    //     setMyInfo({...myInfo, homepage: e.target.value})
    // };

    const id = 1;
    const [tempInfo, setTempInfo] = useRecoilState(userInfo);

    const onChange = (e) => {
        setTempInfo ({
          ...tempInfo.homepage,
          homepage: e.target.value
        });
    }

    const getMemberData = async(id) => {
      try {
        const response = await getUserData(id);
        setTempInfo ((tempInfo) => ({
          ...tempInfo,
          homepage: response.data.homepage,
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
            <div className="component-label">홈페이지</div>
            <span className="component-element">
            <Input onChange={onChange} type="text" value={tempInfo.homepage} />
            </span>
        </div>
    );
}

export default Homepage;