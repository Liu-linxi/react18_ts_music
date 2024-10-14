/// <reference types="react-scripts" />

// 同名的interface再次定义会对原来的进行一次扩展
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string;
  }
}
 