import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  filter: "",
  loading: true,
};

export const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.colors.push(action.payload);
    },
    deleteColor: (state, action) => {
      state.colors = state.colors.filter(
        (color) => color.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setColors: (state, action) => {
      state.colors = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addColor, deleteColor, setFilter, setColors, setLoading } =
  colorSlice.actions;
