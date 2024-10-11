import React, { Suspense } from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "./router";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "./store"; //类型配置方法三

// import store from "./store";
// 类型配置方法一
// type GetStateFnType = typeof store.getState;
// type IRootState = ReturnType<GetStateFnType>;

// import { IRootState } from "./store"; //类型配置方法二

function App() {
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
    shallowEqual,
  );
  return (
    <div className='App'>
      <div className='nav'>
        <Link to='/discover'>发现音乐</Link>
        <Link to='/mine'>我的音乐</Link>
        <Link to='/focus'>关注</Link>
        <Link to='/download'>下载客户端</Link>
      </div>
      <h1>
        {count}
        {name}
      </h1>
      {/* 使用懒加载要搭配Suspense使用避免因为还未加载页面产生报错 fallback可以自定义文本或者定义组件展示于此*/}
      <Suspense fallback='loading...'>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
