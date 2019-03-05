import axios from "axios";

//set port???

const baseURL = "http://127.0.0.1:5000/";

// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   baseURL = 'http://127.0.0.1/'
// } else {
//   baseURL = 'https://fierce-plains-99267.herokuapp.com'
// }

export const HTTP = axios.create({
  baseURL
});
