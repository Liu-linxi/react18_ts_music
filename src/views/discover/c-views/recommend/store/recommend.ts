import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend, getNewAlbum, getTopList } from "../service/recommend";
import type { IBannersDataType, IHotRecommendsDataType, INewAlbumDataType } from "./type";

export const fetchBannerDataAction = createAsyncThunk("banners", async (arg, { dispatch }) => {
  const res = await getBanners();
  // 将数据存储到state其中一种方式
  // 这里发生异常需要自己编写try_catch
  dispatch(changeBannersAction(res.banners));
});
export const fetchHotRecommnedAction = createAsyncThunk("hotRecommend", async (arg, { dispatch }) => {
  const res = await getHotRecommend(8);
  dispatch(changeHotRecommnedAction(res.result));
});
export const fetchNewAlbumAction = createAsyncThunk("newAlbum", async (arg, { dispatch }) => {
  const res = await getNewAlbum(10, 0);
  dispatch(changeNewAlbumAction(res.albums));
});
export const fetchTopListAction = createAsyncThunk("topList", async (arg: number, { dispatch }) => {
  const res = await getTopList(arg);
  dispatch(changeTopListAction(res.playlist));
});

interface IrecommendState {
  banners: IBannersDataType[];
  hotRecommends: IHotRecommendsDataType[];
  newAlbum: INewAlbumDataType[];
  topUpList: any;
  topNewList: any;
  topOriginList: any;
}

const initialState: IrecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbum: [],
  topUpList: {},
  topNewList: {},
  topOriginList: {},
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
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload;
    },
    changeTopListAction(state, { payload }) {
      switch (payload.id) {
        case 19723756:
          state.topNewList = payload;
          break;
        case 3779629:
          state.topOriginList = payload;
          break;
        case 2884035:
          state.topUpList = payload;
          break;
        default:
          console.log("其他数据处理");
      }
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

export const { changeBannersAction, changeHotRecommnedAction, changeNewAlbumAction, changeTopListAction } = recommendSlice.actions;
export default recommendSlice.reducer;
