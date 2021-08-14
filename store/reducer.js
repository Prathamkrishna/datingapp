import {createSlice} from "@reduxjs/toolkit";

const initialState = {
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
            state.loginState = false,
            state.token = action.payload.token,
            state.mail = action.payload.email,
            state.name = action.payload.name
        },
        logout(state, action){
            state.loginState = true,
            state.token = "",
            state.mail = ""
        },
        userDetails(state, action){
            state.userImage = action.payload.image
        }
    }
})

export const {login, logout, userDetails} = userSlice.actions;
export default userSlice.reducer;