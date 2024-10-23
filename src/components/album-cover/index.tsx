import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { AlbumWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 定义 AlbumInfo 接口
interface Artist {
  name: string;
}

interface AlbumInfo {
  picUrl: string;
  name: string;
  artist: Artist;
}

interface IProps {
  info: AlbumInfo; // 必需的 info 属性
  size?: string; // 可选属性
  width?: string; // 可选属性
  bgp?: string; // 可选属性
  children?: ReactNode; // 可选的 children 属性
}
// 或者React.FC
const AlbumCover: FC<IProps> = ({ info, size = "100px", width = "118px", bgp = "-570px" }) => {
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image'>
        <img src={getSizeImage(info.picUrl, 150)} alt='' />
        <a href='/abc' className='cover sprite_covor'>
          {info.name}
        </a>
        <i className='sprite_icon play'></i>
      </div>
      <div className='album-info'>
        <div className='name'>{info.name}</div>
        <div className='artist'>{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
};

export default memo(AlbumCover);
