import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanners } from "../service/recommend";

export const fetchBannerDataAction = createAsyncThunk("banners", async (arg, { dispatch }) => {
  const res = await getBanners();
  // 将数据存储到state其中一种方式
  // 这里发生异常需要自己编写try_catch
  dispatch(changeBannersAction(res.banners));
});

interface IrecommendState {
  banners: IBannerData[];
}

const initialState: IrecommendState = {
  banners: [],
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
  },

  // 将数据存储到state其中一种方式
  // extraReducers:(builder)=>{
  //   builder.addCase(fetchBannerDataAction.pending, ()=>{
  //     console.log("pending")
  //   }).addCase(fetchBannerDataAction.fulfilled, (state, { payload })=>{
  //     state.banners = payload
  //   }).addCase(fetchBannerDataAction.rejected, ()=>{
  //     console.log("rejected")
  //   })
  // }
});

export const { changeBannersAction } = recommendSlice.actions;
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
