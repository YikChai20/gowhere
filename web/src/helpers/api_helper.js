import axios from "axios";

//apply base url for axios
const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, input) {
  return await axiosApi
    .get(url, 
      {...input,}
    )
    .then((response) => response.data);
}

export async function post(url, input) {  
  return await axiosApi
    .post(
      url, 
      new URLSearchParams(input)
    )
    .then((response) => response.data);
}