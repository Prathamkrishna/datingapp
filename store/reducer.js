import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLogin: false,
    loginState: false,
    token: "",
    name: "",
    mail: "",
    userImage: require('../assets/user-undefined.jpg')
}

const userSlice = createSlice({
    name: "loginAuth",
    initialState,
    reducers: {
        login(state, action){
            console.log(action);
            state.token = action.payload.token,
            state.mail = action.payload.email,
            state.name = action.payload.username
        },
        getuserdetails(state, action){
            state.loginState = false
        },
        appAccess(state, action){
            console.log("called")
            state.isLogin = true
        },
        logout(state, action){
            state.loginState = true,
            state.token = "",
            state.mail = ""
        },
        userDetails(state, action){
            state.userImage = action.payload.image
        }
    },
})

export const {login, logout, userDetails, getuserdetails,appAccess} = userSlice.actions;
export default userSlice.reducer;