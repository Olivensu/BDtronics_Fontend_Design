'use client'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

export const PopularCategories = ({ dataToBeSent }) => {

  console.log('dataToBeSent',dataToBeSent?.categories_data);

  return (
    <div className="my-10">
      <div className="flex">
        <p className=" text-[1.5rem] mr-5 font-semibold">Popular Categories</p>
        <Link href='/categories'>
        <button className="bg-red text-white px-3 py-1 text-sm rounded-xl font-semibold" >
          View All Categories
          <KeyboardArrowRightIcon />
        </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-3 my-5">
        {dataToBeSent?.categories_data?.data.map((data,index)=><div key={index} className="relative bg-[#F1F1F1] shadow-xl border-2 border-blue">
          <img
            className="w-full"
            src={data?.image}
            alt="mobile-and-laptops"
          />
          <p className="bg-opacity-50 text-center text-sm  px-2 py-1 rounded">
            {data?.name}
          </p>
        </div>)}
        {/* <div className="relative bg-[#F1F1F1]">
          <img
            className=""
            src="/img/categories/3d-printer.webp"
            alt="mobile-and-laptops"
          />
          <p className="bg-opacity-50 text-center text-sm  px-2 py-1 rounded">
            Mobile & Laptops
          </p>
        </div>
        <div className="relative bg-[#F1F1F1]">
          <img
            className=""
            src="/img/categories/inverter.webp"
            alt="mobile-and-laptops"
          />
          <p className="bg-opacity-50 text-center text-sm px-2 py-1 rounded">
            Mobile & Laptops
          </p>
        </div>
        <div className="relative bg-[#F1F1F1]">
          <img
            className=""
            src="/img/categories/lifepo4.webp"
            alt="mobile-and-laptops"
          />
          <p className="bg-opacity-50 text-center text-sm px-2 py-1 rounded">
            Mobile & Laptops
          </p>
        </div>
        <div className="relative bg-[#F1F1F1]">
          <img
            className=""
            src="/img/categories/3d-printer.webp"
            alt="mobile-and-laptops"
          />
          <p className="bg-opacity-50 text-center text-sm px-2 py-1 rounded">
            Mobile & Laptops
          </p>
        </div>
        <div className="relative bg-[#F1F1F1]">
          <img
            className=""
            src="/img/categories/lifepo4.webp"
            alt="mobile-and-laptops"
          />
          <p className="bg-opacity-50 text-center text-sm px-2 py-1 rounded">
            Mobile & Laptops
          </p>
        </div>
        <div className="relative bg-[#F1F1F1]">
          <img
            className=""
            src="/img/categories/3d-printer.webp"
            alt="mobile-and-laptops"
          />
          <p className="bg-opacity-50 text-center text-sm px-2 py-1 rounded">
            Mobile & Laptops
          </p>
        </div>
        <div className="relative bg-[#F1F1F1]">
          <img
            className=""
            src="/img/categories/3d-printer.webp"
            alt="mobile-and-laptops"
          />
          <p className="bg-opacity-50 text-center text-sm px-2 py-1 rounded">
            Mobile & Laptops
          </p>
        </div> */}
      </div>
    </div>
  );
};
