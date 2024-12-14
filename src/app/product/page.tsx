import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";


      export default function ProductPage() {
  const featuredProducts = [
    {
      id: "01",
      title: "Library Stool Chair",
      price: "$99",
      image: "/images/Image-5.png",
    },
    {
      id: "02",
      title: "Library Stool Chair",
      price: "$99",
      image: "/images/Image-1.png",
    },
    {
      id: "03",
      title: "Library Stool Chair",
      price: "$99",
      image: "/images/Image-10.png",
    },
    {
      id: "04",
      title: "Library Stool Chair",
      price: "$99",
      image: "/images/Image-3.png",
    },
    {
      id: "05",
      title: "Library Stool Chair",
      price: "$99",
      image: "/images/Image-9.png",
    },
  ];

  return (
<div>
    <Header/>
    <Navbar/>

    <div className="py-8 px-4">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="relative w-full h-96 md:h-auto">
          <Image
            src="/images/Image-2.png"
            alt="Library Stool Chair"
            layout="responsive"
            width={675}
            height={607}
            objectFit="cover"
            className="rounded-lg border"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Library Stool Chair</h1>
          <p className="rounded-2xl mx-2 my-2 bg-[#007580] w-[118px] h-[28px] text-white flex items-center justify-center">$20.00 USD</p>
          <p className="text-gray-700 mb-6 w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt est enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
            className="flex items-center justify-center bg-[#007580] text-white w-[212px] h-[63px] rounded-lg px-12 py-6 p-12 ml-16  hover:bg-blue-700 gap-2"
            style={{ position: 'absolute', top: '624px', left: '700px' }}
          >
            <Image
              src="/icons/Buy-2.png"
              alt="Cart Icon"
              width={24}
              height={24}
            />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <a href="#" className="text-blue-600 hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
              {/* Product Image */}
              <div className="relative w-full h-72">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              
             {/* Product Info */}
             <div className="p-4 flex justify-between items-center">
                <h3 className="text-sm font-normal text-gray-600 truncate">
                  {product.title}
                </h3>
                <p className="text-md font-bold text-gray-800">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  

      <Footer/>
    </div>
  );
};


