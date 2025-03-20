import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "@redux/colorReducer";

const store = configureStore({
  reducer: {
    colors: colorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
