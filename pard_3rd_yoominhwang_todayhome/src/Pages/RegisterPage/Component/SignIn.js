import styled from "styled-components";

function SignIn() {
    return (
        <div>
            <Button>회원가입하기</Button>
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
`;

export default SignIn;