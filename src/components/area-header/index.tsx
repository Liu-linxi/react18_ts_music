import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { HeaderWrapper } from "./style";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

interface IProps {
  title: string; // title 是必需的
  keywords?: string[]; // keywords 是可选的
  moreLink: string; // moreLink 是必需的
  keywordClick: (keyword: string) => void; // keywordClick 是一个函数
  children?: ReactNode; // 可选的 children 属性
}

const AreaHeader: FC<IProps> = ({ title, keywords = [],  moreLink, keywordClick}) => {

  return (
    <HeaderWrapper className="sprite_02">
      <div className='left'>
        <h3 className='title'>{title}</h3>
        <div className='keyword'>
          {keywords.map((item) => (
            <div className='item' key={item}>
              <span className='link' onClick={() => keywordClick(item)}>
                {item}
              </span>
              <span className='divider'>|</span>
            </div>
          ))}
        </div>
      </div>
      <div className='right'>
        <Link to={moreLink}>更多</Link>
        <i className='icon sprite_02'></i>
      </div>
    </HeaderWrapper>
  );
};

AreaHeader.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array,
  moreLink: PropTypes.string.isRequired,
  keywordClick: PropTypes.func.isRequired,
};

export default memo(AreaHeader);
