import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Artist: FC<IProps> = () => {
  return <div>Artist</div>;
};

export default memo(Artist);
