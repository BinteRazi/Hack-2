import React from "react";

const FeaturesSection = () => {
  return (
    <div className="text-center mb-12">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6 pt-16">What Makes Our Brand Different</h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6" style={{ gap: "10px" }}>
        {/* Feature Item 1 */}
        <div
          className="p-4 bg-gray-100 rounded shadow relative"
          style={{ width: "309.45px", height: "244px", padding: "48px" }}
        >
          <div className="absolute top-4 left-4 w-8 h-8">
            <img
              src="/icons/delivery.png"
              alt="Delivery Icon"
              width={32}
              height={32}
              className="rounded"
            />
          </div>
          <h3 className="font-bold text-[#007580] mb-2 mt-6">Next day as standard</h3>
          <p className="text-[#007580]">Order before 3pm and get your furniture delivered the next day as standard.</p>
        </div>

        {/* Feature Item 2 */}
        <div
          className="p-4 bg-gray-100 rounded shadow relative"
          style={{ width: "309.45px", height: "244px", padding: "48px" }}
        >
          <div className="absolute top-4 left-4 w-8 h-8">
            <img
              src="/icons/Checkmark.png"
              alt="Artisans Icon"
              width={32}
              height={32}
              className="rounded"
            />
          </div>
          <h3 className="font-bold text-[#007580] mb-2 mt-6">Made by true artisans</h3>
          <p className="text-[#007580]">Handmade with care by master artisans for quality and craftsmanship.</p>
        </div>

        {/* Feature Item 3 */}
        <div
          className="p-4 bg-gray-100 rounded shadow relative"
          style={{ width: "309.45px", height: "244px", padding: "48px" }}
        >
          <div className="absolute top-4 left-4 w-8 h-8">
            <img
              src="/icons/Purchase.png"
              alt="Purchase Methods"
              width={32}
              height={32}
              className="rounded"
            />
          </div>
          <h3 className="font-bold text-[#007580] mb-2 mt-6">Unbeatable prices</h3>
          <p className="text-[#007580]">We provide high-end furniture at better prices anywhere.</p>
        </div>

        {/* Feature Item 4 */}
        <div
          className="p-4 bg-gray-100 rounded shadow relative"
          style={{ width: "309.45px", height: "244px", padding: "48px" }}
        >
          <div className="absolute top-4 left-4 w-8 h-8">
            <img
              src="/icons/Sprout.png"
              alt="Recycling Icon"
              width={32}
              height={32}
              className="rounded"
            />
          </div>
          <h3 className="font-bold text-[#007580] mb-2 mt-6">Recycled packaging</h3>
          <p className="text-[#007580]">We use 100% recyclable packaging to reduce waste and be eco-friendly.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
