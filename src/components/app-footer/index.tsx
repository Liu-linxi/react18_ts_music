import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const AppFooter: FC<IProps> = () => {
  return (
    <div>
      AppFooter
    </div>
  )
};

export default memo(AppFooter);
