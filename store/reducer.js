import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loginState: false,
    token: "",
    name: "",
    mail: "",
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
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;