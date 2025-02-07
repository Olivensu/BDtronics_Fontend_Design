'use client'

import { Heart, Scale } from 'lucide-react'
import Link from 'next/link'

export default function ProductCard({ data }) {
  if (!data) return null; // Avoid rendering if data is missing

  const price = data?.productAttributes?.[0]?.discountedRetailPrice ?? 0;
  const originalPrice = data?.productAttributes?.[0]?.retailPrice ?? 0;

  console.log('data olive',data);
  

  return (
    <div className="group relative w-full max-w-sm overflow-hidden transition-all shadow-lg rounded-xl shadow-gray border-[1px] border-gray-light hover:shadow-xl">
      <div className="p-0">
        <div className="relative aspect-square">
          <img
            src={data?.images?.[0]?.image ?? "https://via.placeholder.com/150"}
            alt={data?.name || "Product Image"}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <button className="bg-red text-white px-2 py-1 font-semibold text-sm rounded-lg">
              ADD TO CART
            </button>
          </div>
        </div>

        <div className="space-y-2 p-4">
          <Link href="/products/products-details">
            <h3 className="text-sm text-blue-600">{data?.name || "Unknown Product"}</h3>
          </Link>
          <div className="flex justify-between items-center gap-2">
            <span className="text-lg font-semibold">{price.toLocaleString()}৳ </span>
            <span className="text-sm line-through text-gray">{originalPrice.toLocaleString()}৳ </span>
          </div>
        </div>
      </div>
    </div>
  );
}



  {/* <div className="flex justify-center gap-4 border-t p-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Heart className="h-5 w-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Scale className="h-5 w-5" />
        </button>
      </div> */}

