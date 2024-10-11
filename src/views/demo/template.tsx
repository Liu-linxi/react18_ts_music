import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import { useAppSelector, useAppDispatch, useShallowEqual } from "@/store"; //类型配置方法三
import { changeName } from "@/store/moudules/counter";

// import store from "./store";
// 类型配置方法一
// type GetStateFnType = typeof store.getState;
// type IRootState = ReturnType<GetStateFnType>;

// import { IRootState } from "./store"; //类型配置方法二

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Template: FC<IProps> = () => {
  // const { count, name } = useSelector(
  //   (state: IRootState) => ({
  //     count: state.counter.count,
  //     name: state.counter.name,
  //   }),
  //   shallowEqual,
  // );
  const { count, name } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      name: state.counter.name,
    }),
    useShallowEqual,
  );
  /** 事件处理函数 */
  const dispatch = useAppDispatch();
  function handleChangeName() {
    dispatch(changeName("修改后林夕"));
  }
  return (
    <div>
      <div>Template</div>
      <h1>
        {name} {count}
        <button onClick={handleChangeName}>修改name</button>
      </h1>
    </div>
  );
};

export default memo(Template);
