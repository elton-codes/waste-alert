import React from "react";
import { Mail, PhoneCall } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="cta" className="bg-green-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Make Every Bin Count!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join us in revolutionizing waste management and creating sustainable,
          clean, and thriving communities. Together, we can scale <strong>Waste Alert</strong> to new heights.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="bg-white text-green-800 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
          <a
            href="mailto:wastealert@example.com"
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-green-700 transition"
          >
            <Mail className="text-xl" />
            Email Us
          </a>
          <a
            href="tel:+233598466146"
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-green-700 transition"
          >
            <PhoneCall className="text-xl" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
