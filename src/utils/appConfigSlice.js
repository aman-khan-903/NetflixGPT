import { createSlice } from "@reduxjs/toolkit";
import { lang } from "./languageConstant";

const appConfigSlice= createSlice({
    name:"appConfig", 
    initialState:{
        lang:"en", 
    }, 
    reducers:{
        appLanguageChanger:(state, action)=>{
            state.lang= action.payload; 
        }
    }
})

export const {appLanguageChanger}= appConfigSlice.actions; 

export default appConfigSlice.reducer; 