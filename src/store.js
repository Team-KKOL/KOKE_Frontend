import { configureStore, createSlice } from "@reduxjs/toolkit";


let user = createSlice({
    name: 'user',
    initialState: 'koke'
    // initialState: null
})


export default configureStore({
    reducer: {
        user : user.reducer
    }
})