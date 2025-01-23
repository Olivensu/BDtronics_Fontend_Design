'use client'

import { Heart, Scale } from 'lucide-react'
import Link from 'next/link'

export default function ProductCard({ 
  name = "ANYCUBIC Standard Resin (V2) UV Liquid Resin for 3D Printing (1KG)",
  price = 7360.00,
  originalPrice = 8390.00,
  imageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v99psng6UnYYlSAzcewA6dIieY1GT2.png"
}) {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden transition-all shadow-lg rounded-xl shadow-gray border-[1px] border-gray-light hover:shadow-xl">
      <div className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square">
          <img
            src='/img/product/10.webp'
            alt={name}
            className="h-full w-full object-cover"
          />
          {/* Add to Cart Overlay - Hidden by default, shown on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
            <button 
              className="bg-[#FDB813] text-black hover:bg-[#FDB813]/90 px-2 py-1 rounded-lg"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2 p-4 ">
          <Link href='/products/products-details'>
          <h3 className="text-sm text-blue-600 hover:underline">
            {name}
          </h3>
          </Link>
          <div className="flex justify-between items-center gap-2">
            <span className="text-lg font-semibold">
              BDT {price.toLocaleString()}
            </span>
            <span className="text-sm  line-through text-gray">
              BDT {originalPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 border-t p-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Heart className="h-5 w-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Scale className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

