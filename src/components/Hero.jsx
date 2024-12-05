import React from "react";
import { ArrowRight } from "lucide-react";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Revolutionizing Waste Management
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Waste Alert leverages smart technology to create cleaner, healthier communities through real-time waste collection and monitoring.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition">
            Join Us <ArrowRight size={20} />
          </button>
          <button className="bg-gray-100 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
