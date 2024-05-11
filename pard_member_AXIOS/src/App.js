import styled from "styled-components";
import Title from "./components/Title";
import React, { useEffect, useState } from "react";
import { getMembersAPI } from "./API/AxiosAPI"; // hint!
import FilterButton from "./components/FilterButton";
import Member from "./components/Member";
import AddMember from "./components/AddMember";

function App() {
  const [members, setMembers] = useState([]);
  const [part, setPart] = useState("all");
  const [changed, setChanged] = useState(false);
  const parts = ["ALL", "SERVER", "iOS", "WEB"];

  const getMember = async () => {
    //your code here
    //주의사항 : get에서는 뒤에 URL parameters가 들어갈 수 있어요!
    // URL parameters가 없다면 전체 구성원을 불러오고
    // 있다면 해당 파트의 구성원을 불러옴을 인지하세요.
    // 각각의 파트는 parameter로 'server', 'web', 'iOS' 로 정확히 기입 되어야만 합니다.

    const newData = await getMembersAPI(part);

    setMembers(newData);
  };

  useEffect(() => {
    getMember();
  }, [part]);

  return (
    <Background>
      <Title />
      <FilterContainer>
        {parts.map((partname) => {
          return (
            <FilterButton
              key={partname}
              part={partname}
              setPart={setPart}
              selected={part}
            />
          );
        })}
      </FilterContainer>
      <AddMember />
      <Container />
      {members.map((member) => {
        return <Member key={member.id} member={member} />;
      })}
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  background: #222222;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  width: 600px;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  /* justify-content ; */
  align-items: center;
`;

export default App;
