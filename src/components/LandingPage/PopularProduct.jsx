'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from "../Categories/ProductCard";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const PopularProduct = () => {
  return (
    <div className="my-10">
      <div className="flex mb-10">
        <p className=" text-[1.5rem] mr-5 font-semibold">Best Seller Products</p>
        <Link href="/products">
          <button className="bg-[#FCB800] px-3 py-1 text-sm rounded-xl font-semibold">
            View All
            <KeyboardArrowRightIcon />
          </button>
        </Link>
      </div>
      {/* <div className="grid md:grid-cols-5 grid-cols-3 mx-auto gap-4 my-10">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div> */}

      <Swiper
 
  navigation={true}
  loop={false}
  slidesPerView="auto"
  modules={[Navigation]}
  breakpoints={{
    200: {
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
  );
};
