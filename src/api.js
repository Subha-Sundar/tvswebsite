
import axios  from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://locations-1lyx.onrender.com/",
  // timeout: 3000,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// Add a request interceptor to include the token in the headers
// axiosInstance.interceptors.request.use(
//   (config)  => {
//     const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage
//     console.log(token);
//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );


export default axiosInstance;