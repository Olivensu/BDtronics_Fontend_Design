import React from "react";
import ProductCard from "../Categories/ProductCard";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const PopularProduct = () => {
  return (
    <div className="my-10">
      <div className="flex">
        <p className=" text-[1.5rem] mr-5 font-semibold">Best Seller Products</p>
        <Link href="/products">
          <button className="bg-[#FCB800] px-3 py-1 text-sm rounded-xl font-semibold">
            View All
            <KeyboardArrowRightIcon />
          </button>
        </Link>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-3 mx-auto gap-4 my-10">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};
