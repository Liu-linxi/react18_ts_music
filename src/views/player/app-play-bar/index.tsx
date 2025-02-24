import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { Control, Operator, PlaybarWrapper, PlayInfo } from "./style";
import { NavLink } from "react-router-dom";
import { Slider } from "antd";
import { formatMinuteSecond, getPlayUrl, getSizeImage, getSongUrlFun } from "@/utils/format-utils";
import { useAppSelector, useShallowEqual } from "@/store";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    useShallowEqual,
  );

  // 从redux中获取数据
  useEffect(() => {
    const fetchSongUrl = async () => {
      try {
        /**
         * 不能试用故此用请求的方式
         * const audioUrl = getPlayUrl(currentSong.id);
         */
        const audioUrl = getPlayUrl(currentSong.id);
        // const audioUrl = "https://m10.music.126.net/20250224112749/cd3373a9fca0ca6c67fd83c37dbe1328/ymusic/c48c/fb99/1950/a0634034446f904929e37dc2686ba91b.mp3?vuutv=aj0HPVZwlLtewscOXAFwGMWireXYi2IND3un1tzBqupBYCp6C3/FvQHhdWz75uwenCkM95EBnOroQysUfMRikVOY63Y1N9V11Uivx1Ic5z0ne+iGTJmjOQ84HVS3Zr62VeX6CuwU94Gfb2AUcmT/qtIeflrdHLs4sPrAhNFe8JTni59SGz9uxY3efmSHGH2FElLJou/6cKOE4zBZTf0LrqICk2N5HjUBNP445sC45oVpJ2f6rfZ6cQ5BZ8XI1jiwAIUihzAPFP2H4P91DvaMzRwne+E5CIs/bkDB+z93hQzLJD3Z7TdE581h3tC3veJT7O/83VIk03TMWMZFzpU83HNBFXC6LtlXytCxd+/ByXQdOOJaJ3yWatCI9MhC64NZ"; // await getSongUrlFun(currentSong.id);
        if (audioUrl) {
          // 确保 audioUrl 是字符串
          audioRef.current!.src = audioUrl; // 设置音频源
          // 可以加载后就播放
          // await audioRef.current?.play(); // 尝试播放
          // setIsPlaying(true); // 更新播放状态
        } else {
          console.error("没有找到歌曲 URL");
        }
      } catch (err) {
        console.error("播放失败:", err);
        setIsPlaying(false); // 处理错误，更新播放状态
      }
      console.log(currentSong.dt);
      setDuration(currentSong.dt);
    };

    fetchSongUrl();
  }, [currentSong]);
  /**
   * 部分歌曲无法获取
   * useEffect(() => {
    audioRef.current!.src = getPlayUrl(currentSong.id);
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
    setDuration(currentSong.dt);
  }, [currentSong]);
   */
  useEffect(() => {
    audioRef.current!.src = getPlayUrl(currentSong.id);
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
    setDuration(currentSong.dt);
  }, [currentSong]);
  /** 音乐播放的进度处理 */
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime;
    if (!isSliding) {
      // console.log("音乐播放的进度处理", audioRef.current!.currentTime);
      const progress = ((currentTime * 1000) / duration) * 100;
      setProgress(progress);
      setCurrentTime(currentTime);
    }
  }
  function handlePlayBtnClick() {
    setIsPlaying((prevIsPlaying) => {
      const newIsPlaying = !prevIsPlaying; // 获取新状态
      if (newIsPlaying) {
        audioRef.current?.play().catch(() => {
          setIsPlaying(false); // 播放失败时更新状态
        });
      } else {
        audioRef.current?.pause(); // 暂停
      }
      return newIsPlaying; // 返回新状态
    });
  }
  /** slider方法 与 mouseup 和 keyup 触发时机一致，把当前值作为参数传入 */
  function handleChangeComplete(value: number) {
    console.log("🚀 ~ handleChangeComplete ~ value:", value);
    const time = ((value / 100.0) * duration) / 1000;
    audioRef.current!.currentTime = time;
    setCurrentTime(time);
    setIsSliding(false);
  }
  /** slider方法 切换 */
  function handleSliderChange(value: number) {
    setProgress(value);
    const time = ((value / 100.0) * duration) / 1000;
    audioRef.current!.currentTime = time;
    // setCurrentTime(time);
    // setIsSliding(false);
  }
  return (
    <PlaybarWrapper className='sprite_playbar'>
      <div className='content wrap-v2'>
        <Control isplaying={isPlaying}>
          <button className='sprite_playbar btn prev'></button>
          <button className='sprite_playbar btn play' onClick={() => handlePlayBtnClick()}></button>
          <button className='sprite_playbar btn next'></button>
        </Control>
        <PlayInfo>
          <div className='image'>
            <NavLink to='/discover/player'>
              {/* <img src='https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34' alt='' /> */}
              <img src={getSizeImage(currentSong?.al?.picUrl, 34)} alt='' />
            </NavLink>
          </div>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong.name}</span>
              <span className='singer-name'>{currentSong.ar[0].name}</span>
            </div>
            <div className='progress'>
              <Slider value={progress} step={0.5} tooltip={{ formatter: null }} onChange={handleSliderChange} onChangeComplete ={handleChangeComplete} />
              <div className='time'>
                <span className='now-time'>{formatMinuteSecond(currentTime * 1000)}</span>
                <span className='divider'>/</span>
                <span className='total-time'>{formatMinuteSecond(duration)}</span>
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
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlaybarWrapper>
  );
};

export default memo(AppPlayerBar);
