import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Player: FC<IProps> = () => {
  return (
    <div>
      Player
    </div>
  )
};

export default memo(Player);
