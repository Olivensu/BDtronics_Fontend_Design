'use client'
import { useState } from "react"

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
      email: "tasbiulhasan08@gmail.com",
      name: "",
      address: "84 Mogbazar, Dhaka, Bangladesh",
      country: "Bangladesh",
      city: "",
      phone: "01748541038",
    })
  
    const cities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal", "Rangpur", "Mymensingh"]
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle form submission
      console.log("Form submitted:", formData)
    }
  
    return (
      <div className="container mx-auto p-4 max-w-[1280px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shipping Address Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
  
              {/* Email Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Email Address <span className="text-red-500">*</span>
                  </span>
                  <span className="label-text-alt">
                    <div className="tooltip" data-tip="We'll send your order confirmation here">
                      <button className="btn btn-circle btn-ghost btn-xs">?</button>
                    </div>
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
                <label className="label">
                  <span className="label-text-alt text-gray-600">You can create an account after checkout.</span>
                </label>
              </div>
  
              {/* Name Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
  
              {/* Address Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Address <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  name="address2"
                  className="input input-bordered w-full mt-2"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              </div>
  
              {/* Country Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Country <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="Bangladesh">Bangladesh</option>
                </select>
              </div>
  
              {/* City Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    City <span className="text-red-500">*</span>
                  </span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="">-- Select City --</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                {!formData.city && (
                  <label className="label">
                    <span className="label-text-alt text-red-500">This is a required field.</span>
                  </label>
                )}
              </div>
  
              {/* Phone Number Field */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Phone Number <span className="text-red-500">*</span>
                  </span>
                  <span className="label-text-alt">
                    <div className="tooltip" data-tip="For delivery updates">
                      <button className="btn btn-circle btn-ghost btn-xs">?</button>
                    </div>
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
          </div>
  
          {/* Shipping Methods Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-semibold mb-4">Shipping Methods</h2>
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-4">
                  <input type="radio" name="shipping" className="radio" checked readOnly />
                  <div>
                    <div className="font-medium">Standard (1-2 days)</div>
                    <div className="text-sm text-gray-600">Home Delivery</div>
                  </div>
                  <span className="ml-auto">BDT 76.00</span>
                </label>
              </div>
            </div>
          </div>
  
          {/* Next Button */}
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default CheckoutPage