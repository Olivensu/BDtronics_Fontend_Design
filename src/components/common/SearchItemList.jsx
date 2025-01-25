import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search";

const products = [
  {
    id: 1,
    name: "PAM8403 Digital Amplifier Board 2*3W Class D HW-104",
    image: "/img/product/10.webp",
    category: "In",
    price: 30.0,
  },
  {
    id: 2,
    name: "Hioki FT6031-03 Digital Earth Ground Resistance Tester (Japan)",
    image: "/img/product/10.webp",
    categories: ["In Meter & Oscilloscopes", "New Arrivals"],
    price: 39500.0,
  },
  {
    id: 3,
    name: "FNIRSI-1014D 100Mhz 2-Channel Digital Oscilloscope DSO with Signal Generator",
    image: "/img/product/10.webp",
    categories: ["In Meter & Oscilloscopes", "Shop by Brand", "New Arrivals"],
    price: 23860.0,
  },
  {
    id: 4,
    name: "2pcs 8.8mm*23mm Brushed DC Micro Motor CW CCW 8623 Coreless Motor for Model Aircraft Quadcopter",
    image: "/img/product/10.webp",
    categories: ["In RC Products", "Motors & Drivers", "Motor & Drivers"],
    price: 252.0,
  },
  {
    id: 5,
    name: "Wanptek 60V 5A Regulated DC Power Supply",
    image: "/img/product/10.webp",
    categories: ["In Other Power Supply", "New Arrivals", "Variable Power Supply", "Power Supply"],
    price: 16340.0,
  },
  {
    id: 6,
    name: "UNI-T UTP3315TFL-II DC Regulated Power Supply",
    image: "/img/product/10.webp",
    categories: ["In Other Power Supply", "Variable Power Supply", "Power Supply", "New Arrivals", "Shop by Brand"],
    price: 11270.0,
  },
  {
    id: 7,
    name: "DC Power Socket Female PCB Mount DC-005 Barrel Connector 5.5x2.1mm",
    image: "/img/product/10.webp",
    categories: ["In Wire, Cables & Connectors", "UNSORTED"],
    price: 8.0,
  },
  {
    id: 8,
    name: "DC Circuit Breaker MCB 63A 600VDC 6KA for Solar Panel PV 2P",
    image: "/img/product/10.webp",
    categories: ["In Solar Accessories", "New Arrivals"],
    price: 1400.0,
  },
]

const SearchProductList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredProducts = products.filter((product) => {
        const searchTerm = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          (product.category &&
            product.category.toLowerCase().includes(searchTerm)) ||
          (product.categories &&
            product.categories.some((cat) =>
              cat.toLowerCase().includes(searchTerm)
            ))
        );
      });
    
      // Handle search input change
      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
      return (
        <div className="container mx-auto relative">
          {/* Search Form */}
          <form className="mb-6 relative">
            <label className="relative flex w-full items-center">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full rounded-full outline-4 border border-gray-200 bg-white px-4 py-2 pr-12 text-sm focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                className="absolute right-0 flex h-full items-center justify-center rounded-r-full bg-blue px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <SearchIcon className="text-black" />
              </button>
            </label>
    
            {/* Products Dropdown */}
            {searchQuery.length >= 2 && (
              <div className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-80 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center space-x-4 p-4 hover:bg-gray-100 cursor-pointer"
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </div>
    
                      {/* Product Details */}
                      <div className="flex-grow">
                        <h3 className="text-sm font-medium text-gray-900">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {Array.isArray(product.categories)
                            ? product.categories.join(", ")
                            : product.category}
                        </p>
                        <p className="text-sm font-medium text-blue-600">
                          BDT {product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No products found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
  )
}

export default SearchProductList

