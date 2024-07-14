import axios from "axios";

const api = axios.create({
  baseURL: "http://95.217.228.239:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default api;
