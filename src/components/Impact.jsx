import React from "react";
import { Heart, BarChart3, Users } from "lucide-react";

const Impact = () => {
  const impactItems = [
    {
      icon: <Heart className="text-green-600 text-4xl mb-4" />,
      title: "Healthier Communities",
      description:
        "Reduced overflowing bins and cleaner streets have improved living conditions in urban areas.",
    },
    {
      icon: <BarChart3 className="text-green-600 text-4xl mb-4" />,
      title: "Optimized Operations",
      description:
        "Waste collection efficiency has improved with real-time data, minimizing costs and enhancing performance.",
    },
    {
      icon: <Users className="text-green-600 text-4xl mb-4" />,
      title: "Collaborative Partnerships",
      description:
        "Empowered partnerships with municipal authorities and environmental stakeholders for scalable impact.",
    },
  ];

  return (
    <section id="impact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          Impact Backed by UNDP
        </h2>
        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          Thanks to the support of the <strong>UNDP Accelerator Lab Initiative</strong>, Waste Alert has evolved from an idea to a functional MVP, delivering tangible benefits to communities.
        </p>

        {/* Impact Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
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

export default Impact;
