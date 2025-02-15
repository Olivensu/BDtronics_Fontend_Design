"use client";

import { Heart, Scale } from "lucide-react";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ProductCard({ data }) {
  if (!data) return null; // Avoid rendering if data is missing

  const price = data?.productAttributes?.[0]?.discountedRetailPrice ?? 0;
  const originalPrice = data?.productAttributes?.[0]?.retailPrice ?? 0;
  const discountPercent = data?.productAttributes?.[0]?.discountPercent ?? 0;

  console.log("data olive", data);

  return (
    <div className="group relative w-full max-w-sm overflow-hidden transition-all shadow-lg rounded-xl shadow-gray border-[1px] border-gray-light hover:shadow-xl my-4">
      <div className="p-0">
        <Link href={`/products/products-details/${data?.id}`}>
          <div className="relative aspect-square">
            <img
              src={
                data?.images?.[0]?.image ?? "https://via.placeholder.com/150"
              }
              alt={data?.name || "Product Image"}
              className="h-full w-full object-cover"
            />
            {discountPercent > 0 && (
              <div className="absolute bg-red top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                {discountPercent}% OFF
              </div>
            )}
          </div>
        </Link>
        <div className="space-y-2 p-4">
          <Link href={`/products/products-details/${data?.id}`}>
            <h3 className="text-xl font-semibold hover:text-red">
              {data?.name || "Unknown Product"}
            </h3>
          </Link>
          {/* <p className="text-sm text-gray-600">{data?.shortDescription || "No description available."}</p> */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              {price.toLocaleString()}৳
            </span>
            {originalPrice > price && (
              <span className="text-sm line-through text-gray-500">
                {originalPrice.toLocaleString()}৳
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mb-2">
            {/* Left Side: Star Icons and Date */}
            <div className="flex items-center">
              <StarIcon className="text-yellow" style={{ fontSize: "16px" }} />
              <StarIcon className="text-yellow" style={{ fontSize: "16px" }} />
              <StarIcon className="text-yellow" style={{ fontSize: "16px" }} />
              <StarIcon className="text-yellow" style={{ fontSize: "16px" }} />
              <StarHalfIcon
                className="text-yellow"
                style={{ fontSize: "16px" }}
              />

              {/* Right Side: Heart and Cart Icons */}
              
            </div>
            <div className="flex items-center gap-2">
                <FavoriteBorderIcon
                  className="text-yellow cursor-pointer"
                  style={{ fontSize: "20px" }}
                />
                <ShoppingCartOutlinedIcon
                  className="text-yellow cursor-pointer"
                  style={{ fontSize: "20px" }}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-center gap-4 border-t p-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Heart className="h-5 w-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Scale className="h-5 w-5" />
        </button>
      </div> */
}
