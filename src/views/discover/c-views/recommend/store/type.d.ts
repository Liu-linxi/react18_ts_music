export interface IBannersDataType {
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

export interface IHotRecommendsDataType {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}
