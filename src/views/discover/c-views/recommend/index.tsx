import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { fetchBannerDataAction, fetchHotRecommnedAction, fetchNewAlbumAction, fetchSettleSingsAction, fetchTopListAction } from "./store/recommend";
import { AppDispatchType } from "@/store";
import { RecommendWraper, Content, RecommendLeft, RecommendRight } from "./style";

import TopBanner from "./c-cpns/top-banner";
import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RankingList from "./c-cpns/ranking-list";
import UserLogin from "./c-cpns/user-login";
import SettleSinger from "./c-cpns/settle-singer";

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
    dispatch(fetchTopListAction(19723756));
    dispatch(fetchTopListAction(3779629));
    dispatch(fetchTopListAction(2884035));
    dispatch(fetchSettleSingsAction());
  }, [dispatch]);

  return (
    <RecommendWraper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RankingList />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
        </RecommendRight>
      </Content>
    </RecommendWraper>
  );
};

export default memo(Recommend);
