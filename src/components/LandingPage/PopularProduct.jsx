'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from "../Categories/ProductCard";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const PopularProduct = ({ dataToBeSent}) => {

  console.log('dataToBeSent.product_data', dataToBeSent.product_data.data.length);
  
  return (
    <div className="my-10">
      <div className="flex mb-10">
        <p className=" text-[1.5rem] mr-5 font-semibold">Best Seller Products</p>
        <Link href="/products">
          <button className="bg-red text-white px-3 py-1 text-sm rounded-xl font-semibold">
            View All
            <KeyboardArrowRightIcon />
          </button>
        </Link>
      </div>

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
{
  dataToBeSent.product_data.data
    .filter((data) => data !== undefined && data !== null) // Filter out undefined or null values
    .map((data) => (
      <SwiperSlide key={data.id}> 
        <ProductCard data={data} />
      </SwiperSlide>
    ))
}


  <SwiperSlide>
  <ProductCard></ProductCard>
  </SwiperSlide>
</Swiper>
    </div>
  );
};
