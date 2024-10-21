import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./c-cpns/nav-bar";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Discover: FC<IProps> = () => {
  return (
    <div>
      {/**
       * 点击链接界面会闪烁一下是因为当前路由组件是二级路由同样会使用一级路由所使用的Suspense
       * 因此二级路由也使用Suspense内容
       */}
      <NavBar />
      <Suspense fallback='二级页面加载中...'>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
};

export default memo(Discover);
