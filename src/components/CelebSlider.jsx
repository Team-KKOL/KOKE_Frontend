import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import "./CelebSlider.modul.css";

// import required modules
import { Pagination } from "swiper";
import { MainTitle, SubTitle } from "./MainTitle";

export default function CelebSlider() {
  return (
    <>
      <div className="titleBox">
        <MainTitle Mtext={["코케를 구독 중인", <br />, "다양한 커피 취향의 커피인들"]} />  
        <SubTitle Stext={["데일리 커피에서 디카페인까지.", <br />, "다양한 취향을 가진 사람들이 구독중인 코케"]} /> 
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper_celeb"
      >
        <SwiperSlide className="slideBolck">Slide 1</SwiperSlide>
        <SwiperSlide className="slideBolck">Slide 2</SwiperSlide>
        <SwiperSlide className="slideBolck">Slide 3</SwiperSlide>
        <SwiperSlide className="slideBolck">Slide 4</SwiperSlide>
        <SwiperSlide className="slideBolck">Slide 5</SwiperSlide>
        <SwiperSlide className="slideBolck">Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
}
