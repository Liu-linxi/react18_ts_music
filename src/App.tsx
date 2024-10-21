import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

function App() {

  return (
    <div className='App'>
      <AppHeader/>
      {/* 使用懒加载要搭配Suspense使用避免因为还未加载页面产生报错 fallback可以自定义文本或者定义组件展示于此*/}
      <Suspense fallback='loading...'>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter/>
    </div>
  );
}

export default App;
