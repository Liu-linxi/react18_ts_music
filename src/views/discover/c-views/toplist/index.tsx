import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Toplist: FC<IProps> = () => {
  return <div>Toplist</div>;
};

export default memo(Toplist);
