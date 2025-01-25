'use client'
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ProductImgSlide } from "@/components/product-details/ProductImgSlide";
import { InterestProducts } from "@/components/product-details/interestProducts";
import Link from "next/link";

function ProductDetailsCard() {
  const [activeTab, setActiveTab] = useState("details")
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
          <div className="col-span-2">
            <h1 className="text-xl font-semibold text-gray-800">
              8S 1.2A Active Balancer Equalizer for 12V LFP NCM Li-ion LiFePO4
              Battery
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Inductive Active Equalizer LiFePO4 8S battery pack. Balance
              current up to 1.2A with ±15mv balance accuracy. Low current
              consumption only &lt;11mA (300uA when idle).
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-600">SKU: BTS-00004840</p>
              <p className="text-sm text-gray-600">SF Code: B3</p>
            </div>
            <div className="mt-4">
              <span className="text-lg font-semibold text-red-600">
                ৳ 1,840.00
              </span>
              <span className="ml-2 text-sm text-gray-400 line-through">
                ৳ 2,080.00
              </span>
            </div>
            <div className="mt-4 flex items-center">
              <input
                type="number"
                min="1"
                className="w-12 text-center border rounded-lg"
                defaultValue="1"
              />
              <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg flex items-center">
                <ShoppingCartIcon className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
          <div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-1  gap-4">
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
          </div>
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
