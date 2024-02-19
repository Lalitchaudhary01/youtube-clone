import { configureStore } from "@reduxjs/toolkit";
import appSLice from "./appSLice";
import SearchSlice from "./SearchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSLice,
    search: SearchSlice,
    chat: chatSlice,
  },
});

export default store;
