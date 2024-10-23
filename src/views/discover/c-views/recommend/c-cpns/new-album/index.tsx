import React, { memo, useRef } from "react";
import type { ElementRef, FC, ReactNode } from "react";
import { AlbumWrapper } from "./style";
import AreaHeader from "@/components/area-header";
import { useAppSelector, useShallowEqual } from "@/store";
import { Carousel } from "antd";
import AlbumCover from "@/components/album-cover";

interface IProps {
  children?: ReactNode;
}

const NewAlbum: FC<IProps> = () => {
  const { newAlbum } = useAppSelector(
    (state) => ({
      newAlbum: state.recommend.newAlbum,
    }),
    useShallowEqual,
  );

  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);

  return (
    <AlbumWrapper>
      <AreaHeader title='新碟上架' moreLink='/discover/album' />
      <div className='content'>
        <div className='arrow arrow-left sprite_02' onClick={() => carouselRef.current?.prev()}></div>
        <div className='album'>
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map((pageIndex) => (
              <div key={pageIndex} className='page'>
                {newAlbum.slice(pageIndex * 5, (pageIndex + 1) * 5).map((item) => (
                  <AlbumCover key={item.id} info={item} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
        <div className='arrow arrow-right sprite_02' onClick={() => carouselRef.current?.next()}></div>
      </div>
    </AlbumWrapper>
  );
};

export default memo(NewAlbum);
