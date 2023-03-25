import axios, { AxiosResponse } from "axios";

const service = axios.create({
  baseURL: "",
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers["Authorization"] = "JWT "; //获取token，并将其添加至请求头中
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<{code: number,data: any}, any>) => {
    const status = response.status;
    const res = response.data;

    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      return Promise.reject(res);
    }
    if (res.code > 0) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      return Promise.reject(res);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return res.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
