import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: `Bearer ${import.meta.env.VITE_API_KEYs}`,
  // },
});

api?.interceptors?.request?.use(
  (config) => {
    // handle before request is sent
    return config;
  },
  (error) => {
    // handle request error
    return Promise.reject(error);
  }
);


api?.interceptors?.response.use((response) => {
  // handle response data
  return response;
}, (error) => {
  // handle response un-authen error
  if (error.response.status === 401) {
    // navigate("/login");
  }
  return Promise.reject(error);
});

export default api;
