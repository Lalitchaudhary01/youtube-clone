import { configureStore } from "@reduxjs/toolkit";
import appSLice from "./appSLice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    app: appSLice,
    search: SearchSlice,
  },
});

export default store;
