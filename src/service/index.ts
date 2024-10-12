import LXRequest from "./request";
import { BASE_URL, TIME_OUT } from "./config";

const lxRequest = new LXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log("请求成功拦截:", config);
      return config;
    },
    requestFailureFn: (err) => {
      console.error("请求失败拦截:", err);
      return err;
    },
    responseSuccessFn: (res) => {
      console.log("响应成功拦截:", res);
      return res;
    },
    responseFailureFn: (err) => {
      console.error("响应失败拦截:", err);
      return err;
    },
  },
});

export default lxRequest;
