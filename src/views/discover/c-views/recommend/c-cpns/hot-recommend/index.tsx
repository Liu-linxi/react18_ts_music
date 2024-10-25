import React, { memo, useCallback } from "react";
import type { FC, ReactNode } from "react";
import { HotRecommendWrapper } from "./style";
import AreaHeader from "@/components/area-header";
import { useAppSelector } from "@/store";
import AreaCover from "@/components/area-cover";
import { useNavigate } from "react-router-dom";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector((state) => ({
    hotRecommends: state.recommend.hotRecommends,
  }));
  const navigate = useNavigate();

  const keywordClick = useCallback(
    (keyword: string) => {
      navigate(`/discover/playlist?cat=${keyword}`);
      // navigate("/discover/playlist", { state: { cat: keyword } });
    },
    [navigate],
  );
  return (
    <HotRecommendWrapper>
      <AreaHeader title='热门推荐' keywords={["华语", "流行", "摇滚", "民谣", "电子"]} moreLink='/discover/playlist' keywordClick={keywordClick} />
      <div className='recommend-list'>
        {hotRecommends.map((item) => {
          return <AreaCover info={item} key={item.id} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);
