import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./styled";
import type { HeaderLinksType } from "@/type/local-data";
import { headerLinks } from "@/service/local-data";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const AppHeader: FC<IProps> = () => {
  const showItem = (item: HeaderLinksType) => {
    if (item.type === "path") {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          {item.title}
        </a>
      );
    }
  };
  return (
    <HeaderWrapper>
      <div className='content'>
        <HeaderLeft>
          <a className='logo sprite_01' href='#/'>
            网易云音乐
          </a>
          <div className='select-list'>
            {headerLinks.map((item) => {
              return (
                <div className='select-item' key={item.title}>
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
          <a className='center' href='https://music.163.com/#/login?targetUrl=%2Fcreatorcenter' target='_blank' rel='noopener noreferrer'>
            创作者中心
          </a>
          <a href='https://music.163.com/#/login?targetUrl=%2Fcreatorcenter' target='_blank' rel='noopener noreferrer'>
            登录
          </a>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
