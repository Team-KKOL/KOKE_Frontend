 import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";
// import "./components/MainImg.modul.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import styled from "styled-components";

// export default function App() {
export default function MainImg() {
 
  return (
    <div className="outerBox">
      <Swiper
        // spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/main_coffee_01.jpg" alt="main_coffee_01"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/main_coffee_02.jpg" alt="main_coffee_02"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/main_coffee_03.jpg" alt="main_coffee_03"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/main_coffee_04.jpg" alt="main_coffee_04"/>
        </SwiperSlide>
      </Swiper>
      <div className="grayBox">
        <h1>커피 맛집 로스터리 모든 원두를<br/>편하게 구독해서 이용하세요</h1>
        <h4>커피 맛있다고 소문난 로스터리의 원두가 다 있어요.<br/>3일 내 로스팅된 원두로 신선하게 즐기세요.</h4>
      </div>
    </div>
  );
}
