import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanners } from "../service/recommend";

export const fetchBannerDataAction = createAsyncThunk("banners", async () => {
  const res = await getBanners();
  console.log("🚀 ~ fetchBannerDataAction ~ res:", res);
  return res.data;
});

interface IrecommendState {
  banners?: IBannerData[];
}

const initialState: IrecommendState = {};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {},
});

export default recommendSlice.reducer;

interface IBannerData {
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
