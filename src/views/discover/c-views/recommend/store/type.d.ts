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

export interface INewAlbumDataType {
  songs: any[]
  paid: boolean
  onSale: boolean
  mark: number
  awardTags: any
  picId: number
  artist: Artist
  copyrightId: number
  artists: Artist2[]
  publishTime: number
  company: string
  briefDesc: string
  picUrl: string
  commentThreadId: string
  blurPicUrl: string
  companyId: number
  pic: number
  status: number
  subType: string
  alias: any[]
  description: string
  tags: string
  name: string
  id: number
  type: string
  size: number
  picId_str: string
}

 interface Artist {
  img1v1Id: number
  topicPerson: number
  picId: number
  musicSize: number
  albumSize: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  followed: boolean
  trans: string
  alias: any[]
  name: string
  id: number
  picId_str: string
  img1v1Id_str: string
}

export interface Artist2 {
  img1v1Id: number
  topicPerson: number
  picId: number
  musicSize: number
  albumSize: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  followed: boolean
  trans: string
  alias: any[]
  name: string
  id: number
  img1v1Id_str: string
}


