import React from 'react';

const Pannar = () => {
  return (
    <div className="bg-gradient-to-r p-1 sm:mt-0 mt-10 from-blue-500 to-green-400 text-white h-[350px] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="sm:text-4xl text-xl  font-bold mb-4">Get in Touch today to start your journey to a healthier smile.</h1>
        <p className="text-lg mb-8">
          Our team is ready to assist with appointments, answer your questions, and guide you towards achieving your
          perfect smile.
        </p>
        <div className="flex space-x-4 justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
            Contact Us
          </button>
          <span className="text-white-300 mt-2  text-xl">or</span>
          <button className="text-white font-bold py-2 px-6 rounded-full border-2 border-inherit">
            Book Your Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pannar;