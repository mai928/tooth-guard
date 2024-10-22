import React from "react";
import { Headers } from "../../data";
const Header = () => {
  return (
    <div>
      {Headers?.map((res, index) => ( 
        <div key={index} className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-10 md:px-16">
            <div className="md:w-1/2">
            <img
                src="/assets/Tooth_Guard_Logo_wide_black-removebg-preview.png"
                alt="Tooth Guard Clinic"
                className=" w-80 mb-10"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                {res.title}
              </h1>
              <p className="text-lg md:text-xl mb-8">
                {res.des}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#about"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold sm:py-2 sm:px-24 py-2 px-3 rounded-full transition duration-300 "
                >
                  About Us
                </a>
                <a
                  href="#appointment"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-500 text-white font-bold sm:py-2 sm:px-6 py-2 px-3 rounded-full transition duration-300"
                >
                  Book Your Appointment
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <img
                src={res.src}
                alt="Tooth Guard Clinic"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      ))};
    </div>
  );
};

export default Header;