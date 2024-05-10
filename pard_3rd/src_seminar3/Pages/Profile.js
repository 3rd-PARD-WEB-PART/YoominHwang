import { useParams } from "react-router-dom";

const data = {
    Pmj: {
        name: "박민지",
        description: "파드 3기 웹 파트장"
    },
    Kki: {
        name: "김광일",
        description: "파드 3기 웹 부파트장"
    }
}
function Profile() {
    // url component 사용할 수 있는 어떤 함수 같은 거
    // localhost 뒤에 오는 URL 정보를 params에 저장
    const params = useParams();
    // App.js에서 username이라는 변수로 읽어왔기 때문에 username
    const profile = data[params.username];
    // 리턴 안은 뼈대, const는 데이터
    return (
        <div>
            <h1>소개</h1>
            {
                profile
                ? (
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.description}</p>
                    </div>
                )
                : <p>존재하지 않는 프로필입니다.</p>
            }
            {/* <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p> */}
        </div>
    );
};

export default Profile;