import lxRequest from "@/service";

export function getSongUrl(id: number | string) {
  return lxRequest.get({
    url: `/song/url?id=${id}`,
  });
}
