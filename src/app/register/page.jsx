

"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";


export default function CustomerRegister() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
 
      <h1 className="text-2xl font-semibold text-center mb-8">Create New Customer Account</h1>

      <div className="max-w-[500px]  mx-auto ">
        {/* Login Section */}
        <div className="p-6 bg-white rounded-lg shadow-sm border">
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
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                  type="number"
                  id="password"
                  name="email"
                  className="w-full pr-10 input input-bordered"
                  required
                />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Address
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
              
              <button type="submit" className="bg-blue w-full rounded-xl px-5 py-2 text-black">
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
