import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loginState = false,
    name = "",
    token = "",
    mail = "",
}

const userSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login(state, action){
            state.loginState = true,
            state.name = action.payload.name,
            state.token = action.payload.token,
            state.mail = action.payload.mail
        },
        logout(state, action){
            state.loginState = false,
            state.name = "",
            state.token = "",
            state.mail = ""
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;