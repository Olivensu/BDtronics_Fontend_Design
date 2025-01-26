"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export const ProductImgSlide = () => {
  return (
    <div>
      <Swiper
      navigation={true}
      loop={false}
      slidesPerView="auto"
      modules={[Navigation]}
      breakpoints={{
        200: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <div>
          <img src="/img/brand/20.webp" alt="Brand 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/img/brand/21.webp" alt="Brand 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/img/brand/22.webp" alt="Brand 3" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/img/brand/23.webp" alt="Brand 4" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/img/brand/20.webp" alt="Brand 5" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/img/brand/21.webp" alt="Brand 6" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/img/brand/22.webp" alt="Brand 6" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/img/brand/23.webp" alt="Brand 6" />
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};
