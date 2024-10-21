import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const AppHeader: FC<IProps> = () => {
  return (
    <div>
      <div className='nav'>
        <Link to='/discover'>发现音乐</Link>
        <Link to='/mine'>我的音乐</Link>
        <Link to='/focus'>关注</Link>
        <Link to='/download'>下载客户端</Link>
        <Link to='/template'>模板使用</Link>
      </div>
    </div>
  )
};

export default memo(AppHeader);
