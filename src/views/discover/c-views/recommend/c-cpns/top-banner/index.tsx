import { useAppSelector, useShallowEqual } from "@/store";
import React, { memo, useCallback, useRef, useState } from "react";
import type { ElementRef, FC, ReactNode } from "react";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./styled";
import { Carousel } from "antd";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    useShallowEqual,
  );

  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  const bannerChange = useCallback((current: number, next: number) => {
    // console.log(current, next);
    setTimeout(() => {
      setCurrentIndex(next);
    }, 0);
  }, []);

  const bgImage = banners[currentIndex] && banners[currentIndex].imageUrl + "?imageView&blur=40x20";

  function handlePreNextClick(type: string) {
    if (type === "prev") {
      bannerRef.current?.prev();
    } else {
      bannerRef.current?.next();
    }
  }

  return (
    <BannerWrapper bgimage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel autoplay effect='fade' beforeChange={bannerChange} ref={bannerRef}>
            {banners.map((item) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl className='control'>
          <button className='btn left' onClick={() => handlePreNextClick("prev")}></button>
          <button className='btn right' onClick={() => handlePreNextClick("next")}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
