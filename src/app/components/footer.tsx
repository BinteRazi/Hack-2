import React from "react";
import Image from "next/image";
import Link from "next/link";

const Socials = ({ img }: { img: string }) => (
  <div>
    <Image src={img} alt="Social Icon" width={30} height={30} />
  </div>
);

export default function Footer() {
  return (
    <div className="border-t-2 p-2 w-full">
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-32">
        {/* Logo and About Section */}
        <div className="w-[80%] p-2">
          <div className="flex flex-row items-center gap-1">
            <Image src="/images/Logo.png" alt="Logo" width={40} height={40} />
            <h1 className="text-[#272343] font-bold text-xl">Comforty</h1>
          </div>
          <p className="text-[#272343] opacity-60">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex gap-4 p-4">
            <Socials img="/icons/facebook-icon.png" />
            <Socials img="/icons/twitter-icon.png" />
            <Socials img="/icons/instagram-icon.png" />
            <Socials img="/icons/pinterest-icon.png" />
            <Socials img="/icons/youtube-icon.png" />
          </div>
        </div>

        {/* Category and Support Links */}
        <div className="flex justify-evenly md:gap-32 md:pt-2 md:pb-2">
          <div>
            <h1 className="text-2xl text-[#272343] opacity-60 font-bold">
              Category
            </h1>
            <ul>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Arm Chair
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Wing Chair
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Desk Chair
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Wooden Chair
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Park Bench
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl text-[#272343] opacity-60 font-bold">
              Support
            </h1>
            <ul>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline hover:text-[#007580]">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>

       {/* Newsletter Section */}
{/* Newsletter Section */}
<div className="mt-5 w-full p-2">
  <h1 className="text-lg text-[#272343] opacity-60 font-bold">
    NEWSLETTERS
  </h1>
  <div className="w-full flex gap-4 mt-2">
    <input
      type="text"
      className="border-2 border-gray-200 p-2 flex-grow"
      placeholder="your email"
    />
    <button className="bg-[#007580] text-white text-sm rounded-lg px-4">
      <Link href="">Subscribe</Link>
    </button>
  </div>
  <p className="mt-4 text-gray-500 text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
  </p>
</div>
</div>


{/* Footer Bottom Section */}
<div className="text-sm flex flex-col border-t-2 w-full items-center pt-4">
 
  <div className="flex w-full items-center justify-between px-4">
    {/* Text Section */}
    <div className="flex items-center gap-1">
      <p className="text-[#272343] opacity-50">
        @ 2021 - Blogy - Designed & Developed by{" "}
      </p>
      <span className="text-black opacity-100">Zakirsoft</span>
    </div>
</div>
   
  </div>
</div>


  );
}
