import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";


const shopPage = () => {
  const products = [
    { image: "/images/Image-1.png", name: "Library Stool Chair", price: "$20", tag: "New" },
    { image: "/images/Image-2.png", name: "Library Stool Chair", price: "$20", originalPrice: "$30", tag: "Sale" },
    { image: "/images/Image-3.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-4.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-7.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-8.png", name: "Library Stool Chair", price: "$20", originalPrice: "$30" },
    { image: "/images/Image-5.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-1.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-9.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-2.png", name: "Library Stool Chair", price: "$20", originalPrice: "$30" },
    { image: "/images/Image-3.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-10.png", name: "Library Stool Chair", price: "$20" },
  ];

  return (
    <div>
      <Header/>
      <Navbar/>
    <div className="container mx-auto px-4 py-8">
      {/* All Products Section */}
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="p-4 relative">
            {/* Image */}
            <div className="relative w-full h-64 bg-gray-100">
              <Image src={product.image} alt={product.name} fill objectFit="cover" />
            </div>
            {/* Tag */}
            {index % 4 === 0 || index % 4 === 1 ? (
              <span
                className={`absolute top-8 left-6 text-xs font-bold py-1 px-2 rounded ${
                  index % 4 === 0
                    ? "bg-green-500 text-white"
                    : "bg-orange-500 text-white"
                }`}
              >
                {index % 4 === 0 ? "New" : "Sale"}
              </span>
            ) : null}

            {/* Product Details */}
            <h2 className="text-lg font-medium mt-4">{product.name}</h2>
            <p className="text-gray-600">
              {product.price}
              {product.originalPrice && (
                <span className="line-through text-sm mr-2 text-gray-300">
                  {product.originalPrice}
                </span>
              )}
            </p>

            {/* Button */}
            <button
              className={`absolute bottom-2 right-2 py-2 px-3 rounded flex items-center gap-2 ${
                index % 4 === 0
                  ? "bg-[#029FAE] text-white hover:bg-blue-700"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              <Image
                src={`/icons/Cart-${index % 4 === 0 ? "1" : "2"}.png`}
                alt="Cart"
                width={20}
                height={20}
                className="w-[16px] h-[16px]"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-12 text-center bg-gray-100 p-6">
        <h2 className="text-xl font-semibold mb-4">
          Or Subscribe To The Newsletter
        </h2>
        <form className="flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="border-b-2 border-black px-4 py-2 w-1/2 bg-gray-100"
          />
          <button className="text-black border-b-2 border-black py-2 px-4">
            SUBMIT
          </button>
        </form>
      

      {/* Instagram Section */}
      <div className="mt-12 bg-gray-100 p-8">
        <h2 className="text-xl font-semibold text-center mb-4">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {products.slice(0, 5).map((product, index) => (
            <div
              key={index}
              className="relative w-full h-48 bg-gray-100 rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default shopPage;
