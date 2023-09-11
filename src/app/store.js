import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/useslice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
