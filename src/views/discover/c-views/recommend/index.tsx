import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { fetchBannerDataAction } from "./store/recommend";
import { AppDispatchType } from "@/store";
import { RecommendWraper, Content, RecommendLeft, RecommendRight } from "./style";

import TopBanner from "./c-cpns/top-banner";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}

// 或者React.FC
const Recommend: FC<IProps> = () => {
  const dispatch: AppDispatchType = useDispatch();

  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, [dispatch]);

  return (
    <RecommendWraper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft></RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWraper>
  );
};

export default memo(Recommend);
