import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}
// 或者React.FC
const Playlist: FC<IProps> = () => {
  return <div>Playlist</div>;
};

export default memo(Playlist);
