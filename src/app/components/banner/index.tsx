"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Detail from "./detail";
import { IDetail } from "./types";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

export default function Banner({ list }: { list: IDetail[] }) {
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
      {list?.map((item: IDetail) => (
        <SwiperSlide key={item.id}>
          <Detail item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
