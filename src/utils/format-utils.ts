import { getSongUrl } from "@/views/player/service/player";

export function getSizeImage(imgUrl: string | undefined, size?: number) {
  return `${imgUrl}?param=${size}x${size}`;
}

export function getCount(count: number) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

export function formatDate(time: string | number | Date, fmt: string): string {
  const date: Date = new Date(time);

  // 使用 exec 获取匹配结果
  const yearMatch = /(y+)/.exec(fmt);
  if (yearMatch) {
    fmt = fmt.replace(yearMatch[0], (date.getFullYear() + "").substr(4 - yearMatch[0].length));
  }

  const o: { [key: string]: number } = {
    "M+": date.getMonth() + 1, // 月份从0开始
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };

  for (const k in o) {
    const match = new RegExp(`(${k})`).exec(fmt);
    if (match) {
      const str: string = o[k] + "";
      fmt = fmt.replace(match[0], match[0].length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt; // 返回值类型为 string
}

function padLeftZero(str: string): string {
  return ("00" + str).slice(-2);
}

// 格式化分钟和秒
export function formatMinuteSecond(time: string | number | Date): string {
  return formatDate(time, "mm:ss");
}

export function formatMonthDay(time: string | number | Date): string {
  return formatDate(time, "MM月dd日");
}

export function getPlayUrl(id: string | number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export function getSongUrlFun(id: string | number): Promise<string | undefined> {
  return getSongUrl(id).then(res => {
    return res.data.length > 0 ? res.data[0].url : undefined;
  }).catch(err => {
    console.error("获取歌曲 URL 失败:", err);
    return undefined; // 处理错误并返回 undefined
  });
}
