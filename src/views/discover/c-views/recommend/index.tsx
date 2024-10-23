import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { fetchBannerDataAction, fetchHotRecommnedAction, fetchNewAlbumAction } from "./store/recommend";
import { AppDispatchType } from "@/store";
import { RecommendWraper, Content, RecommendLeft, RecommendRight } from "./style";

import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}

// 或者React.FC
const Recommend: FC<IProps> = () => {
  const dispatch: AppDispatchType = useDispatch();

  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchHotRecommnedAction());
    dispatch(fetchNewAlbumAction());
  }, [dispatch]);

  return (
    <RecommendWraper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  );
};

export default memo(Recommend);
