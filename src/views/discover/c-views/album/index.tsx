
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Album: FC<IProps> = () => {
  return <div>Album</div>;
};

export default memo(Album);
