// src/components/AboutSection.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20">
      {/* Decorative Polygon at Top */}
      <div
        className="absolute left-0 right-0 top-0 pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
        >
          <polygon
            className="fill-current text-white"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Image Column */}
          <div
            className="mx-auto w-full px-4 md:w-4/12"
            data-aos="flip-right"
            data-aos-delay="1000"
          >
            <img
              alt="About us"
              className="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1553678324-f84674bd7b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            />
          </div>
          {/* Text Column */}
          <div
            className="mx-auto w-full px-4 md:w-5/12"
            data-aos="zoom-in-left"
          >
            <div className="md:pr-12">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-pink-300 p-3 text-pink-600">
                <FontAwesomeIcon icon={faRocket} className="text-xl" />
              </div>
              <h3 className="text-3xl font-semibold">A growing company</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                The extension comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <ul className="mt-6 list-none">
                <li className="py-2">
                  <div className="flex items-center">
                    <span className="mr-3 inline-block rounded-full bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600">
                      <FontAwesomeIcon icon={faFingerprint} />
                    </span>
                    <h4 className="text-gray-600">
                      Carefully crafted components
                    </h4>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <span className="mr-3 inline-block rounded-full bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600">
                      <FontAwesomeIcon icon={faHtml5} />
                    </span>
                    <h4 className="text-gray-600">Amazing page examples</h4>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <span className="mr-3 inline-block rounded-full bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </span>
                    <h4 className="text-gray-600">Dynamic components</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
