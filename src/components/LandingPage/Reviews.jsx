'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ReviewCard from "../review/ReviewCard";


export const Reviews = () => {
  return (
    <div className="my-10">
      <div className="flex">
        <p className=" text-[1.5rem] mr-5 font-semibold">Reviews from Our Customers</p>
      </div>

      <Swiper
 
  navigation={true}
  loop={false}
  slidesPerView="auto"
  modules={[Navigation]}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15, 
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20, 
    },
  }}
>
  <SwiperSlide>
  <ReviewCard></ReviewCard>
  </SwiperSlide>
  <SwiperSlide>
  <ReviewCard></ReviewCard>
  </SwiperSlide>
  <SwiperSlide>
  <ReviewCard></ReviewCard>
  </SwiperSlide>
  <SwiperSlide>
  <ReviewCard></ReviewCard>
  </SwiperSlide>
  <SwiperSlide>
  <ReviewCard></ReviewCard>
  </SwiperSlide>
</Swiper>
      </div>
  )
}
