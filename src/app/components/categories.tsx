import React from "react";
import Image from "next/image";

export default function Categories() {
  const categories = [
    {
      id: "01",
      image: "/images/Category-1.png",
    },
    {
      id: "02",
      image: "/images/Category-2.png",
    },
    {
      id: "03",
      image: "/images/Category-3.png",
    },
  ];

  return (
    <div className="py-8 px-4">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Categories</h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white overflow-hidden">
            {/* Category Image */}
            <div className="relative w-full h-80 rounded-lg">
              <Image
                src={category.image}
                alt={`Category ${category.id}`}
                layout="fill"
                objectFit="cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
