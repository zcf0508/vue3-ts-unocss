import axios, { AxiosStatic, AxiosRequestConfig, AxiosResponse } from "axios";
import { setupCache, type AxiosCacheInstance } from "axios-cache-interceptor";

const service = axios.create({
  baseURL: "",
});

setupCache(service, {
  ttl: 1000, // 默认缓存时间 1s
  interpretHeader: false, // 默认不解析 header
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
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
  (response: AxiosResponse<{ code: number; msg: string; data: any }, any>) => {
    const status = response.status;
    const data = response.data;
    let msg = "";
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      response.data.msg = msg;
      return Promise.reject(data);
    }
    if (data.code > 0) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      return Promise.reject(data);
    } else {
      return data;
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service as AxiosCacheInstance & AxiosStatic;
