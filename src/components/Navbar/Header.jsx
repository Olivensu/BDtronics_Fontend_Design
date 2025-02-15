"use client";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import ListIcon from "@mui/icons-material/List";
import { Delete, Edit } from "@mui/icons-material";
import SearchProductList from "../common/SearchItemList";
import { ShoppingCart, UserRound} from "lucide-react";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import RoofingOutlinedIcon from '@mui/icons-material/RoofingOutlined';

const Header = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleProductSelection = (event, selectedProduct) => {
    if (selectedProduct) {
      navigate(`/product/${selectedProduct._id}`);

      setTimeout(() => {
        setInputValue("");
      }, 100);
    }
  };

 

  return (
    <div className="">
      <div className=" h-9 bg-blue p-[6px] hidden md:block">
        <div className="mx-auto max-w-[1260px] flex text-sm items-center">
          <CallIcon />
          <p className="ml-1 mr-1 ">01974 277 797 </p>
          <p> (10:00AM to 7:00PM, Friday Closed)</p>
          <div className="flex ml-4 items-center">
            <MailIcon />
            <p className="ml-1">info@bdtronics.com</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-screen-xl mx-auto my-2 relative">
        <Link href="/">
          <img
            className="w-24 md:w-28 lg:w-36 ml-3 rounded-full"
            src="/img/icon/Voltech-Black.png"
            alt="olivs"
          />
        </Link>

        <div className="relative w-full max-w-3xl mx-5">
          <SearchProductList></SearchProductList>
        </div>
    
          
           <div className="flex mr-5">
           <div className="hidden md:inline ml-1">
            <Link href="#">
              <div>
                <button onClick={() => setIsOpenCart(true)}>
                  <ShoppingCart className="h-8 w-8" />
                </button>
              </div>
              </Link>
            </div>
          
          
            <div className="hidden md:inline ml-[30px]">
            <Link href="/sign-in">
              <div>
                  <UserRound className="h-8 w-8" />
              </div>
              </Link>
            </div>
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

          {/* <IconButton color="primary" sx={{ p: "" }} aria-label="directions">
            <ul className="menu">
              <li>
                <details>
                  <summary>
                    <AccountCircleIcon style={{ fontSize: "2rem" }} />
                  </summary>
                  <div className="absolute shadow-orange shadow-2xl bg-gray-light text-black p-2 rounded-xl ml-[-150px] w-64 mt-2   z-50">
                    <li>
                      <p>
                        <AccountCircleIcon />
                      </p>
                    </li>

                    <li className="mt-2">
                      <Link href="/sign-in">Sign In</Link>
                    </li>
                    <li>
                      <Link href="/register">
                        <div className="">
                          <div>Create an Account</div>
                        </div>
                      </Link>
                    </li>
                  </div>
                </details>
              </li>
            </ul>
          </IconButton> */}
        {/* </div> */}
      </div>
      <div className="bg-slate-200 mx-auto pt-[1px] lg:mt-0">
        <div className="mx-2 md:mx-10">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            {/* <div className="flex w-full justify-between item-center lg:hidden">
              <ul className="menu">
                <Link href="/products">
                  <li>
                    <p className="p-0">
                      <StorefrontIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></StorefrontIcon>{" "}
                      Products
                    </p>
                  </li>
                </Link>
              </ul>
              <Link href="/categories">
                <ul className="menu">
                  <li>
                    <p className="p-0">
                      <LibraryBooksIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></LibraryBooksIcon>{" "}
                      Categories
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu">
                <Link href="/orders">
                  <li>
                    <p className="p-0">
                      <ShoppingCartIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></ShoppingCartIcon>{" "}
                      Orders
                    </p>
                  </li>
                </Link>
              </ul>
            </div> */}
            <div className="flex lg:flex hidden lg:inline text-black ">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center bg-red px-3 rounded-t-xl text-white"
              >
                <ListIcon color="white" style={{ fontSize: "2rem" }}></ListIcon>
                <p className="ml-2 ">Shop by Categories</p>
              </button>

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
              <Link href="/">
                <ul className="menu ml-3  hover:text-red">
                  <li>
                    <p>
                      <RoofingOutlinedIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></RoofingOutlinedIcon>{" "}
                      Home
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu ml-3 hover:text-red">
                <Link href="/products">
                  <li>
                    <p>
                      <StorefrontIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></StorefrontIcon>{" "}
                      Products
                    </p>
                  </li>
                </Link>
              </ul>
              <Link href="/categories">
                <ul className="menu ml-3 hover:text-red">
                  <li>
                    <p>
                      <CategoryOutlinedIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></CategoryOutlinedIcon>{" "}
                      Categories
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu ml-3 hover:text-red">
                <Link href="/orders">
                  <li>
                    <p>
                      <ShoppingBasketOutlinedIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></ShoppingBasketOutlinedIcon>{" "}
                      Orders
                    </p>
                  </li>
                </Link>
              </ul>
              <ul className="menu ml-3 hover:text-red">
                <Link href="/blog">
                  <li>
                    <p>
                      <WidgetsOutlinedIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></WidgetsOutlinedIcon>{" "}
                      BLOG
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
