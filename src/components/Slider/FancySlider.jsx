import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation, Mousewheel, Keyboard]);

const FancySlider = ({banner}) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper w-full shadow-2xl"
      >
        {banner?.data?banner?.data?.map((data,index)=><SwiperSlide key={index}>
          <img className="w-full h-full" src={data?.image} alt="Slide 1" />
        </SwiperSlide>):<SwiperSlide></SwiperSlide>}
        <SwiperSlide>
          <img className="w-full" src="/img/flash-sale/11.webp" alt="Slide 1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FancySlider;
