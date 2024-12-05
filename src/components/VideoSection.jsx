import React from "react";

const VideoSection = () => {
  return (
    <section className="py-16 bg-white" id="video">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-8">
          How Waste Alert Works
        </h2>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <video
            className="w-full h-80 md:h-96"
            controls
          >
            <source src="/src/assets/img/demoVid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Watch this short video to see Waste Alert in action!
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
