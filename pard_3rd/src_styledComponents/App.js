// import React, { useState, useEffect, useRef } from 'react';

// Hook 실습 1

// function App() {
//   const[count, setCount] = useState(0);
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// Hook 실습 2

// function App() {
//   const[count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("리액트는 재밌어!!");
//   }, [count]);
//   // useEffect 의존성 배열

//   return (
//     <div>
//       <p>You clicked the button {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// Hook 실습 3

// function App() {
//   const inputValue = useRef();

//   useEffect(() => {
//     console.log(inputValue);
//     inputValue.current.focus();
//   }, []);

//   return (
//     <div>
//       <input type="text" ref={inputValue} placeholder="username" />
//       <button>입력</button>
//     </div>
//   );
// }

// Event 실습 1

// function App() {
//   const [inputValue, setInputValue] = useState('');

//   // 실제로 필요한 handler는 2개: onChange로 입력 내용 바뀔 때마다 업데이트 onClick은 버튼 입력할 때 이벤트 핸들링
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   const handleButtonClick = () => {
//     alert(inputValue);
//   }

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>Display Alert</button>
//     </div>
//   );
// }

// Event 실습 2 꼭 해보기

// Styled Components - Button

import styled from "styled-components";

function App() {
  return (
    <div>
      <Button>Click Me!</Button>
    </div>
  );
}

const Button = styled.button`
  background-color: #0077cc;
  color: #ffffff;
  font-size: 1em;
  margin 1em;
  padding: 0,25em 1em;
  border: 2px solid #0077cc;
  border-radius: 3px;
`;

// Button component 수정해서 다시 쓰기: styled(Button)

export default App;