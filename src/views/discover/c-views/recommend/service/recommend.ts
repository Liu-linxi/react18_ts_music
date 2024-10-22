import lxRequest from "@/service";

export function getBanners() {
  return lxRequest.get({
    url: "/banner",
  });
}

export function getHotRecommend() {
  return lxRequest.get({
    url: "/personalized"
  })
}
