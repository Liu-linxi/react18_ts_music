import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { HotRadioWrapper } from "./style";
import AreaHeaderSmall from "@/components/area-header-small";
import { hotRadios } from "@/service/local-data";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const HotRadio: FC<IProps> = () => {
  return (
    <HotRadioWrapper>
      <AreaHeaderSmall title='热门主播' />
      <div className='radio-list'>
        {hotRadios.map((item) => {
          return (
            <div className='item' key={item.picUrl}>
              <a href='/abc' className='image'>
                <img src={item.picUrl} alt='' />
              </a>
              <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='position text-nowrap'>{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
};

export default memo(HotRadio);
