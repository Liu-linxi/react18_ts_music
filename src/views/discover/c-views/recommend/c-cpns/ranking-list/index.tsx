import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankingWrapper } from "./style";
import AreaHeader from "@/components/area-header";
import { useAppSelector, useShallowEqual } from "@/store";
import TopRanking from "@/components/top-ranking";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const RankingList: FC<IProps> = () => {
  const { topUpList, topNewList, topOriginList } = useAppSelector(
    (state) => ({
      topUpList: state.recommend.topUpList,
      topNewList: state.recommend.topNewList,
      topOriginList: state.recommend.topOriginList,
    }),
    useShallowEqual,
  );
  return (
    <RankingWrapper>
      <AreaHeader title='榜单' moreLink='/discover/toplist' />
      <div className='tops'>
        <TopRanking info={topNewList} />
        <TopRanking info={topOriginList} />
        <TopRanking info={topUpList} />
      </div>
    </RankingWrapper>
  );
};

export default memo(RankingList);
