import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 999,
    name: "林夕",
  },
  reducers: {
    changeName(state, { payload }) {
      state.name = payload;
    },
  },
});
export const { changeName } = counterSlice.actions;
export default counterSlice.reducer;
