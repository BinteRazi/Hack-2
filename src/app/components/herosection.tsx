import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#F0F2F3] w-full flex flex-col md:flex-row md:w-[80%] md:p-4 md:h-[30rem] md:items-center mx-auto max-w-screen-lg">
        {/* Left Section */}
        <div className="flex flex-col p-4 w-full md:w-3/4 md:ml-20 space-y-4 text-center md:text-left">
          <p className="text-[#272343] text-sm md:text-base">WELCOME TO CHAIRY</p>
          <p className="text-[#272343] font-bold text-2xl md:text-4xl">
            Best Furniture Collection for your interior.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/shop"
              className="bg-[#029FAE] rounded-lg flex items-center justify-center py-2 px-4 text-white gap-3 w-full sm:w-1/2 md:w-1/3 whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                Shop Now
                <Image
                  src="/icons/right-arrow.png"
                  alt="Arrow Icon"
                  width={20}
                  height={20}
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex justify-center items-center p-4">
          <Image
            src="/images/Product-1.png"
            alt="Product Image"
            width={250}
            height={250}
            className="w-[150px] md:w-[200px] lg:w-[250px] object-contain"
          />
        </div>
      </div>

      {/* Bottom Bar with Logos */}
      <div className="bg-white flex flex-wrap justify-center items-center gap-4 py-4 border-t">
        {[
          { src: "/images/Logo-1.png", alt: "Logo 1" },
          { src: "/images/Logo-2.png", alt: "Logo 2" },
          { src: "/images/Logo-3.png", alt: "Logo 3" },
          { src: "/images/Logo-4.png", alt: "Logo 4" },
          { src: "/images/Logo-5.png", alt: "Logo 5" },
          { src: "/images/Logo-6.png", alt: "Logo 6" },
          { src: "/images/Logo-7.png", alt: "Logo 7" },
        ].map((logo, index) => (
          <div key={index} className="w-16 h-12 relative">
            <Image
              src={logo.src}
              alt={logo.alt}
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
