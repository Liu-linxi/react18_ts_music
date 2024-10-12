import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import type { LXRequestconfig } from "./type";

class LXRequest {
  instance: AxiosInstance;

  constructor(config: LXRequestconfig) {
    this.instance = axios.create(config);

    // 全局的拦截器
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => err,
    );

    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => err,
    );

    // 实例的拦截器
    this.instance.interceptors.request.use(
      // config.interceptors?.requestSuccessFn,
      config.interceptors?.requestSuccessFn as (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig,
      config.interceptors?.requestFailureFn,
    );
    this.instance.interceptors.response.use(config.interceptors?.responseSuccessFn, config.interceptors?.responseFailureFn);
  }

  request<T = any>(config: LXRequestconfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          if (config.interceptors?.responseFailureFn) {
            err = config.interceptors.responseFailureFn(err);
          }
          reject(err);
        });
    });
  }

  get<T = any>(config: LXRequestconfig<T>) {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: LXRequestconfig<T>) {
    return this.request<T>({ ...config, method: "POST" });
  }

  delete<T = any>(config: LXRequestconfig<T>) {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: LXRequestconfig<T>) {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default LXRequest;
