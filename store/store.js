import {configureStore} from "@reduxjs/toolkit";
import userSlice, { login, fetchUserSpotifyData } from "./reducer";
import { applyMiddleware } from "redux";

const store = configureStore({reducer: userSlice}, applyMiddleware(fetchUserSpotifyData));

export default store;