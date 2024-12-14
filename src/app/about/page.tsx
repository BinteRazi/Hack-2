import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Aboutfeaturesection from '../components/aboutfeaturesection'
import Footer from '../components/footer';

const aboutpage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>

    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center bg-white mt-16 md:mt-32 px-4">
      <div className="w-full md:w-[650px] h-auto md:h-[478px] bg-[#007580] p-6 flex flex-col justify-start items-start text-left text-white">
        <h1 className="text-[24px] md:text-[32px] font-bold pl-4 md:pl-6 pt-8 md:pt-12">
          About Us - Comforty
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal pt-4 pl-4 md:pl-6 pb-12 md:pb-40">
          At Comforty, we believe that the right chair can transform your space
          and elevate your comfort. Specializing in ergonomic design, premium
          materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.
        </p>
        <div className="pl-4 md:pl-6 mb-6">
  <button className="bg-[#2e6a6d] text-white px-6 md:px-8 py-3 md:py-4 text-[14px] md:text-[16px] font-normal mb-6">
    View collection
  </button>
</div>

      </div>
      <div className="w-full md:w-[619px] h-auto md:h-[478px] mt-6 md:mt-0 md:ml-6">
        <img
          src="/images/Image-1.png"
          alt="Comforty Image"
          width={619}
          height={478}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    
       <Aboutfeaturesection/>

      {/* Products Section */}
     
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-left mb-12">
        Our Popular Products
      </h2>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <img
            src="/images/sofa.jpg"
            alt="sofa"
            width={630}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Poplar Suede Sofa</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <img
            src="/images/chair-1.jpg"
            alt="2"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <img
            src="/images/chair-2.jpg"
            alt="Chair"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
      </div>
    </div>
  <Footer/>
  </div>
    
  );
};

export default aboutpage;
