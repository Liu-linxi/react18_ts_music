import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./styled";
import type { HeaderLinksType } from "@/type/local-data";
import { headerLinks } from "@/service/local-data";
interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const AppHeader: FC<IProps> = () => {
  const showItem = (item:HeaderLinksType) => {
    if (item.type === "path") {
      return (
        <Link to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </Link>
      )
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }
  return (
    <div>
      <HeaderWrapper>
        <div className='content'>
          <HeaderLeft>
            <a className='logo sprite_01' href='#/'>
              网易云音乐
            </a>
            <div className="select-list">
            {
              headerLinks.map((item) => {
                return (
                  <div className="select-item" key={item.title}>
                    {showItem(item)}
                  </div>
                )
              })
            }
          </div>
          </HeaderLeft>
          <HeaderRight></HeaderRight>
        </div>
      </HeaderWrapper>
    </div>
  );
};

export default memo(AppHeader);
