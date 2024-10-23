import lxRequest from "@/service";

export function getBanners() {
  return lxRequest.get({
    url: "/banner",
  });
}

export function getHotRecommend(limit=30) {
  return lxRequest.get({
    url: "/personalized",
    params:{
      limit
    }
  })
}

export function getNewAlbum(limit:number,offset:number) {
  return lxRequest.get({
    url: "/album/new",
    params:{
      limit,
      offset
    }
  })
}

export function getTopList(id:number) {
  return lxRequest.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}


export function getArtistList(limit:number, cat:number) {
  return lxRequest.get({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}
