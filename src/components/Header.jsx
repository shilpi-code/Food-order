import React from "react";
import Logo from "../img/logo.png";
import Avatar from '../img/avatar.png'
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="fixed z-50 w-screen p-6 px-16">
        {/* For desktop and tablets */}
        <div className="hidden md:flex w-full h-full">
          <div className="flex items-center gap-2">
            <img src={Logo} className="w-10 object-cover" alt="Logo" />
            <p className="text-xl font-bold">City</p>
          </div>

          <ul className="flex items-center ml-auto gap-4">
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex justify-center items-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-2 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full h-8 w-8 bg-cartNumBg">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <motion.img
              whileTap={{ scale: 0.6 }} src={Avatar} className="w-10 ml-2 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer" alt="user-profile" />
        </div>
        {/* For mobile */}
        <div className="block md:hidden w-full h-full p-4"></div>
      </div>
    </>
  );
};

export default Header;
