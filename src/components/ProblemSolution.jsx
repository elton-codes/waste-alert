import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          The Problem & Our Solution
        </h2>

        {/* Problem Section */}
        <div className="mb-12">
          <div className="flex justify-center items-center mb-4">
            <AlertTriangle className="text-red-500 text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">The Problem</h3>
          <p className="text-gray-600 leading-relaxed md:text-lg">
          Urban areas are struggling with ineffective waste management systems, resulting in overflowing bins, littered streets, and environmental degradation. Waste management companies lack real-time data to optimize waste collection schedules, leading to inefficient operations, increased costs, and negative impacts on public health and urban aesthetics. Communities are also disconnected from service providers, making it difficult to report issues or request timely interventions.
          </p>
        </div>

        {/* Solution Section */}
        <div>
          <div className="flex justify-center items-center mb-4">
            <CheckCircle className="text-green-600 text-4xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
          <p className="text-gray-600 leading-relaxed md:text-lg">
            Waste Alert integrates smart sensors with real-time tracking and a user-friendly app to optimize waste collection. 
            Our system ensures timely pickups, geo-tagging of bins, and seamless communication between customers and service providers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
