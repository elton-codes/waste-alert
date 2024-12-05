import React, { useState } from "react";
import overflowingbin  from "../assets/img/OverflowingBin.webp"
import img1  from "../assets/img/img1.jpeg"
import img3  from "../assets/img/img3.jpeg"

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={img1}
            alt="Waste Management 1"
            className="rounded-lg shadow-md object-cover"
          />
          <img
            src={img3}
            alt="Waste Management 2"
            className="rounded-lg shadow-md object-cover"
          />
          
        </div>

        {/* Right Side - Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-8">
            About Waste Alert
          </h2>
          <div className="text-lg text-gray-700 leading-8">
            <p className="mb-6">
              <strong>Waste Alert</strong> is a forward-thinking waste management solution focused on optimizing the waste collection process and improving customer interaction. The company aims to reduce overflowing bins, optimize waste collection schedules, and enhance overall service delivery. Waste Alert leverages technology to provide real-time solutions to waste management challenges.
            </p>
            <p className={`${isExpanded ? "block" : "hidden"} mb-6`}>
            The core of the business involves the development of an innovative application designed to send automatic alerts to waste management companies when bins are full. By integrating smart sensors into the waste bins, the system notifies both the waste management team and customers, ensuring timely pickups and preventing overflowing.
            </p>
            <p className={`${isExpanded ? "block" : "hidden"} mb-6`}>
            Waste Alert further enhances its services with geo-tagging of each bin, allowing both the company and its customers to track bin locations in real-time. Customers can also engage with the service by reporting issues, requesting additional pickups, or providing feedback through the app. This interactive platform ensures efficient communication between the company and customers, contributing to improved waste management practices and customer satisfaction. 
            </p>
            <p className={`${isExpanded ? "block" : "hidden"} mb-6`}>
              With these key features—<em>fullness alerts, location tracking, customer
              interaction,</em> and <em>notifications</em>—Waste Alert is set to revolutionize
              waste management and create a more responsive, efficient, and customer-centric
              service model.
            </p>
            <button
              onClick={toggleReadMore}
              className="text-green-700 font-semibold hover:underline mt-4"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
