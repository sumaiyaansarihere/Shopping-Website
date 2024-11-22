import React from 'react'; // Correct import statement
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const HeaderTop = () => {
  return <div className="border-b text-blackish bg-accent hidden sm:block">
    <div className="container py-4">
        <div className="flex justify-between items-center">
            <div className="hidden lg:flex gap-1">
                <div className="header_top__icon_wrapper">
                    <BsFacebook />
                </div>
                <div className="header_top__icon_wrapper">
                    <FaInstagramSquare />
                </div>
                <div className="header_top__icon_wrapper">
                    <FaTwitter />
                </div>
                <div className="header_top__icon_wrapper">
                    <ImLinkedin />
                </div>
            </div>
            <div className="text-gray-600 text-[12px]">
                <b>FREE SHIPPING</b> <b>THIS WEEK ORDER OVER - $55</b>
            </div>

            <div className="flex gap-4">
                <select 
                className="text-gray-600 text-[12px] w-[70px]"
                name="currency"
                id="currency"
                >
                    <option value="USD $">USD $</option>
                    <option value="EUR €">EUR €</option>
                    <option value="INR">INR</option>


                </select>
                <select 
                className="text-gray-600 text-[12px] w-[80px]"
                name="language"
                id="language">
                     <option value="English">English</option>
                     <option value="French">French</option>
                    
                </select>
              
            </div>
        </div>
    </div>
  </div>;
};

export default HeaderTop;
