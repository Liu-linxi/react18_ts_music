import lxRequest from "@/service";

export function getBanners() {
  return lxRequest.get({
    url: "/banner",
  });
}
