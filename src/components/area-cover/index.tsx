import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { AreaCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/format-utils";

// 定义 info 的具体类型
interface IInfo {
  picUrl?: string;
  coverImgUrl?: string;
  playCount: number;
  name: string;
  copywriter?: string;
  creator?: { nickname: string };
}

interface IProps {
  children?: ReactNode; // 可选的 children 属性
  right: number; // 必须的 right 属性
  info: IInfo; // 使用具体类型
}

const AreaCover: FC<IProps> = ({ info, right }) => {
  return (
    <AreaCoverWrapper right={right}>
      <div className='cover-top'>
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt='' />
        <div className='cover sprite_covor'>
          <div className='info sprite_covor'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(info.playCount)}
            </span>
            <i className='sprite_icon play'></i>
          </div>
        </div>
      </div>
      <div className='cover-bottom'>{info.name}</div>
      {/* 可选的来源信息 */}
      {/* <div className="cover-source">
        by {info.copywriter || info.creator?.nickname}
      </div> */}
    </AreaCoverWrapper>
  );
};

export default memo(AreaCover);
