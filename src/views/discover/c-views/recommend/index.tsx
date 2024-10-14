import lxRequest from "@/service";
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode; // 或者React.ReactNode
}

export interface IBannerData {
  imageUrl: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  exclusive: boolean;
  encodeId: string;
  scm: string;
  bannerBizType: string;
}

// 或者React.FC
const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([]);

  useEffect(() => {
    lxRequest
      .get({
        url: "/banner",
      })
      .then((res) => {
        setBanners(res.banners);
      });
  }, []);
  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>;
      })}
    </div>
  );
};

export default memo(Recommend);
