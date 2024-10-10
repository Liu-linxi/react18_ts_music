import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode // 或者React.ReactNode
  name: string;
  age: number;
  height?: string;
}
// 或者React.FC
const Download: FC<IProps> = (props) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      <div>height:{props.height}</div>
      <div>children:{props.children}</div>
    </div>
  );
};

export default memo(Download);
