// src/components/SplashSection.tsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SplashSection: React.FC = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div
      className="relative flex items-center justify-center pt-16 pb-32"
      style={{ minHeight: "75vh" }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute top-0 h-full w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <span className="absolute w-full h-full bg-black opacity-75"></span>
      </div>
      {/* Centered Text */}
      <div className="container mx-auto relative">
        <div className="flex flex-wrap items-center">
          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <div className="pr-12">
              <h1
                className="text-5xl font-semibold text-white"
                data-aos="fade-up"
              >
                Welcome your epiphany.
              </h1>
              <p
                className="mt-4 text-lg text-gray-300"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Lorem ipsum dolor sit. Eum totam aspernatur aliquam praesentium
                aperiam magni, dignissimos, atque incidunt fuga nulla distinctio
                eligendi enim placeat nesciunt, soluta maxime nihil ipsa minus!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative SVG Polygon */}
      <div
        className="absolute left-0 right-0 bottom-0 w-full pointer-events-none overflow-hidden"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 2560 100"
        >
          <polygon
            className="fill-current text-gray-300"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </div>
  );
};

export default SplashSection;
