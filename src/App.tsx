import React, { Suspense } from "react";
import { Link, useRoutes } from "react-router-dom";
import routes from "./router";

function App() {

  return (
    <div className='App'>
      <div className='nav'>
        <Link to='/discover'>发现音乐</Link>
        <Link to='/mine'>我的音乐</Link>
        <Link to='/focus'>关注</Link>
        <Link to='/download'>下载客户端</Link>
        <Link to='/template'>模板使用</Link>
      </div>


      {/* 使用懒加载要搭配Suspense使用避免因为还未加载页面产生报错 fallback可以自定义文本或者定义组件展示于此*/}
      <Suspense fallback='loading...'>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
