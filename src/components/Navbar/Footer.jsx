"use client";
import { useState } from "react";
import Link from "next/link"
import { Mail, Phone, Clock, Facebook, Youtube, Twitter } from "lucide-react"
import { HomeIcon, HeartIcon, UserIcon, ShoppingCartIcon } from "lucide-react";
import { Delete, Edit } from "@mui/icons-material";

import ListIcon from "@mui/icons-material/List";


const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false);
  return (
    <div>
      
    <footer className="md:hidden z-20 fixed bottom-4 left-4 right-4 bg-blue rounded-2xl shadow-md shadow-gray">
    {/* <button
                onClick={() => setIsOpen(true)}
                className="flex items-center bg-red px-3 rounded-t-xl text-white"
              >
                <ListIcon color="white" style={{ fontSize: "2rem" }}></ListIcon>
                <p className="ml-2 ">Menu</p>
              </button> */}

              <div className="relative z-50 text-black">
                <div
                  className={`w-full md:w-[400px] fixed top-0 left-0 h-full bg-blue shadow-lg transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full "
                  }`}
                  // style={{
                  //   width: typeof window !== "undefined" && window.innerWidth < 768 ? "100%" : "400px",
                  // }}
                >
                  <button
                    className="btn btn-sm btn-circle bg-red text-white absolute top-4 right-2"
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>

                  <div className="">
                    <h2 className="font-bold bg-red py-4 pl-5 text-2xl">
                      Shop by Categories
                    </h2>
                    <ul className="menu menu-compact divide-red divide-y-2">
                      <li>
                        <Link href="#how-to-order">How to Order</Link>
                      </li>
                      <li>
                        <Link href="#3d-printing">3D Printing Service</Link>
                      </li>
                      <li>
                        <Link href="#solar-calculator">Solar Calculator</Link>
                      </li>
                      <li>
                        <Link href="#blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="#facebook">Facebook Page</Link>
                      </li>
                      <li>
                        <Link href="#youtube">YouTube Channel</Link>
                      </li>
                      <li>
                        <Link href="#contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="fixed top-0 left-0 w-full h-full "
                    onClick={() => setIsOpen(false)}
                  ></div>
                )}
              </div>
              <div className="z-50 ">
            <div
              className={`w-full md:w-[400px] fixed top-0 right-0 h-[100vh] px-5 bg-white shadow-lg transition-transform duration-300 ${
                isOpenCart ? "translate-x-0" : "translate-x-full"
              }`}
              // style={{
              //   width: typeof window !== "undefined" && window.innerWidth < 768 ? "100%" : "400px",
              // }}
            >
              {/* Close Button */}
              <button
                className="bg-red font-bold text-white py-1 px-2 rounded-full absolute top-4 right-4"
                onClick={() => setIsOpenCart(false)}
              >
                ✕
              </button>

              {/* Drawer Header */}
              <div className="bg-gray-200 py-4 px-5 border-b">
                <h2 className="text-2xl font-bold">My Cart</h2>
              </div>

              {/* Drawer Content with Fixed Footer */}
              <div className="flex flex-col h-full">
                {/* Cart Items - Scrollable */}
                <div className="flex-grow p-5 overflow-y-auto">
                  {/* Example Cart Item */}
                  <div className="mb-4 flex items-center">
                    <img
                      src="/img/product/14.webp"
                      alt="Product"
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">
                        2 x PCF8574 IO Expansion Board (I/O Expander with I2C)
                      </h3>
                      <p className="text-sm text-gray-600">PRD-00000018</p>
                      <p className="text-lg font-bold text-blue-500">
                        BDT 185.00
                      </p>
                      <div className="my-2">
                      <button className="p-1 bg-yellow rounded-full">
                        <Edit />
                      </button>
                      <button className="p-1 bg-yellow rounded-full ml-3">
                        <Delete />
                      </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 flex items-center">
                    <img
                      src="/img/product/13.webp"
                      alt="Product"
                      className="w-16 h-16 mr-4"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">
                        2 x WS2812B ARGB LED 5V Programmable Neopixels
                      </h3>
                      <p className="text-sm text-gray-600">BTS-00003914</p>
                      <p className="text-lg font-bold text-blue-500">
                        BDT 2,408.00
                      </p>
                      <div className="my-2">
                      <button className="p-1 bg-yellow rounded-full">
                        <Edit />
                      </button>
                      <button className="p-1 bg-yellow rounded-full ml-3">
                        <Delete />
                      </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer - Fixed at Bottom */}
                <div className="pb-20 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-bold">Subtotal:</p>
                    <p className="text-lg font-bold text-blue-500">
                      BDT 2,593.00
                    </p>
                  </div>
                  
                  <button className="btn bg-red text-white w-full mb-2">
                  <Link href='/checkout'>CHECKOUT</Link>
                  </button>
                  
                  <a
                    href="/cart"
                    className="block text-center text-blue-500 underline"
                  >
                    View and Edit Cart
                  </a>
                </div>
              </div>
            </div>

            {/* Overlay */}
            {isOpenCart && (
              <div
                className="fixed top-0 left-0 w-full h-full"
                onClick={() => setIsOpenCart(false)}
              ></div>
            )}
          </div>
      
      <nav className="flex justify-around items-center py-2">
        {/* Home Button */}
        <button onClick={() => setIsOpen(true)} className="flex flex-col items-center text-orange-500">
        <ListIcon color="white" style={{ fontSize: "2rem" }}></ListIcon>
          <span className="text-xs">Menu</span>
        </button>
        

        {/* Wishlist Button */}
        <button className="flex flex-col items-center text-gray-600">
          <HeartIcon className="w-6 h-6" />
          <span className="text-xs">Wishlist</span>
        </button>
        <button className="flex flex-col items-center text-orange-500">
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>

        {/* Profile Button */}
        <button className="flex flex-col items-center text-gray-600">
          <UserIcon className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>

        {/* Cart Button */}
        <button onClick={() => setIsOpenCart(true)} className="flex flex-col items-center text-gray-600 relative">
          <ShoppingCartIcon className="w-6 h-6" />
          <span className="text-xs">Cart</span>
          <span className="absolute top-0 right-[-12px] bg-purple text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </button>
      </nav>
    </footer>
      <footer className="bg-blue text-black py-12 px-4 md:px-6 lg:px-8 border-t-4 border-blue">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">ADDRESS</h3>
            <p className="text-gray-600">
              77/1 Fakirapool, Motijheel
              <br />
              Dhaka 1000, Bangladesh
            </p>

            <div className="space-y-2">
              <a href="mailto:info@bdtronics.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Mail className="h-4 w-4" />
                info@bdtronics.com
              </a>

              <div className="space-y-1">
                <a href="tel:01974277797" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Phone className="h-4 w-4" />
                  01974 277 797
                </a>
                <a href="tel:09613827797" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 pl-6">
                  09613 827 797
                </a>
              </div>

              <a
                href="https://wa.me/1234567890"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>

              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>
                  10:00am - 7:00pm
                  <br />
                  (Friday Off)
                </span>
              </div>
            </div>
          </div>

          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">COMPANY INFO</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="/training" className="block text-gray-600 hover:text-gray-900">
                Training
              </Link>
              <Link href="/careers" className="block text-gray-600 hover:text-gray-900">
                Careers
              </Link>
              <Link href="/affiliate" className="block text-gray-600 hover:text-gray-900">
                Affiliate Program
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">LEGAL</h3>
            <div className="space-y-2">
              <Link href="/terms-conditions" className="block text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="block text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">SUPPORT</h3>
            <div className="space-y-2">
              <Link href="/how-to-order" className="block text-gray-600 hover:text-gray-900">
                How to Order
              </Link>
              <Link href="/refund-policy" className="block text-gray-600 hover:text-gray-900">
                Refund Policy
              </Link>
              <Link href="/delivery-policy" className="block text-gray-600 hover:text-gray-900">
                Delivery Policy
              </Link>
              <Link href="/faqs" className="block text-gray-600 hover:text-gray-900">
                FAQs
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          {/* <div className="space-y-4 lg:col-span-1">
            <h3 className="font-semibold text-lg">NEWSLETTER</h3>
            <form className="space-y-4">
              <input type="email" placeholder="Enter your email address" className="w-full input border-blue" />
              <button className="w-full btn btn-primary text-white">SUBSCRIBE</button>
              <p className="text-xs text-gray-500">
                This form is protected by reCAPTCHA - the{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Google Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                apply.
              </p>
            </form>
          </div> */}
        </div>

        {/* Social Media Links */}
        {/* <div className="mt-12 flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600">Find us on:</p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div> */}
      </div>
      {/* <hr /> */}
      <div className="flex justify-around items-center rounded-2xl py-5 mt-5 bg-emerald-100">
      <p className="text-2xl font-semibold">Voltech.com</p>
      <p>Copyright © 2024 Voltech.com. All rights reserved.</p>
      
      </div>
      {/* <hr /> */}
    </footer>
    </div>
//     <div className='text-start'>
//         <footer className="footer p-10 bg-base-200 text-base-content">
//   <div>
//     <span className="footer-title text-xl">About Us</span> 
//     <p className="">Largest product search engine, maximum <br /> categorized online shopping mall and <br />quickest home delivery system.</p> 
//   </div> 
//   <div>
//     <span className="footer-title text-xl">Contact Us</span> 
//     <p className="">House #8, Road # 14, <br />
// Dhanmondi, Dhaka-1209.</p> 
//     <p className="">Email: support@shopo.com</p> 
//   </div> 
//   <div>
//     <span className="footer-title text-xl">Let Us Help You</span> 
//     <Link href='/profile' className="link link-hover">Your Account</Link> 
//     <Link href='/orders' className="link link-hover">Your Order</Link> 
//     <Link href='/terms-conditions' className="link link-hover">Terms & Conditions</Link> 
//     <Link href='/return-refund' className="link link-hover">Return & Refund Policy</Link>
//   </div> 
//   <div>
//     <span className="footer-title text-xl">Get ShopO App</span> 
//     <div>
//       {/* <img className='w-36' src={img} alt="" /> */}
//     </div>
//   </div>
// </footer> 
// <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
//   <div className="items-center grid-flow-col">
//     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
//     <p><span className='text-orange'>ShopO Ltd.</span> <br/>&copy; 2023 ShopO Limited. All rights reserved.</p>
//   </div> 
//   <div className="md:place-self-center md:justify-self-end">
//     <p>Follow Us:</p>
//     <div className="grid grid-flow-col gap-4">
//       <Link href='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link> 
//       <Link href='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
//       <Link href='#'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
//     </div>
//   </div>
// </footer>
//     </div>
  )
}

export default Footer