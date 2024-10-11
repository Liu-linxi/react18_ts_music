import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        {/**
         * 点击链接界面会闪烁一下是因为当前路由组件是二级路由同样会使用一级路由所使用的Suspense
         * 因此二级路由也使用Suspense内容
         */}
        <Link to='/discover/recommend'>推荐</Link>
        <Link to='/discover/toplist'>排行榜</Link>
        <Link to='/discover/playlist'>歌单</Link>
        <Link to='/discover/djradio'>主播电台</Link>
        <Link to='/discover/artist'>歌手</Link>
        <Link to='/discover/album'>新碟上架</Link>
      </div>
      <Suspense fallback="二级页面加载中...">
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
};

export default memo(Discover);
