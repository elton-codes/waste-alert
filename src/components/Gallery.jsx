import React from "react";
import img1 from "../assets/img/img1.jpeg";
import img2 from "../assets/img/img2.jpeg";
import img3 from "../assets/img/img3.jpeg";
import img4 from "../assets/img/img4.jpeg";

const Gallery = () => {
  const images = [img1, img2, img3, img4]; // Use imported images.

  return (
    <section className="py-16 bg-gray-50" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-8">
          Our Work in Action
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-68 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
