import React from "react";
import Pannar from "@/components/Pannar";
import OurSerives from "@/components/OurSerives";
const blog = () => {
    return (
        <div>
            <div className="bg-gradient-to-r p-1 sm:mt-0 mt-10 from-blue-500 to-green-400 text-white h-[250px] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="sm:text-4xl text-xl  font-bold mb-4">Blog & Insights
        </h1>
        <p className="text-lg mb-8">
          
        </p>
      </div>
    </div>
        <OurSerives />
        <Pannar />
        </div>
    );
}
export default blog;