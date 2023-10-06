import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function Banner() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation]}
      navigation
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item}>
          <Image
            src="/detail.png"
            layout="responsive"
            alt="banner"
            width={1000}
            height={500}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
