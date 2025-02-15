"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

export const ProductImgSlide = ({images}) => {
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
      {
        images?.map(img =><SwiperSlide>
          <div>
            <img src={img?.image} alt="Brand 1" />
          </div>
        </SwiperSlide>)
      }
      {/* <SwiperSlide>
        <div>
          <img src="/img/brand/20.webp" alt="Brand 1" />
        </div>
      </SwiperSlide> */}
    </Swiper>
    </div>
  );
};
