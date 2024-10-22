import Pannar from '@/components/Pannar'
import React from 'react'
const About = () => {
    return(
        <div>
             <div className="bg-gradient-to-r p-1 sm:mt-0 mt-10 from-blue-500 to-green-400 text-white h-[250px] flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="sm:text-5xl text-xl  font-bold mb-4">About Us</h1>
          <p className="text-lg mb-8">
            
          </p>
        </div>
            </div>
            <div className='sm:p-10 mt-5 flex flex-col items-center justify-center h-64 text-center'>
                <h2 className="sm:text-5xl  text-xl text-blue-700 font-bold mb-2">About TOOTH GUARD</h2>
                <p className='sm:text-2xl text-xl text-green-500 font-bold mb-2'>Your Partners in Dental Health</p>
                <p className='w-3/4 text-gray-500'>At Tooth Guard Clinics, we believe in a personalized approach to dental care. Our team consists of renowned professionals who are leaders in their field, including teaching staff from Egypt's most prestigious universities. We are committed to staying at the forefront of dental innovation to ensure you receive the best care possible.</p>
            </div>
            <div className='sm:p-10 flex flex-col items-center justify-center h-64 text-center'>
                <h2 className="sm:text-5xl  text-xl text-blue-700 font-bold mb-2">Our Team</h2>
                <p className='sm:text-2xl text-xl text-green-500 font-bold mb-2'>Passionate Experts Committed to Your Smile</p>
                <p className='w-3/4 text-gray-500'>Our team at Tooth Guard Clinics is composed of highly skilled and compassionate professionals dedicated to providing outstanding dental care. Each team member brings unique expertise and a commitment to excellence.</p>
            </div>
            <div className="bg-green-500 sm:py-16">
      <div className=" sm:px-32 px-10 sm:py-0 py-10 mx-auto">
        <div className="bg-white rounded-lg flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/assets/asxsa.jpg"
              alt="Dr. Mohamed Hegab"
              className="object-cover w-full mb-10 h-full rounded-l-lg"
               
            />
          </div>

          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Dr. Mohamed Hegab</h2>
            <p className="text-gray-600">
              Dr. Mohamed Hegab, with 15 years of experience, is one of our leading dentists renowned for his meticulous care and innovative approach. Specializing in both routine and advanced dental procedures, Dr. Hegab is passionate about transforming smiles and enhancing patient confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-600 to-green-400 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white px-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left border-0 sm:border-r-2 border-white">
          <h3 className="text-2xl font-bold mb-2">Decades of Experience:</h3>
          <p>With thousands of patients treated each year, our expertise is unparalleled.</p>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left border-0 sm:border-r-2 border-white">
          <h3 className="text-2xl font-bold mb-2">Innovative Techniques:</h3>
          <p>We utilize the latest advancements in dental technology to provide cutting-edge treatments.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left ">
          <h3 className="text-2xl font-bold mb-2">Holistic Care:</h3>
          <p>We focus on your overall well-being, ensuring that your experience with us is comfortable and rewarding.</p>
        </div>
      </div>
    </div>
    <Pannar />
        </div>
    )
}

export default About