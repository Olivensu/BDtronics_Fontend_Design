

"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


export default function CustomerRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
  
  <button
        className="btn btn-primary"
        onClick={() => setIsOpen(true)}
      >
        Open Drawer
      </button>
    <div className="relative z-50">
      

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          width: window.innerWidth < 768 ? '100%' : '400px',
        }}
      >
        <button
          className="btn btn-sm btn-circle absolute top-2 right-2"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <div className="p-4">
          <h2 className="text-lg font-bold">Shop by Categories</h2>
          <ul className="menu menu-compact mt-4">
            <li>
              <a href="#how-to-order">How to Order</a>
            </li>
            <li>
              <a href="#3d-printing">3D Printing Service</a>
            </li>
            <li>
              <a href="#solar-calculator">Solar Calculator</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#facebook">Facebook Page</a>
            </li>
            <li>
              <a href="#youtube">YouTube Channel</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
 
      <h1 className="text-2xl font-semibold text-center mb-8">Create New Customer Account</h1>

      <div className="grid md:grid-cols-2 gap-8 ">
        {/* Login Section */}
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Login Information</h2>
          <p className="text-gray-600 mb-6">
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                  type="text"
                  id="password"
                  name="email"
                  className="w-full pr-10 input input-bordered"
                  required
                />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full pr-10 input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full pr-10 input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              
              <button type="submit" className="bg-warning rounded-4xl px-5 py-2 text-black">
                Register
              </button>
            </div>
          </form>
        </div>

        {/* New Customers Section */}
        
      </div>
    </div>
  );
}
