import React from "react";
import { ServicesSections } from "../../data";
const ServicesSection = () => {
  return (
    <div className="sm:py-16">
      <div className="sm:px-32 px-10 mx-auto text-center">
        {/* Heading */}
        <h2 className="sm:text-3xl text-lg font-bold text-blue-800 mb-12">
          Your Trusted Destination for <br /> Top-Quality Dental Care
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            ServicesSections?.map((items,index) => (
                <div key={index} className="bg-white  p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              {/* Image/Icon */}
              <img
                src="/assets/ToothGuard+logo+long.png"
                alt="Experts You Can Trust"
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-bold  text-green-600 mb-2">
              {items.title}
            </h3>
            <p className="text-gray-600">
              {items.des}
            </p>
          </div>
            ))}
          
        </div>
      </div>
    </div>
    
  );
};

export default ServicesSection;
