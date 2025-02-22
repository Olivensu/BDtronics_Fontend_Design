'use client'
import FancySlider from "../Slider/FancySlider";



const Banner1 = ({dataToBeSent}) => {

  // console.log('dataToBeSent',dataToBeSent?.banner_data);
  
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="col-span-3">
          <FancySlider banner={dataToBeSent?.banner_data}></FancySlider>
        </div>
        <div>
          <div className="grid grid-cols-2 col-span-1 lg:grid-cols-1 gap-5 w-full">
          <img className='w-full col-span-1' src='/img/flash-sale/14.webp' alt="Slide 1" />
          <img className='w-full col-span-1' src='/img/flash-sale/15.webp' alt="Slide 1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner1