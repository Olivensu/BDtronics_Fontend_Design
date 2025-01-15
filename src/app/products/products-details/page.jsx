import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function ProductCard() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex">
          <img
            src="path/to/image.png"
            alt="8S 1.2A Active Balancer Equalizer"
            className="w-1/3 rounded-lg"
          />
          <div className="ml-6 flex-1">
            <h1 className="text-xl font-semibold text-gray-800">
              8S 1.2A Active Balancer Equalizer for 12V LFP NCM Li-ion LiFePO4 Battery
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Inductive Active Equalizer LiFePO4 8S battery pack. Balance current up to 1.2A with ±15mv balance accuracy. Low current consumption only &lt;11mA (300uA when idle).
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-600">SKU: BTS-00004840</p>
              <p className="text-sm text-gray-600">SF Code: B3</p>
            </div>
            <div className="mt-4">
              <span className="text-lg font-semibold text-red-600">৳ 1,840.00</span>
              <span className="ml-2 text-sm text-gray-400 line-through">৳ 2,080.00</span>
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
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
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
              <p className="text-sm text-gray-600">Quality product guaranteed</p>
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
  );
}

export default ProductCard;
