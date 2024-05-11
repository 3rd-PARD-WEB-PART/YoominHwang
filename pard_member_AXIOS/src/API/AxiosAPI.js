import axios from "axios";

const server = process.env.REACT_APP_API_URL;

// 여기서 중요한 점은 서버의 주소를 어떻게 완성하느냐입니다.
// 스웨거를 잘 확인하고 서버에게 어떻게 주소를 보낼 수 있을 지 생각해보세요.
// 템플릿 리터럴 (``) 을 이용해서 표현식을 잘 다룰 수 있도록 해봅시다.

export const getMembersAPI = async (part) => {
  // your code here
  try {
    const response = await axios
    .get(part == "all" ? `${server}` : `${server}?part=${part}`);

    // .get(part === "ALL" ? `${server}` : `${server}?part=${part}`);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};

export const getMemberAPI = async (id) => {
  // your code here
  try {
    const response = await axios
    .get(`${server}/${id}`);
    return response.data;
  } catch(err) {
    console.error(err);
  }
};

// 아래 코드는 잘 돌아가는 코드이니 참고해서 작성해보세요.
export const postMemberAPI = async (data) => {
  try {
    const response = await axios.post(`${server}`, data);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const putMemberAPI = async (data) => {
  try {
    // const response = await axios.patch(`${server}/${id}`, data);
    // console.log(response);
    // return response;
  } catch (err) {
    console.error(err);
  }
};

export const deleteMemberAPI = async (id) => {
  // your code here
  try {
    const response = await axios
    .delete(`${server}/${id}`);
    console.log(response);
    return response;
  } catch(err) {
    console.error(err);
  }
};
