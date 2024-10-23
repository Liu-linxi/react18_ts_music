import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankingWrapper } from "./style";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const RankingList: FC<IProps> = () => {
  return (
    <RankingWrapper>
      RankingList
    </RankingWrapper>
  )
};

export default memo(RankingList);
