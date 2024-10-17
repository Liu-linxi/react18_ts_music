import { createSlice } from "@reduxjs/toolkit";

interface IState {
  count: number;
  name: string;
}

const initialState: IState = {
  count: 999,
  name: "林夕",
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeName(state, { payload }) {
      state.name = payload;
    },
  },
});
export const { changeName } = counterSlice.actions;
export default counterSlice.reducer;
