import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Detail from "./detail";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

export default function Banner() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      style={{
        overflowY: "visible",
      }}
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item}>
          <Detail />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
