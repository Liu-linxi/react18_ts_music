import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend } from "../service/recommend";
import type{ IBannersDataType, IHotRecommendsDataType } from "./type";

export const fetchBannerDataAction = createAsyncThunk("banners", async (arg, { dispatch }) => {
  const res = await getBanners();
  // 将数据存储到state其中一种方式
  // 这里发生异常需要自己编写try_catch
  dispatch(changeBannersAction(res.banners));
});

export const fetchHotRecommnedAction=createAsyncThunk("hotRecommend",async(arg, { dispatch })=>{
  const res = await getHotRecommend(8);
  dispatch(changeHotRecommnedAction(res.result));

})

interface IrecommendState {
  banners: IBannersDataType[];
  hotRecommends:IHotRecommendsDataType[];
}

const initialState: IrecommendState = {
  banners: [],
  hotRecommends:[],
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changeHotRecommnedAction(state, { payload }) {
      state.hotRecommends = payload;
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

export const { changeBannersAction,changeHotRecommnedAction } = recommendSlice.actions;
export default recommendSlice.reducer;

