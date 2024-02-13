import { configureStore } from "@reduxjs/toolkit";
import appSLice from "./appSLice";

const store = configureStore({
  reducer: {
    app: appSLice,
  },
});

export default store;
