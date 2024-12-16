import React from "react";
import Image from "next/image";

const FeaturedProducts = () => {
  return (
    <div className="py-8 px-8 flex flex-col items-start">
      {/* Featured Products Title */}
      <div className="mb-4 text-start">
        <h1 className="text-xl font-semibold text-black">Featured Products</h1>
      </div>

      {/* Product Container */}
      <div className="flex justify-start items-center gap-8 overflow-x-auto flex-nowrap">
        {[
          { image: "/images/Image-1.png", name: "Library Stool Chair", price: "$20" },
          {
            image: "/images/Image-2.png",
            name: "Library Stool Chair",
            price: "$20",
            originalPrice: "$30",
          },
          { image: "/images/Image-3.png", name: "Library Stool Chair", price: "$20" },
          { image: "/images/Image-4.png", name: "Library Stool Chair", price: "$20" },
        ].map((product, index) => (
          <div
            key={index}
            className="w-[280px] bg-white p-4 rounded-lg shadow-lg flex-shrink-0"
          >
            {/* Product Image */}
            <div className="w-full h-[200px] bg-gray-100 rounded-lg relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4">
              {/* Product Name */}
              <h2
                className={`text-lg font-medium ${
                  index === 0 ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {product.name}
              </h2>

             { /* Price Section */}
    <div className="flex justify-between items-center mt-2">
     <div className="text-gray-900 font-semibold text-lg flex items-center">
        {/* Current Price */}
    <span>{product.price}</span>
  </div>
    {/* Original Price (Strike-through) */}
    {product.originalPrice && (
      <span className="text-gray-500 line-through mr-36">
        {product.originalPrice}
      </span>
    )}
  


                {/* Cart Button */}
                <button
                  className={`py-2 px-3 rounded flex items-center gap-2 ${
                    index === 0
                      ? "bg-[#029FAE] text-white hover:bg-blue-700"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  <Image
                    src={`/icons/Cart-${index === 0 ? "1" : "2"}.png`}
                    alt="Cart"
                    width={20}
                    height={20}
                    className="w-[16px] h-[16px]"
                  />
                  
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
