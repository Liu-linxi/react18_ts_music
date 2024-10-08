import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Discover: FC<IProps> = () => {
  return <div>Discover</div>;
};

export default memo(Discover);
