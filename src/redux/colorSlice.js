import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  currentColorHex: "#D97706",
  filter: "",
  loading: true,
};

export const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.colors = [action.payload, ...state.colors];
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
    setCurrentColorHex: (state, action) => {
      state.currentColorHex = action.payload;
    },
  },
});

export const {
  addColor,
  deleteColor,
  setFilter,
  setColors,
  setLoading,
  setCurrentColorHex,
} = colorSlice.actions;
