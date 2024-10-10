import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Mine: FC<IProps> = () => {
  return <div>Mine</div>;
};

export default memo(Mine);
