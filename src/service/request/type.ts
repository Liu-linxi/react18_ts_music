import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface LXInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}

export interface LXRequestconfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LXInterceptors<T>;
}

/* import { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

export interface LXInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}

export interface LXRequestconfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LXInterceptors<T>;
}
 */
