import axios from "axios";

const server = 'http://localhost:3001/users'

export const getUserData = async (id) => {
  // 가독성 높은 try-catch 문
  try{
    const response = await axios
    .get(`${server}/${id}`);
    console.log("API.js", response.data);
    return response.data;
  } catch(err){
    // 위에서 나오는 에러들 여기서 처리
    console.error(err);
  }
};

export const patchUserData = async (id, data) => {
  try{
    const response = await axios.patch(`${server}/${id}`, data);
    console.log(response);
    return response;
  } catch(err){
    console.error(err);
  }
};
