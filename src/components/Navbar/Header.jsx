'use client';
import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Autocomplete from '@mui/material/Autocomplete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import SportsIcon from '@mui/icons-material/Sports';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import StyleIcon from '@mui/icons-material/Style';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import Face4Icon from '@mui/icons-material/Face4';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Link from 'next/link';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import { useEffect,useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {
  // console.log(items.length);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  // const [products, setProducts] = useState([])
  // const [inputValue, setInputValue] = useState('');

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <div className='flex items-center justify-center mt-5'>
     {/* <Autocomplete
      sx={{ mx: '10px', flex: 1 }}
      freeSolo
      id="free-solo-2-demo"
      className=""
      disableClearable
      options={products}
      getOptionLabel={(option) => option.name}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your Desired items..."
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
      onChange={handleProductSelection}
    /> */}
      {/* <button className='btn bg-orange hover:bg-green '><SearchIcon   className=''/></button> */}
      <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
      
     </div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className='mt-5'></div>
      <Divider />
      <ul className=" ml-[-9px] w-56 mt-2 py-3 bg-white  z-50 cursor-pointer">
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/mobile-and-laptops`}>
                        {" "}
                        <BookOnlineIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BookOnlineIcon>{" "}
                        Mobile & Laptops
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/gaming-entertainment`}>
                        {" "}
                        <SportsEsportsIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SportsEsportsIcon>{" "}
                        Gaming Entertainment
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/image-and-video`}>
                        {" "}
                        <CameraRollIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></CameraRollIcon>{" "}
                        Image & Video
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/vehicles`}>
                        {" "}
                        <BikeScooterIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BikeScooterIcon>{" "}
                        Vehicles
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/furnitures`}>
                        {" "}
                        <BedroomParentIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BedroomParentIcon>{" "}
                        Furnitures
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/sport`}>
                        {" "}
                        <SportsIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SportsIcon>{" "}
                        Sport
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/food-and-drinks`}>
                        {" "}
                        <FastfoodIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></FastfoodIcon>{" "}
                        Food & Drinks
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/fashion-accessories`}>
                        {" "}
                        <StyleIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></StyleIcon>{" "}
                        Fashion Accessories
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/toilet-and-sanitation`}>
                        {" "}
                        <SanitizerIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SanitizerIcon>{" "}
                        Toilet & Sanitation
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/makeup-corner`}>
                        {" "}
                        <Face4Icon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></Face4Icon>{" "}
                        Makeup Corner
                      </Link>
                    </li>
                    <li  className = 'py-3 my-1 ml-6 '>
                      <Link  href={`/categories/baby-items`}>
                        {" "}
                        <ChildFriendlyIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></ChildFriendlyIcon>{" "}
                        Baby Items
                      </Link>
                    </li>
                  </ul>
    </Box>
  );
  
  const handleProductSelection = (event, selectedProduct) => {
    if (selectedProduct) {
      // Navigate to the product detail page using the product's _id
      navigate(`/product/${selectedProduct._id}`);
      
      // Clear the input field by resetting the inputValue state
      setTimeout(() => {
        setInputValue('');
      }, 100);
    }
    // setInputValue('');
  };

  return (
    <div className="">
      <div className=' h-9 bg-[#F3F4F6] p-[6px] hidden md:block'>
        <div className='mx-auto max-w-[1260px] flex text-sm items-center'>
          <CallIcon />
          <p className='ml-1 mr-1 '>01974 277 797 </p>
          <p> (10:00AM to 7:00PM, Friday Closed)</p>
          <div className='flex ml-4 items-center'>
          <MailIcon />
            <p className='ml-1'>info@bdtronics.com</p>
          </div>
          
        </div>
      </div>
      {/* <div className="flex sm:flex-col md:flex-row  justify-between max-w-screen-xl mx-auto">
        <div className="flex justify-start items-center my-2">
          <span className="mx-4">Account</span>
          <span className="mx-4">Track Order</span>
          <span className="mx-4">Support</span>
        </div>
        <div className="flex justify-end md:inline sm:hidden">
          <select className="select select-ghost border-0">
            <option className=" text-lg" disabled selected>
              United State
            </option>
            <option className=" text-lg">Bangladesh</option>
            <option className=" text-lg">India</option>
            <option className=" text-lg">China</option>
          </select>
          <select className="select select-ghost border-0">
            <option className=" text-lg" disabled selected>
              USD
            </option>
            <option className=" text-lg">BDT</option>
          </select>
          <select className="select select-ghost border-0">
            <option className=" text-lg" disabled selected>
              English
            </option>
            <option className=" text-lg">Bangla</option>
          </select>
        </div>
      </div>
      <hr /> */}

      <div className="flex justify-between items-center max-w-screen-xl  lg:mt-0 mx-auto my-2 md:my-0">
        <Link href="/">
          <img className="w-24 md:w-28 lg:w-36 ml-3 " src='/img/bdtronics_logo_8.webp' alt="olivs" />
        </Link>
        {/* <IconButton sx={{  }} aria-label="menu">
        <img className='w-2/3 md:w-full' src={second} alt="" />
      </IconButton> */}
        {/* <InputBase
        
        placeholder="Search your Desire items..."
        inputProps={{ 'aria-label': 'search google maps' }}
      /> */}
        {/* <Autocomplete
      sx={{ mx: '10px', flex: 1 }}
      freeSolo
      id="free-solo-2-demo"
      className=""
      disableClearable
      options={products}
      getOptionLabel={(option) => option.name}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your Desired items..."
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
      onChange={handleProductSelection}
    /> */}
        {/* <button className="btn bg-orange hover:bg-green md:px-5 ">
          <SearchIcon className="" />
        </button> */}
        {/* <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label> */}

<div className="relative w-full max-w-3xl">
      <label className="relative flex w-full items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-full outline-4 border-warning border border-gray-200 bg-white px-4 py-2 pr-12 text-sm focus:border-blue focus:outline-none focus:ring-2 focus:ring-warning/20"
        />
        <button 
          type="submit" 
          className="absolute right-0 flex h-full items-center justify-center rounded-r-full bg-warning px-4 text-white hover:bg-warning/90 focus:outline-none focus:ring-2 focus:ring-warning/20"
        >
          <SearchIcon className="text-black" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-90"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg> */}
        </button>
      </label>
    </div>
        <div className="flex justify-end items-center">
          <Link href='/cart'><div className="hidden lg:inline mr-[-10px] ml-1">
            <div>
              {/* <Divider sx={{ height: 28, m: 1 }} orientation="vertical" /> */}
              <IconButton
                color="primary"
                sx={{ p: "" }}
                aria-label="directions"
              >
                <AddShoppingCartIcon style={{ fontSize: "2rem" }} />
              </IconButton>
            </div>
            <Link  href="cart-item">
              <p className="text-xs inline absolute mt-[-50px] ml-3 bg-blue px-1 rounded-full">
                {/* {items.length} */}
              </p>
            </Link>
          </div></Link>
          {/* <Divider sx={{ height: 28, m: 1 }} orientation="vertical" /> */}
         
        </div>
      </div>
      <div className="bg-yellow pt-2 mx-auto  lg:mt-0">
        <div className="mx-2 md:mx-10">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="inline lg:hidden">
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon />
                  </Button>
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </div>

            <ul className="menu hidden lg:inline bg-white w-56 rounded-t-xl ml-3">
              <li>
                <details>
                  <summary>
                    <MenuIcon />{" "}
                    <span className="text-black">All Categories</span>
                  </summary>
                  <ul className="absolute ml-[-9px] shadow-orange shadow-2xl w-56 mt-2 py-3 bg-white  z-50">
                    <li>
                      <Link  href={`/categories/mobile-and-laptops`}>
                        {" "}
                        <BookOnlineIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BookOnlineIcon>{" "}
                        Mobile & Laptops
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/gaming-entertainment`}>
                        {" "}
                        <SportsEsportsIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SportsEsportsIcon>{" "}
                        Gaming Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/image-and-video`}>
                        {" "}
                        <CameraRollIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></CameraRollIcon>{" "}
                        Image & Video
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/vehicles`}>
                        {" "}
                        <BikeScooterIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BikeScooterIcon>{" "}
                        Vehicles
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/furnitures`}>
                        {" "}
                        <BedroomParentIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></BedroomParentIcon>{" "}
                        Furnitures
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/sport`}>
                        {" "}
                        <SportsIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SportsIcon>{" "}
                        Sport
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/food-and-drinks`}>
                        {" "}
                        <FastfoodIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></FastfoodIcon>{" "}
                        Food & Drinks
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/fashion-accessories`}>
                        {" "}
                        <StyleIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></StyleIcon>{" "}
                        Fashion Accessories
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/toilet-and-sanitation`}>
                        {" "}
                        <SanitizerIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></SanitizerIcon>{" "}
                        Toilet & Sanitation
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/makeup-corner`}>
                        {" "}
                        <Face4Icon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></Face4Icon>{" "}
                        Makeup Corner
                      </Link>
                    </li>
                    <li>
                      <Link  href={`/categories/baby-items`}>
                        {" "}
                        <ChildFriendlyIcon
                          color="warning"
                          style={{ fontSize: "1.5rem" }}
                        ></ChildFriendlyIcon>{" "}
                        Baby Items
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <div className="flex w-full justify-between item-center lg:hidden">
              <ul className="menu">
                <Link  href="/shop">
                  <li>
                    <p className='p-0'>
                      <StorefrontIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></StorefrontIcon>{" "}
                      Shop
                    </p>
                  </li>
                </Link>
              </ul>
              <Link  href="/categories">
                <ul className="menu">
                  <li>
                    <p className='p-0'>
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
                <Link  href='/orders'><li>
                  <p className='p-0'>
                    <ShoppingCartIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></ShoppingCartIcon>{" "}
                    Orders
                  </p>
                </li></Link>
              </ul>
            </div>
            <div className="flex lg:flex hidden lg:inline">
              <Link  href="/">
                <ul className="menu ml-3">
                  <li>
                    <p>
                      <HomeIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></HomeIcon>{" "}
                      Home
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu ml-3">
                <Link  href="/shop">
                  <li>
                    <p>
                      <StorefrontIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></StorefrontIcon>{" "}
                      Shop
                    </p>
                  </li>
                </Link>
              </ul>
              <Link  href="/categories">
                <ul className="menu ml-3">
                  <li>
                    <p>
                      <LibraryBooksIcon
                        color="black"
                        style={{ fontSize: "1.5rem" }}
                      ></LibraryBooksIcon>{" "}
                      Categories
                    </p>
                  </li>
                </ul>
              </Link>
              <ul className="menu ml-3">
              <Link  href='/orders'><li>
                  <p>
                    <ShoppingCartIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></ShoppingCartIcon>{" "}
                    Orders
                  </p>
                </li></Link>
              </ul>
              <ul className="menu ml-3">
                <Link  href='/address-book'><li>
                  <p>
                    <LocalShippingIcon
                      color="black"
                      style={{ fontSize: "1.5rem" }}
                    ></LocalShippingIcon>{" "}
                    Delivery Address
                  </p>
                </li></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header 