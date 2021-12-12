import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

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
            console.log("inside login")
            state.token = action.payload.token,
            state.mail = action.payload.email,
            state.name = action.payload.username
        },
        getuserdetails(state, action){
            console.log("called getUserDetails reducer");
            state.mail = action.payload.email,
            state.name = action.payload.display_name
            state.token = action.payload.jwtToken,
            state.loginState = true
        },
        appAccess(state, action){
            console.log("called")
            state.token = action.payload.jwtToken,
            state.loginState = true,
            state.isLogin = true
        },
        logout(state, action){
            console.log("called logout reducer")
            state.loginState = false,
            state.isLogin = false,
            state.token = "",
            state.mail = ""
        },
        userDetails(state, action){
            console.log("inside store, userDetails")
            state.userImage = action.payload.image
        }
    },
})

export const {login, logout, userDetails, getuserdetails,appAccess} = userSlice.actions;
export default userSlice.reducer;