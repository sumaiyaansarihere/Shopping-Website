
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiUser } from 'react-icons/bi';

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-600 py-6">
      <div className="container sm:flex justify-between items-center">
        {/* Logo Section */}
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-gray-600">TheModestWear</div>

        {/* {search input section} */}
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-600 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter Product Name..."
          />
          <BsSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-600" size={20} />
        </div>

        {/* Icon Section */}
        <div className="hidden lg:flex gap-4 text-gray-600 text-[30px]">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
