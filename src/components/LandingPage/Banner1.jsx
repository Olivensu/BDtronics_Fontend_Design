'use client'
import FancySlider from "../Slider/FancySlider";



const Banner1 = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="col-span-3">
          <FancySlider></FancySlider>
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 w-full">
          <img className=' w-full' src='/img/flash-sale/14.webp' alt="Slide 1" />
          <img className=' w-full' src='/img/flash-sale/15.webp' alt="Slide 1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1