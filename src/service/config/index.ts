// export const BASE_URL = process.env.BASE_URL || "http://codercba.com:9002";
export const TIME_OUT = Number(process.env.TIME_OUT) || 10000;
export const BASE_URL = process.env.REACT_APP_ISMOCK === "true" ? process.env.REACT_APP_BASE_MOCKURL : process.env.REACT_APP_BASE_URL;
/* // 方法二根据环境导出
let BASE_URL = "";
// process.env.NODE_ENV是webpack提供的
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://codercba.dev:9002";
} else {
  BASE_URL = "http://codercba.prod:9002";
}
 */
// 方法三配置.env文件
// console.log(process.env);


/**
 * 文档地址
 * https://neteasecloudmusicapi.js.org/#/
 */
