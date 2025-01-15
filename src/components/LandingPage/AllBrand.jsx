'use client'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";
import ProductCard from "../Categories/ProductCard";

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
      
      </div>
  )
}
