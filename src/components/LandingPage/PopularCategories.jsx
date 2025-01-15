'use client'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

export const PopularCategories = () => {

  return (
    <div className="my-10">
      <div className="flex">
        <p className=" text-[1.5rem] mr-5 font-semibold">Popular Categories</p>
        <Link href='/categories'>
        <button className="bg-[#FCB800] px-3 py-1 text-sm rounded-xl font-semibold" >
          View All Categories
          <KeyboardArrowRightIcon />
        </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-3 my-5">
        <div className="relative bg-[#F1F1F1]">
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
        </div>
      </div>
    </div>
  );
};
