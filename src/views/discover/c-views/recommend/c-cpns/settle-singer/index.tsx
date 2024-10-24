import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { SettleSongerWrapper } from "./style";
import { useAppSelector } from "@/store";
import { getSizeImage } from "@/utils/format-utils";
import AreaHeaderSmall from "@/components/area-header-small";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const SettleSinger: FC<IProps> = () => {
  const { settleSings } = useAppSelector((state) => ({
    settleSings: state.recommend.settleSings,
  }));

  return (
    <SettleSongerWrapper>
      <AreaHeaderSmall title='入驻歌手' more='查看全部>' />
      <div className='singer-list'>
        {settleSings.map((item) => {
          return (
            <a href='/singer' key={item.id} className='item'>
              <img src={getSizeImage(item.img1v1Url, 62)} alt='' />
              <div className='info'>
                <div className='title'>{item.alias.join("") || item.name}</div>
                <div className='name'>{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className='apply-for'>
        <a href='https://music.163.com/st/musician' target='_blank' rel='noopener noreferrer'>
          申请成为网易音乐人
        </a>
      </div>
    </SettleSongerWrapper>
  );
};

export default memo(SettleSinger);
