import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { AreaHeaderSmallWrapper } from "./style";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
  title?: string | number;
  more?: string;
}
// 或者React.FC
const AreaHeaderSmall: FC<IProps> = ({ title, more }) => {
  return (
    <AreaHeaderSmallWrapper>
      <h3>{title}</h3>
      <a href='/abc'>{more}</a>
    </AreaHeaderSmallWrapper>
  );
};

export default memo(AreaHeaderSmall);
