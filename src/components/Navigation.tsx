// src/components/Navigation.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="absolute top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Logo and Hamburger */}
        <div className="relative flex w-full justify-between lg:w-auto lg:static lg:block">
          <a
            className="mr-4 inline-block py-2 text-sm font-bold leading-relaxed uppercase text-white"
            href="#"
          >
            Hacking Design
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="block cursor-pointer rounded bg-transparent px-3 py-1 text-xl lg:hidden"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon icon={faBars} className="text-white" />
          </button>
        </div>
        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } flex-grow items-center bg-white lg:bg-transparent lg:flex`}
        >
          <ul className="ml-auto flex flex-col lg:flex-row">
            <li className="flex items-center">
              <a
                className="px-3 py-4 text-xs font-bold uppercase text-gray-800 lg:text-white lg:hover:text-gray-300 flex items-center"
                href="#pablo"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-lg text-gray-500 lg:text-gray-300"
                />
                <span className="inline-block ml-2 lg:hidden">Share</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="px-3 py-4 text-xs font-bold uppercase text-gray-800 lg:text-white lg:hover:text-gray-300 flex items-center"
                href="#pablo"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-lg text-gray-500 lg:text-gray-300"
                />
                <span className="inline-block ml-2 lg:hidden">Tweet</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="px-3 py-4 text-xs font-bold uppercase text-gray-800 lg:text-white lg:hover:text-gray-300 flex items-center"
                href="#pablo"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-lg text-gray-500 lg:text-gray-300"
                />
                <span className="inline-block ml-2 lg:hidden">Star</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
