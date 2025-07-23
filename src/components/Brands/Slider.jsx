import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
    <div className="brands">
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        centeredSlides={false}
        loopedslides={7}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
    
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../src/assets/brands/acefast.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/brands/anker.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/brands/camelion.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/brands/inoben.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/brands/mcdodo.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../src/assets/brands/powerology.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/brands/ravpower.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
