"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <header className="bg-gray-100 shadow-sm sticky top-0 z-50">
      {/* Top Section with Logo and Cart */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Comforty Logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold text-gray-800 ml-2">Comforty</h1>
        </div>

        {/* Cart Section */}
        <div className="relative flex items-center gap-4">
          <div className="bg-white flex items-center p-2 gap-2 shadow-md rounded-md cursor-pointer">
            {/* Cart Icon with Text */}
            <span className="flex items-center gap-1 text-gray-800">
              <Image
                src="/icons/Cart-2.png"
                alt="Cart Icon"
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
              />
              <p>Cart</p>
            </span>

            {/* Number Icon */}
            <span className="flex items-center text-gray-800">
              <Image
                src="/icons/No.png"
                alt="Number Icon"
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Links & Contact Section */}
      <nav className="bg-white py-2 border-t border-gray-200">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
          {/* Navigation Links */}
          <div className="flex space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-500 text-blue-700">
              Home
            </Link>
            <Link href="/shop" className="hover:text-blue-500 text-gray-700">
              Shop
            </Link>
            <Link href="/product" className="hover:text-blue-500 text-gray-700">
              Product
            </Link>
            {/* Handle Pages Link with Submenu */}
            <div
              className="relative"
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
            >
              <Link href="/pages" className="hover:text-blue-500 text-gray-700">
                Pages
              </Link>
              {showSubMenu && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded shadow-md">
                  <Link
                    href="/contact-us"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/faqs"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>
            <Link href="/about" className="hover:text-blue-500 text-gray-700">
              About
            </Link>
          </div>

          {/* Contact Section */}
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <span>Contact:</span>
            <span className="font-bold text-gray-900">(808) 555-0111</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
