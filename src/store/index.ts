import { configureStore } from "@reduxjs/toolkit";
import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import counterReducer from "./moudules/counter";
import recommendReducer from "@/views/discover/c-views/recommend/store/recommend";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
  },
});

// 类型配置方法二
type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
export type AppDispatchType = typeof store.dispatch;//获取dispatch类型

// https://cn.redux.js.org/tutorials/typescript-quick-start#%E5%AE%9A%E4%B9%89%E6%A0%B9-state-%E5%92%8C-dispatch-%E7%B1%BB%E5%9E%8B
// useAppSelector的hook 可以抽取出去作为单独的文件
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useShallowEqual = shallowEqual;

export default store;
