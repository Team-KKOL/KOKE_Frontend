import { configureStore, createSlice } from "@reduxjs/toolkit";

// 로그인 상태 구분
let user = createSlice({
    name: 'user',
    initialState: 'koke'
    // initialState: null
})

//// **마이페이지 정보

// 찜목록
// -- 데이터 불러오는 코드 구현

// 구매목록
// -- 데이터 불러오는 코드 구현

// 리뷰목록
// -- 데이터 불러오는 코드 구현







//// **화면 UI 구성 

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




// 커피 상세페이지 주문 옵션 관리
let order = createSlice({
    name: 'order',
    initialState: {
        volume: '200g',  // 용량
        comminution: '원두 분쇄 안함',  // 원두 분쇄 유무
        beanSize: '',  // 분쇄정도
        PurchaseMethod: "구독하기", // 구독 유무
        cycle: "",   // 구독 주기
    },
    reducers : {
        changeVolume(state, action){
            state.volume = action.payload
        },
        changeComminution(state, action){
            state.comminution = action.payload
        },
        changeBeanSize(state, action){
            state.beanSize = action.payload
        },
        changePurchaseMethod(state, action){
            state.PurchaseMethod = action.payload
        },
        changeCycle(state, action){
            state.cycle = action.payload
        },
    }
})

export let { changeVolume, changeComminution, changeBeanSize, changePurchaseMethod, changeCycle } = order.actions








//// 리듀서 내보내기
export default configureStore({
    reducer: {
        user : user.reducer,
        header : header.reducer,
        page : page.reducer,
        order : order.reducer,
    }
})



