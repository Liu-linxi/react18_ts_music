import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { HotRecommendWrapper } from "./style";
import AreaHeader from "@/components/area-header";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const HotRecommend: FC<IProps> = () => {
  function keywordClick() {
    console.log("🚀 ~ keywordClick ~ 被执行了:", ":");
  }
  return (
    <HotRecommendWrapper>
      <AreaHeader title='热门推荐' keywords={["华语", "流行", "摇滚", "民谣", "电子"]} moreLink='/discover/playlist' keywordClick={keywordClick} />
      HotRecommend
    </HotRecommendWrapper>
  );
};

export default memo(HotRecommend);
