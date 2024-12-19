import React from 'react';
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#272343] w-full h-auto flex items-center justify-between px-4 py-2 sm:py-0">
      {/* Left Section */}
      <div className="flex items-center gap-2 text-[8px] sm:text-[10px]">
        <Image
          src="/icons/check.png"
          alt="Check Icon"
          width={16}
          height={14}
          className="w-[16px] h-[14px]"
        />
        <p className="text-white">
          Free shipping on all orders over <span className="hidden sm:inline">$50</span>
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[8px] sm:text-[10px]">
        {/* Language Selector */}
        <span className="flex items-center gap-1 text-white cursor-pointer">
          <p>Eng</p>
          <Image
            src="/images/arrow-down.png"
            alt="Arrow Down Icon"
            width={7}
            height={3.5}
            className="w-[7px] h-[3.5px]"
          />
        </span>

        {/* FAQs */}
        <span className="hidden sm:flex items-center text-white cursor-pointer">
          <p>FAQs</p>
        </span>

        {/* Need Help */}
        <span className="flex items-center gap-1 text-white cursor-pointer">
          <Image
            src="/images/alert.svg"
            alt="Alert Icon"
            width={16}
            height={14}
            className="w-[16px] h-[14px]"
          />
          <p>Need Help</p>
        </span>
      </div>
    </div>
  );
}
