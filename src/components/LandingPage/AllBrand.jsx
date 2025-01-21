'use client'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import navigationStyles from '../../styles/custom-swiper/navigation/no-bg.module.scss';
import slidePerViewAuto from '../../styles/custom-swiper/slide-per-view-auto.module.scss';
import disabledNavigationStyles from '../../styles/custom-swiper/navigation/hide-disabled.module.scss';
import navigationPositionStyle from '../../styles/custom-swiper/navigation/left-right-zero.module.scss';


export const AllBrand = () => {
  return (
    <div className="my-10">
      <div className="flex">
        <p className=" text-[1.5rem] mr-5 font-semibold">Shop By Brand</p>
        <Link href='/categories'>
        <button className="bg-[#FCB800] px-3 py-1 text-sm rounded-xl font-semibold" >
        View All Brands
          <KeyboardArrowRightIcon />
        </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-8 grid-cols-4 mx-auto gap-4 my-10">
      <img src="/img/brand/20.webp" alt="" />
      <img src="/img/brand/21.webp" alt="" />
      <img src="/img/brand/22.webp" alt="" />
      <img src="/img/brand/23.webp" alt="" />
      <img src="/img/brand/20.webp" alt="" />
      <img src="/img/brand/21.webp" alt="" />
      <img src="/img/brand/22.webp" alt="" />
      <img src="/img/brand/23.webp" alt="" />
      </div>
      <div>
      <Swiper
  className={`${slidePerViewAuto.slide_per_view_auto} ${disabledNavigationStyles.hide_disabled} ${navigationStyles.noBg} ${navigationPositionStyle.left_right_zero}`}
  navigation={true}
  loop={false}
  slidesPerView="auto"
  modules={[Navigation]}
  breakpoints={{
    // Mobile View (up to 640px)
    640: {
      slidesPerView: 3,
      spaceBetween: 10, // Adjust space between slides for mobile
    },
    // Tablet View (up to 768px)
    768: {
      slidesPerView: 4,
      spaceBetween: 15, // Adjust space between slides for tablets
    },
    // Desktop View (default and above 1024px)
    1024: {
      slidesPerView: 6,
      spaceBetween: 20, // Adjust space between slides for desktop
    },
  }}
>
  <SwiperSlide>
    <div>
      <img src="/img/brand/23.webp" alt="Brand 1" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
      <img src="/img/brand/23.webp" alt="Brand 2" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
      <img src="/img/brand/23.webp" alt="Brand 3" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
      <img src="/img/brand/23.webp" alt="Brand 4" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
      <img src="/img/brand/23.webp" alt="Brand 5" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
      <img src="/img/brand/23.webp" alt="Brand 6" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
      <img src="/img/brand/23.webp" alt="Brand 6" />
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div>
      <img src="/img/brand/23.webp" alt="Brand 6" />
    </div>
  </SwiperSlide>
</Swiper>

      </div>
      
      </div>
  )
}
