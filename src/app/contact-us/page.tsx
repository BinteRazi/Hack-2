import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import ContactSection from "@/app/components/contactsection";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <h1 className="font-semibold text-4xl text-center sm:text-3xl">
          Get In Touch With Us
        </h1>
        <p className="text-lg text-[#9F9F9F] font-normal text-center mt-8 sm:mt-6 sm:text-base">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* Contact Info Section */}
          <div className="flex flex-col space-y-8 px-6 sm:px-10">
            {/* Address Section */}
            <div className="flex items-start space-x-4">
              <div className="h-7 mt-1">
                <Image
                  src="/icons/Vector-1.png"
                  alt="Address Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h2 className={`${poppins.className} text-xl font-medium`}>
                  Address
                </h2>
                <p className="text-black text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-start space-x-4">
              <div className="h-7 mt-1">
                <Image
                  src="/icons/Vector-2.png"
                  alt="Phone Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h2 className={`${poppins.className} text-xl font-medium`}>
                  Phone
                </h2>
                <p className="text-black text-base">
                  Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time Section */}
            <div className="flex items-start space-x-4">
              <div className="h-7 mt-1">
                <Image
                  src="/icons/Vector-3.png"
                  alt="Working Time Icon"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h2 className={`${poppins.className} text-xl font-medium`}>
                  Working Time
                </h2>
                <p className="text-black text-base">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 w-full max-w-[635px]">
            <form action="#" method="POST">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`${poppins.className} text-base font-medium`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Abc"
                  className="w-full h-[60px] p-4 border border-[#9F9F9F] rounded-lg mt-2"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`${poppins.className} text-base font-medium`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Abc@def.com"
                  className="w-full h-[60px] p-4 border border-[#9F9F9F] rounded-lg mt-2"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className={`${poppins.className} text-base font-medium`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is an optional"
                  className="w-full h-[60px] p-4 border border-[#9F9F9F] rounded-lg mt-2"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className={`${poppins.className} text-base font-medium`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I'd like to ask about"
                  className="w-full h-[120px] p-4 border border-[#9F9F9F] rounded-lg mt-2"
                  rows={4}
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#029FAE] text-white px-6 py-3 rounded-md border border-[#B88E2F]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
