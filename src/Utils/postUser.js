import axios from "axios"

export const postUser = (userInfo) => {
    const url ='http://localhost:3001/users';
    axios.post(url, {userInfo})
  .then(response => {
    return response.data.message;
  })
  .catch(error => {
    console.log(error);
  })
}