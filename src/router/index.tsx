import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

// 路由懒加载组件分包
const Discover = React.lazy(() => import("@/views/discover")); //发现音乐
const Recommend = lazy(() => import("@/views/discover/c-views/recommend")); //推荐
const Toplist = lazy(() => import("@/views/discover/c-views/toplist")); //排行榜
const Playlist = lazy(() => import("@/views/discover/c-views/playlist")); //歌单
const Djradio = lazy(() => import("@/views/discover/c-views/djradio")); //主播电台
const Artist = lazy(() => import("@/views/discover/c-views/artist")); //歌手
const Album = lazy(() => import("@/views/discover/c-views/album")); //新碟上架

const Mine = lazy(() => import("@/views/mine")); //我的音乐
const Focus = lazy(() => import("@/views/focus")); //关注
const Download = lazy(() => import("@/views/download")); //下载客户端

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover/recommend" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/toplist",
        element: <Toplist />,
      },
      {
        path: "/discover/playlist",
        element: <Playlist />,
      },
      {
        path: "/discover/djradio",
        element: <Djradio />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
      },
      {
        path: "/discover/album",
        element: <Album />,
      },
    ],
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/download",
    element: <Download />,
  },
];

export default routes;
