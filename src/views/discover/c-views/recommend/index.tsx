import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Recommend: FC<IProps> = () => {
  return <div>Recommend</div>;
};

export default memo(Recommend);
