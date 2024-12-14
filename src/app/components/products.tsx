import React from "react";
import Image from "next/image";

const Products = () => {
  const products = [
    { image: "/images/Image-1.png", name: "Library Stool Chair", price: "$20", tag: "New" },
    { image: "/images/Image-2.png", name: "Library Stool Chair", price: "$20", tag: "Sale" },
    { image: "/images/Image-3.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-4.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-9.png", name: "Library Stool Chair", price: "$20", tag: "New" },
    { image: "/images/Image-8.png", name: "Library Stool Chair", price: "$20", tag: "Sale" },
    { image: "/images/Image-5.png", name: "Library Stool Chair", price: "$20" },
    { image: "/images/Image-1.png", name: "Library Stool Chair", price: "$20" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-96">
          <Image
            src="/images/image-3.png"
            alt="Large Featured"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          {/* Vertical Text */}
          <div
            className="absolute top-48 left-[-50px] flex items-center h-full"
            style={{ transform: "rotate(-90deg)", transformOrigin: "left center" }}
          >
            <p
              className="font-roboto text-[21px] font-normal leading-[19.84px] tracking-[0px] text-gray-800 pt-12"
              style={{ fontWeight: 400 }}
            >
              EXPLORE NEW AND POPULAR STYLES
            </p>
          </div>
        </div>

        {/* Right Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="relative h-44">
            <Image
              src="/images/image-4.png"
              alt="Small Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-44">
            <Image
              src="/images/image-1.png"
              alt="Small Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-44">
            <Image
              src="/images/image-8.png"
              alt="Small Image 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-44">
            <Image
              src="/images/image-1.png"
              alt="Small Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="relative p-4">
              {/* Product Image */}
              <div className="relative h-80 bg-gray-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Tag */}
              {product.tag && (
                <span
                  className={`absolute top-8 left-6 text-xs font-bold py-1 px-2 rounded ${
                    product.tag === "New" ? "bg-green-500 text-white" : "bg-orange-500 text-white"
                  }`}
                >
                  {product.tag}
                </span>
              )}

              {/* Product Details */}
              <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
