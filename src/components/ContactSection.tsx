// src/components/ContactSection.tsx
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <>
      {/* Contact Features Section */}
      <section className="relative bg-gray-900 pb-20">
        {/* Decorative Polygon */}
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
              className="fill-current text-gray-900"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap justify-center text-center">
            <div className="w-full px-4 lg:w-6/12">
              <h2 className="text-4xl font-semibold text-white">
                Build something
              </h2>
              <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
                Put the potentially record low maximum sea ice extent this year
                down to low ice. According to the National Oceanic and
                Atmospheric Administration, Ted, Scambos.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-12">
            {/* Feature 1 */}
            <div
              className="w-full px-4 text-center lg:w-3/12"
              data-aos="fade-in"
              data-aos-delay="600"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 shadow-lg rounded-full bg-white">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h5 className="mt-5 text-xl font-semibold text-white">
                Excellent Services
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            {/* Feature 2 */}
            <div
              className="w-full px-4 text-center lg:w-3/12"
              data-aos="fade-in"
              data-aos-delay="400"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 shadow-lg rounded-full bg-white">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="mt-5 text-xl font-semibold text-white">
                Grow your market
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            {/* Feature 3 */}
            <div
              className="w-full px-4 text-center lg:w-3/12"
              data-aos="fade-in"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 shadow-lg rounded-full bg-white">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="mt-5 text-xl font-semibold text-white">
                Launch time
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative bg-gray-900 py-24 lg:pt-0">
        <div className="container mx-auto px-4" data-aos="fade-in">
          <div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex flex-col min-w-0 break-words rounded-lg bg-gray-300 shadow-lg mb-6 w-full">
                <div className="p-5 lg:p-10 flex-auto">
                  <h4 className="text-2xl font-semibold">
                    Want to work with us?
                  </h4>
                  <p className="mt-1 mb-4 leading-relaxed text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  {/* Full Name Field */}
                  <div className="mb-3 mt-8 w-full">
                    <label
                      htmlFor="full-name"
                      className="mb-2 block text-xs font-bold uppercase text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      placeholder="Full Name"
                      className="w-full rounded bg-white px-3 py-3 text-sm shadow placeholder-gray-400 focus:outline-none focus:shadow-outline"
                      style={{ transition: "all 0.15s ease 0s" }}
                    />
                  </div>
                  {/* Email Field */}
                  <div className="mb-3 w-full">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="w-full rounded bg-white px-3 py-3 text-sm shadow placeholder-gray-400 focus:outline-none focus:shadow-outline"
                      style={{ transition: "all 0.15s ease 0s" }}
                    />
                  </div>
                  {/* Message Field */}
                  <div className="mb-3 w-full">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-bold uppercase text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Type a message..."
                      className="w-full rounded bg-white px-3 py-3 text-sm shadow placeholder-gray-400 focus:outline-none focus:shadow-outline"
                    ></textarea>
                  </div>
                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      className="mr-1 mb-1 rounded bg-gray-900 px-6 py-3 text-sm font-bold uppercase text-white shadow hover:shadow-lg outline-none focus:outline-none active:bg-gray-700"
                      style={{ transition: "all 0.15s ease 0s" }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
