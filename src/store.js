import { configureStore, createSlice } from "@reduxjs/toolkit";

// 로그인 상태 구분
let user = createSlice({
    name: 'user',
    initialState: 'koke'
    // initialState: null
})


// 메인페이지에서 스크롤 최상단에 위치했는지 구분 - 헤더 배경색과 관계있음
let header = createSlice({
    name: 'header',
    // initialState: false
    initialState: true,
    reducers : {
        TopHeader(){
            return true;
        },
        unTopHeader(){
            return false;
        }
    }
})

export let { TopHeader, unTopHeader } = header.actions


// 메인페이지와 아닌 페이지 구분 - 헤더 위치와 관계있음
let page = createSlice({
    name: 'page',
    // initialState: false
    initialState: true,
    reducers : {
        mainPage(){
            return true;
        },
        unMainPage(){
            return false;
        }
    }
})

export let { mainPage, unMainPage } = page.actions



// 리듀서 내보내기
export default configureStore({
    reducer: {
        user : user.reducer,
        header : header.reducer,
        page : page.reducer,
    }
})



