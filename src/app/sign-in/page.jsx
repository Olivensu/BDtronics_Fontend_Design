

"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";


export default function CustomerLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-semibold text-center mb-8">Customer Login</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Login Section */}
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <p className="text-gray-600 mb-6">
            If you have an account, sign in with your email address.
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

            <div className="flex items-center justify-between">
              <Link href="#" className="text-sm text-primary hover:underline">
                Forgot Your Password?
              </Link>
              <button type="submit" className="bg-blue rounded-4xl px-5 py-2 text-black">
                SIGN IN
              </button>
            </div>
          </form>
        </div>

        {/* New Customers Section */}
        <div className="p-6 bg-white rounded-lg shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">New Customers</h2>
          <p className="text-gray-600 mb-6">
            Creating an account has many benefits: check out faster, keep more than one address, track orders and more.
          </p>
          <hr />
          <Link href='register'>
          <button className=" my-10 bg-blue rounded-4xl px-5 py-2 w-full  text-black">
            CREATE AN ACCOUNT
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
