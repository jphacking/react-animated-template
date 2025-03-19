// src/components/Footer.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6">
      {/* Decorative Polygon at Top */}
      <div
        className="absolute left-0 right-0 top-0 pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
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
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left Side: Heading and Social Icons */}
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="mt-0 mb-2 text-lg text-gray-700">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="bg-white mr-2 inline-block rounded-full p-3 text-blue-400 shadow-lg text-center text-lg"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="bg-white mr-2 inline-block rounded-full p-3 text-blue-600 shadow-lg text-center text-lg"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FontAwesomeIcon
                  icon={faDribbble}
                  className="bg-white mr-2 inline-block rounded-full p-3 text-pink-400 shadow-lg text-center text-lg"
                />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="bg-white mr-2 inline-block rounded-full p-3 text-gray-900 shadow-lg text-center text-lg"
                />
              </a>
            </div>
          </div>
          {/* Right Side: Useful Links and Other Resources */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap items-top mb-6">
              <div className="ml-auto w-full px-4 lg:w-4/12">
                <span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="#"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="#"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="#"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="mx-auto w-full px-4 md:w-4/12 text-center">
          <div className="py-1 text-sm font-semibold text-gray-600">
            Copyright © 2025 Tailwind Starter Kit by{" "}
            <a className="hover:text-gray-900 text-gray-600" href="#">
              Creative Tim
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
