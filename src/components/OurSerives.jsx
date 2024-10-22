import React from "react";
import { Dentalservice } from "../../data";
const OurSerives = () => {
  return (
    <div className="sm:px-16 mx-auto p-4 bg-gray-100">
    <div className="sm:px-16 px-10 sm:py-4 py-10 mx-auto text-center">
       <h2 className="sm:text-4xl text-lg font-bold text-blue-800 mb-6">
       Stay Informed with Our
       <br />
       Dental Insights
       </h2>
       <p className="text-gray-500">Visit the Tooth Guard Clinics blog for the latest tips, trends, and insights into dental health. Our articles cover everything you need to know to maintain a bright, healthy smile.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Dentalservice?.map((respons, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden mt-4 mb-4"
          >
            <img
              src={respons.src}
              alt={respons.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                {respons.title}
              </h3>
              <p className="text-gray-600">{respons.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OurSerives;
