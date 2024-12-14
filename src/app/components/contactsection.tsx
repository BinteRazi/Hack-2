import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const ContactSection = () => {
  return (
    <div className="w-full max-w-screen-xl h-auto bg-[#F4F4F4] flex flex-wrap items-center justify-center sm:justify-between px-6 sm:px-8 py-8 gap-8">
      {/* High Quality Section */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-auto">
          <Image
            src="/icons/trophy-1.png"
            alt="High Quality Icon"
            width={337}
            height={70}
          />
        </div>
        <div>
          <h2
            className={`${poppins.className} font-semibold text-lg sm:text-xl lg:text-2xl`}
          >
            High Quality
          </h2>
          <p
            className={`${poppins.className} font-medium text-sm sm:text-base lg:text-lg text-[#898989]`}
          >
            Crafted from top materials
          </p>
        </div>
      </div>

      {/* Warranty Protection Section */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-auto">
          <Image
            src="/icons/guarantee.png"
            alt="Warranty Icon"
            width={337}
            height={60}
          />
        </div>
        <div>
          <h2
            className={`${poppins.className} font-semibold text-lg sm:text-xl lg:text-2xl`}
          >
            Warranty Protection
          </h2>
          <p
            className={`${poppins.className} font-medium text-sm sm:text-base lg:text-lg text-[#898989]`}
          >
            Over 2 years
          </p>
        </div>
      </div>

      {/* 24/7 Support Section */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-auto">
          <Image
            src="/icons/customer-support.png"
            alt="Support Icon"
            width={337}
            height={60}
          />
        </div>
        <div>
          <h2
            className={`${poppins.className} font-semibold text-lg sm:text-xl lg:text-2xl`}
          >
            24 / 7 Support
          </h2>
          <p
            className={`${poppins.className} font-medium text-sm sm:text-base lg:text-lg text-[#898989]`}
          >
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
