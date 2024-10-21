export interface HeaderLinksType {
  title: string;
  type: string;
  link: string;
}

export interface FooterLinksType {
  title: string;
  link: string;
}

export interface FooterImagesType {
  link: string;
}

export interface DicoverMenuType {
  title: string;
  link: string;
}

export interface HotRadiosType {
  picUrl: string;
  name: string;
  position: string;
  url: string;
}

export interface ArtistCategoriesType {
  title: string;
  area: number;
  artists: Artist[];
}

export interface Artist {
  name: string;
  type: number;
  url: string;
  id?: number;
  dataPath?: string;
}
