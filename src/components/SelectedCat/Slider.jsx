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
    <div className="selected-cat">
      <Swiper
        spaceBetween={10}
        slidesPerView={7}
        centeredSlides={false}
        loopedslides={8}
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
          <img src="../../src/assets/selectedCat/adaptor.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/selectedCat/battery.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/selectedCat/cable.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/selectedCat/gaming" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/selectedCat/handsfree.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../src/assets/selectedCat/Holder Negahdarande.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/selectedCat/mobadel o rabet.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../src/assets/selectedCat/powerbank.png" alt="" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
