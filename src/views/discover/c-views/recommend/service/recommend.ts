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
