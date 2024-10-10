import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Download: FC<IProps> = () => {
  return <div>Download</div>;
};

export default memo(Download);
