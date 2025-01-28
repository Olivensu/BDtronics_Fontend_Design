'use client'
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ProductImgSlide } from "@/components/product-details/ProductImgSlide";
import { InterestProducts } from "@/components/product-details/interestProducts";
import { Star, Heart, Share2, Plus, Minus, ShoppingCart } from "lucide-react"
import { Truck, DollarSign, Shield, CreditCard, Phone, MessageSquare } from "lucide-react"
import Link from "next/link";

function ProductDetailsCard() {
  const [activeTab, setActiveTab] = useState("details ৳ ")
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }
  return (
    <div className="max-w-[1280px] mx-auto my-5">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-5 grid-cols-1 gap-4">
          <div className="col-span-2">
            <img
              src="/img/product/13.webp"
              alt="8S 1.2A Active Balancer Equalizer"
              className="rounded-lg w-full"
            />
            <ProductImgSlide></ProductImgSlide>
          </div>
          <div className="max-w-3xl col-span-2 mx-auto p-6">
      <h1 className="text-xl font-medium text-gray-900 mb-2">
        4-in-1 MC4 Solar Panel Branch Connector 4mm² Male+Female 4-way PV Jack Cable Accessories (1 Pair)
      </h1>

      
      <div className="flex justify-between my-3">
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gray-300" />
        ))}
      </div>

      
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-green"></div>
        <span className="text-lg text-gray-600">In stock</span>
      </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        A pair of 4 way MC4 connectors for solar panel. One is female and the other is male.
      </p>

      {/* SKU */}
      <div className="flex gap-4 mb-6">
        <span className="text-gray-600">SKU</span>
        <span className="text-gray-900">BTS-00003858</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-3xl font-bold text-orange-500">৳ 750.00</span>
        <span className="text-gray-500 line-through">৳ 800.00</span>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-gray-600">Qty</span>
        <div className="flex items-center">
          <button variant="outline" size="icon" onClick={decrementQuantity} className="h-8 w-8 flex items-center justify-center bg-gray-light">
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
            className="h-8 w-16 text-center border-y border-red"
          />
          <button variant="outline" size="icon" onClick={incrementQuantity} className="h-8 w-8 flex items-center justify-center bg-gray-light">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="flex-1 bg-green text-white py-2 rounded-full font-bold">BUY NOW</button>
        <button variant="outline" className="flex-1 bg-red text-white py-2 rounded-full font-bold">
          ADD TO CART
        </button>
      </div>

      {/* Social Actions */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </button>
          <button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray">Share:</span>
          <div className="flex gap-2">
            {["Facebook", "Twitter", "Pinterest", "Instagram"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">{social}</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">{social[0]}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6">
        <span className="text-gray mr-2">Tags:</span>
        <button variant="secondary" className="text-sm ">
          Solar Accessories
        </button>
      </div>
    </div>
          <div>
          <div className="max-w-md space-y-4 bg-[#F3F4F6]">
      {/* Delivery Info */}
      <div className=" p-4 rounded-lg">
        <h3 className="text-sm text-gray-600 mb-3">Delivery Info</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <Truck className="h-5 w-5 text-gray-500 shrink-0" />
            <div>
              <div>
                <span className="font-medium">Inside Dhaka:</span> 1-2 days
              </div>
              <div>
                <span className="font-medium">Express (Dhaka):</span> 24 hours
              </div>
              <div className="text-xs text-gray-500">Order before 12:00PM</div>
              <div className="mt-1">
                <span className="font-medium">Outside Dhaka:</span> 2-3 days
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <DollarSign className="h-5 w-5 text-gray-500" />
            <span>Cash on delivery all over BD</span>
          </div>
        </div>
      </div>

      {/* Quality */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm text-gray-600 mb-3">Quality</h3>
        <div className="space-y-3">
          <div className="flex gap-3 items-center">
            <Shield className="h-5 w-5 text-gray-500" />
            <span>100% authentic product</span>
          </div>
          <div className="flex gap-3 items-center">
            <Shield className="h-5 w-5 text-gray-500" />
            <span>Quality product guaranteed</span>
          </div>
        </div>
      </div>

      {/* Service */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm text-gray-600 mb-3">Service</h3>
        <div className="flex gap-3 items-center">
          <CreditCard className="h-5 w-5 text-gray-500" />
          <span>Safe & secure payment</span>
        </div>
      </div>

      {/* Customer Support */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm text-gray-600 mb-3">Customer Support</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-gray-500" />
            <div>
              <div className="font-medium">01974 277 797</div>
              <div className="text-xs text-gray-500">10:00AM to 7:00PM (Friday Closed)</div>
            </div>
          </div>

          {/* Communication buttons */}
          <div className="space-y-2">
            <button className="w-full flex items-center gap-2 bg-green text-white px-4 py-2 rounded-md transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </button>
            <button className="w-full flex items-center gap-2 bg-[#0B3866] text-white px-4 py-2 rounded-md transition-colors">
              <MessageSquare className="h-5 w-5" />
              Chat with Us
            </button>
          </div>
        </div>
      </div>
    </div>
          {/* <div className="mt-6 grid grid-cols-2 md:grid-cols-1  gap-4">
            <div className="flex items-center">
              <LocalShippingIcon className="text-green-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Inside Dhaka: 1-2 days</p>
                <p className="text-sm text-gray-600">Outside Dhaka: 2-3 days</p>
              </div>
            </div>
            <div className="flex items-center">
              <VerifiedIcon className="text-green-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">100% authentic product</p>
                <p className="text-sm text-gray-600">
                  Quality product guaranteed
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <SupportAgentIcon className="text-green-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">7 days easy return</p>
                <p className="text-sm text-gray-600">Safe & secure payment</p>
              </div>
            </div>
            <div className="flex items-center">
              <WhatsAppIcon className="text-green-600 mr-2" />
              <div>
                <p className="text-sm text-gray-600">Customer Support</p>
                <p className="text-sm text-gray-600">01974 277 797</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto p-4 space-y-8">
      {/* Review Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Write Your Own Review</h2>
        <p className="text-gray-600">
          Only registered users can write reviews. Please{" "}
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Sign in
          </Link>{" "}
          or{" "}
          <Link href="/create-account" className="text-blue-600 hover:underline">
            create an account
          </Link>
        </p>
      </div>

      {/* Details Section */}
      <div className="container mx-auto p-4 max-w-[1280px]">
      <div className="tabs tabs-boxed">
        <a className={`tab ${activeTab === "details" ? "tab-active" : ""}`} onClick={() => setActiveTab("details")}>
          Details
        </a>
        <a
          className={`tab ${activeTab === "specifications" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("specifications")}
        >
          Specifications
        </a>
        <a className={`tab ${activeTab === "reviews" ? "tab-active" : ""}`} onClick={() => setActiveTab("reviews")}>
          Reviews
        </a>
      </div>

      <div className="mt-4">
        {activeTab === "details" && (
          <div className="prose max-w-none">
            <p>
              This electronics soldering fume absorber is designed to provide a clean and safe working environment by
              effectively removing harmful fumes generated during soldering processes. Its compact form factor and
              efficient performance make it an essential tool for electronics professionals and hobbyists alike.
            </p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="prose max-w-none">
            <ul>
              <li>Voltage: 110V/220V AC</li>
              <li>Power: 23W</li>
              <li>Air Flow: 1.0-1.3m³/min</li>
              <li>Noise Level: ≤45dB</li>
              <li>Filter: Activated Carbon</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Write Your Own Review</h2>
            <p className="text-gray-600">
              Only registered users can write reviews. Please{" "}
              <a href="#" className="link link-primary">
                Sign in
              </a>{" "}
              or{" "}
              <a href="#" className="link link-primary">
                create an account
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
    <div>
      <InterestProducts></InterestProducts>
    </div>
    </div>
    </div>
  );
}

export default ProductDetailsCard;
