import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducer";

const store = configureStore({reducer: userSlice});

export default store;