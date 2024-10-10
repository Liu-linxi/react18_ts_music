import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Focus: FC<IProps> = () => {
  return <div>Focus</div>;
};

export default memo(Focus);
