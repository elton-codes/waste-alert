import React from "react";
import { BadgeCheck, Globe, Users } from "lucide-react";

const USP = () => {
  const uspItems = [
    {
      icon: <BadgeCheck className="text-green-600 text-4xl mb-4" />,
      title: "Innovation Backed by Technology",
      description:
        "Smart sensors and a digital platform enable faster and smarter waste management decisions.",
    },
    {
      icon: <Users className="text-green-600 text-4xl mb-4" />,
      title: "Customer Engagement",
      description:
        "Bridges the gap between service providers and communities, ensuring accountability and enhanced service delivery.",
    },
    {
      icon: <Globe className="text-green-600 text-4xl mb-4" />,
      title: "Sustainability Focus",
      description:
        "Reduces environmental pollution and fosters a cleaner, healthier ecosystem for urban and rural areas.",
    },
  ];

  return (
    <section id="usp" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          Why Choose Waste Alert?
        </h2>

        {/* USP Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uspItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
