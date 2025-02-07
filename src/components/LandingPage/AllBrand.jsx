"use client";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import navigationStyles from "../../styles/custom-swiper/navigation/no-bg.module.scss";
import slidePerViewAuto from "../../styles/custom-swiper/slide-per-view-auto.module.scss";
import disabledNavigationStyles from "../../styles/custom-swiper/navigation/hide-disabled.module.scss";
import navigationPositionStyle from "../../styles/custom-swiper/navigation/left-right-zero.module.scss";

export const AllBrand = ({ dataToBeSent }) => {

  console.log('dataToBeSent.brand_data',dataToBeSent.brand_data);
  
  return (
    <div className="my-10">
      <div className="flex mb-10">
        <p className=" text-[1.5rem] mr-5 font-semibold">Shop By Brand</p>
        <Link href="/categories">
          <button className="bg-red text-white px-3 py-1 text-sm rounded-xl font-semibold">
            View All Brands
            <KeyboardArrowRightIcon />
          </button>
        </Link>
      </div>
      <div>
        {/* className={`${slidePerViewAuto.slide_per_view_auto} ${disabledNavigationStyles.hide_disabled} ${navigationStyles.noBg} ${navigationPositionStyle.left_right_zero}`} */}
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
            dataToBeSent.brand_data.data.map((data, index)=><SwiperSlide key={index}>
            <div>
              <img src={data.image} alt="Brand 1" />
            </div>
          </SwiperSlide>)
          }
          {/* <SwiperSlide>
            <div>
              <img src="/img/brand/20.webp" alt="Brand 1" />
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
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
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};
