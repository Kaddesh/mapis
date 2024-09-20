import Image from 'next/image';
import React from 'react';
import { IoSearch, IoChevronDown } from 'react-icons/io5';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const Topbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-1 bg-white shadow-md mb-5">
    
      <div className="flex items-center">
        <MdOutlineKeyboardArrowLeft className="text-xl mr-2 text-[#667185]" />
        <p className="text-base font-medium text-[#667185]">Back</p>
      </div>
      
      <div className='flex gap-10'>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search here..."
          className="w-[450px] p-1 pl-10 border rounded-md focus:outline-none"
        />
        <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#667185]" />
      </div>

      <div className="flex items-center gap-4">
      <Image src="/assets/notification.svg" alt="logo" width={19} height={23} className='text-[#667185]' />
        <Image src="/assets/comTop.svg" alt="logo" width={23} height={22} className='text-[#667185]' />
        <div className="flex items-center gap-2">
          <img
            src="/assets/Image.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <IoChevronDown className="text-xl text-[#667185]" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Topbar;
