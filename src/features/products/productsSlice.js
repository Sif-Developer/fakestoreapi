import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";
const initialState = {
  products: [],
};
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      return await productsService.getAllProducts();
    } catch (error) {
      console.error(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export default productsSlice.reducer;
