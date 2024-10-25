import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Control, Operator, PlaybarWrapper, PlayInfo } from "./style";
import { NavLink } from "react-router-dom";
import { Slider } from "antd";
import { formatMinuteSecond } from "@/utils/format-utils";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const AppPlayerBar: FC<IProps> = () => {
  return (
    <PlaybarWrapper className='sprite_playbar'>
      <div className='content wrap-v2'>
        <Control>
          <button className='sprite_playbar btn prev'></button>
          <button className='sprite_playbar btn play'></button>
          <button className='sprite_playbar btn next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to='/discover/player'>
              <img src='https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34' alt='' />
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>测试名</span>
              <span className='singer-name'>小标题</span>
            </div>
            <div className='progress'>
              <Slider value={23}/>
              <div className='time'>
                <span className='now-time'>{formatMinuteSecond(123 * 1000)}</span>
                <span className='divider'>/</span>
                <span className='total-time'>{formatMinuteSecond(12312312)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='btn pip'></button>
            <button className='sprite_playbar btn favor'></button>
            <button className='sprite_playbar btn share'></button>
          </div>
          <div className='right sprite_playbar'>
            <button className='sprite_playbar btn volume'></button>
            <button className='sprite_playbar btn loop'></button>
            <button className='sprite_playbar btn playlist'>123</button>
          </div>
        </Operator>
      </div>
    </PlaybarWrapper>
  );
};

export default memo(AppPlayerBar);
