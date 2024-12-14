import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function Faqs() {
  return (
    <div>
      <Header />
      <Navbar />
      <>
        <div className="max-w-screen-xl mx-auto mt-16 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-[32px] sm:text-[48px] text-[#333333] font-bold mb-4">
            Questions Look Here
          </h1>

          <p className="text-[14px] sm:text-[16px] font-normal mb-8 text-[#4F4F4F]">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
           Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-24">
            {/** FAQ Section 1 */}
            <div>
              {/** FAQ Item */}
              <div className="bg-[#F7F7F7] p-6 w-full rounded-lg mb-6 text-left relative">
                <h3 className="text-[16px] sm:text-[18px] font-bold flex justify-between">
                  What types of chairs do you offer?
                </h3>
                <p className="mt-4 text-[14px] sm:text-[16px] font-bold text-[#4F4F4F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos
                  molestiae ipsa totam quidem?
                </p>
                <Image
                  src="/icons/Plus.png"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute top-4 right-4"
                />
              </div>

              {/** FAQ Item */}
              <div className="bg-[#F7F7F7] p-6 w-full rounded-lg mb-6 text-left relative">
                <h3 className="text-[16px] sm:text-[18px] font-bold flex justify-between">
                  Do your chairs come with a warranty?
                </h3>
                <p className="mt-4 text-[14px] sm:text-[16px] font-bold text-[#4F4F4F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos
                  molestiae ipsa totam quidem?
                </p>
                <Image
                  src="/icons/Plus.png"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute top-4 right-4"
                />
              </div>

              {/** FAQ Item */}
              <div className="bg-[#F7F7F7] p-6 w-full rounded-lg mb-6 text-left relative">
                <h3 className="text-[16px] sm:text-[18px] font-bold flex justify-between">
                  Can I try a chair before purchasing?
                </h3>
                <p className="mt-4 text-[14px] sm:text-[16px] font-bold text-[#4F4F4F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos
                  molestiae ipsa totam quidem?
                </p>
                <Image
                  src="/icons/Plus.png"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute top-4 right-4"
                />
              </div>
            </div>

            {/** FAQ Section 2 */}
            <div>
              {/** FAQ Item */}
              <div className="bg-[#F7F7F7] p-6 w-full rounded-lg mb-6 text-left relative">
                <h3 className="text-[16px] sm:text-[18px] font-bold flex justify-between">
                  How can we get in touch with you?
                </h3>
                <p className="mt-4 text-[14px] sm:text-[16px] font-bold text-[#4F4F4F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos
                  molestiae ipsa totam quidem?
                </p>
                <Image
                  src="/icons/Plus.png"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute top-4 right-4"
                />
              </div>

              {/** FAQ Item */}
              <div className="bg-[#F7F7F7] p-6 w-full rounded-lg mb-6 text-left relative">
                <h3 className="text-[16px] sm:text-[18px] font-bold flex justify-between">
                  What will be delivered? And When?
                </h3>
                <p className="mt-4 text-[14px] sm:text-[16px] font-bold text-[#4F4F4F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos
                  molestiae ipsa totam quidem?
                </p>
                <Image
                  src="/icons/Plus.png"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute top-4 right-4"
                />
              </div>

              {/** FAQ Item */}
              <div className="bg-[#F7F7F7] p-6 w-full rounded-lg text-left relative">
                <h3 className="text-[16px] sm:text-[18px] font-bold flex justify-between">
                  How do I clean and maintain my Comforty chair?
                </h3>
                <p className="mt-4 text-[14px] sm:text-[16px] font-bold text-[#4F4F4F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quis modi ullam amet debitis libero veritatis enim repellat
                  optio natus eum delectus deserunt, odit expedita eos
                  molestiae ipsa totam quidem?
                </p>
                <Image
                  src="/icons/Plus.png"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="absolute top-4 right-4"
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </>
    </div>
  );
}