"use client";
import React, { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdInventory, MdExpandMore, MdExpandLess } from "react-icons/md";
import {
  FaQuoteLeft,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaRegComments,
} from "react-icons/fa";
import { BsFileText, BsClipboardData } from "react-icons/bs";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const [isProcurementOpen, setProcurementOpen] = useState(false);
  const [isFinancesOpen, setFinancesOpen] = useState(false);

  return (
    <main className="flex flex-col justify-between w-[272px] h-full bg-[#F7F9FC] text-[#101928] text-sm p-6">
    <div>
      <Image src="/assets/logo-main.svg" alt="logo" width={224} height={40} />

      <ul className="space-y-6 mt-8 text-sm">
        <li className="flex items-center space-x-2 cursor-pointer">
          <Image src="/assets/grid-2.svg" alt="logo" width={20} height={20} />
          <span>Dashboard</span>
        </li>

        <li className="flex items-center space-x-2 cursor-pointer">
          <Image src="/assets/box.svg" alt="logo" width={20} height={20} />
          <span>Inventory</span>
        </li>

        <li className="flex items-center space-x-2 cursor-pointer">
          <div className="flex space-x-2">
          <Image src="/assets/icon.svg" alt="logo" width={20} height={20} />
          <span>Procurement</span>
          </div>
          <span
            className="pl-20 cursor-pointer"
            onClick={() => setProcurementOpen(!isProcurementOpen)}
          >
            {isProcurementOpen ? <MdExpandLess /> : <MdExpandMore />}
          </span>
        </li>
       
        {isProcurementOpen && (
          <ul className="ml-8 space-y-2">
            <li>What</li>
            <li>Suppliers</li>
          </ul>
        )}

        <li className="flex items-center space-x-2 cursor-pointer ml-7">
          <span>Quotes</span>
        </li>

        <li className="flex items-center space-x-2 cursor-pointer ml-7">
          <span>Orders</span>
        </li>

        <li className="flex items-center justify-between cursor-pointer">
          <div className="flex space-x-2">
          <Image src="/assets/money-1.svg" alt="logo" width={20} height={20} />
          <span>Finance</span>
          </div>
          <span
            className="ml-auto cursor-pointer"
            onClick={() => setFinancesOpen(!isFinancesOpen)}
          >
            {isFinancesOpen ? <MdExpandLess /> : <MdExpandMore />}
          </span>
        </li>
       
        {isFinancesOpen && (
          <ul className="ml-8 space-y-2">
            <li>Revenue</li>
            <li>Expenses</li>
          </ul>
        )}

        <li className="flex items-center justify-between space-x-2 cursor-pointer">
          <div className="flex gap-2">
            <Image src="/assets/chats.svg" alt="logo" width={20} height={20} />
            <span>Communication</span>
          </div>
          <div className="text-[8px] text-white px-3 rounded-full bg-blue-700">
            10
          </div>
        </li>

        <li className="flex items-center justify-between space-x-2 cursor-pointer">
          <div className="flex gap-2">
            <Image
              src="/assets/calendar-alt.svg"
              alt="logo"
              width={20}
              height={20}
            />
            <span>Calendar</span>
          </div>
          <div className="text-[8px] text-white px-3 rounded-full bg-blue-700">
            10
          </div>
        </li>

        <li className="flex items-center space-x-2 cursor-pointer">
          <Image src="/assets/sign-doc.svg" alt="logo" width={20} height={20} />
          <span>Contract</span>
        </li>
      </ul>
    </div>

    <div className="flex flex-col gap-10">
      <div>
      <ul className="space-y-6 mt-8 text-sm">
        <li className="flex items-center space-x-2 cursor-pointer">
          <Image src="/assets/question-circle.svg" alt="logo" width={20} height={20} />
          <span>Contract</span>
        </li>

        <li className="flex items-center space-x-2 cursor-pointer">
          <Image src="/assets/settings.svg" alt="logo" width={20} height={20} />
          <span>Settings</span>
        </li>
        </ul>
      </div>
      
        <div className="flex items-center justify-between gap-3">
        <img
            src="/assets/imageBotom.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="flex flex-col text-sm">
            <h4 className="font-semibold">Mark Benson</h4>
            <p>markbenson@core...</p>
          </div>
          <Image src="/assets/botomIcon.svg" alt="logo" width={20} height={20} className="cursor-pointer" />
        </div>
    </div>
    </main>
  );
};

export default Sidebar;
