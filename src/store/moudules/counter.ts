import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 999,
    name: "林夕",
  },
  reducers: {},
});

export default counterSlice.reducer;
