'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from '../Categories/ProductCard';

export const InterestProducts = () => {
  return (
    <div className="my-10">
      <div className="flex mb-10">
        <p className=" text-[1.5rem] mr-5 font-semibold">You might also be interested in...</p>
      </div>
        <Swiper
 
 navigation={true}
 loop={false}
 slidesPerView="auto"
 modules={[Navigation]}
 breakpoints={{
   640: {
     slidesPerView: 2,
     spaceBetween: 10,
   },
   768: {
     slidesPerView: 4,
     spaceBetween: 15, 
   },
   1024: {
     slidesPerView: 6,
     spaceBetween: 20, 
   },
 }}
>
 <SwiperSlide>
 <ProductCard></ProductCard>
 </SwiperSlide>
 <SwiperSlide>
 <ProductCard></ProductCard>
 </SwiperSlide>
 <SwiperSlide>
 <ProductCard></ProductCard>
 </SwiperSlide>
 <SwiperSlide>
 <ProductCard></ProductCard>
 </SwiperSlide>
 <SwiperSlide>
 <ProductCard></ProductCard>
 </SwiperSlide>
 <SwiperSlide>
 <ProductCard></ProductCard>
 </SwiperSlide>
 <SwiperSlide>
 <ProductCard></ProductCard>
 </SwiperSlide>
</Swiper>
    </div>
  )
}
