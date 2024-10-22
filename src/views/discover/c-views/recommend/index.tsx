import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { fetchBannerDataAction } from "./store/recommend";
import { AppDispatchType } from "@/store";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}

// 或者React.FC
const Recommend: FC<IProps> = () => {
  const dispatch: AppDispatchType = useDispatch();

  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);
  return <div>Recommend</div>;
};

export default memo(Recommend);
