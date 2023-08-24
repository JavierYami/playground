import axios from "axios"
import { toast } from 'react-hot-toast';


export const postUser = (userInfo) => {
    const url ='http://localhost:3001/users';
    axios.post(url, {userInfo})
  .then(response => {
    toast.success(response.data.message);
  })
  .catch(error => {
    toast.error(error.message);
  })
}