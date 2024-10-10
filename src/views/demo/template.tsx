import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Template: FC<IProps> = () => {
  return <div>Template</div>;
};

export default memo(Template);
