// src/components/ServiceSection.tsx
import React from "react";

const ServiceSection: React.FC = () => {
  return (
    <section className="bg-gray-300 pb-20 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Service Card 1 */}
          <div
            className="w-full px-4 pt-6 text-center md:w-4/12"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="flex flex-col min-w-0 break-words rounded-lg bg-white shadow-lg mb-8">
              <div className="flex-auto px-4 py-5">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-red-400 p-3 text-white">
                  <i className="fas fa-robot"></i>
                </div>
                <h6 className="text-xl font-semibold">I'm A Robot</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptatibus autem maxime expedita aspernatur tempora.
                </p>
              </div>
            </div>
          </div>
          {/* Service Card 2 */}
          <div
            className="w-full px-4 text-center md:w-4/12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex flex-col min-w-0 break-words rounded-lg bg-white shadow-lg mb-8">
              <div className="flex-auto px-4 py-5">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-blue-400 p-3 text-white">
                  <i className="fas fa-atom"></i>
                </div>
                <h6 className="text-xl font-semibold">Atom Power</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda quia nemo ex aut temporibus, in molestiae earum
                  ratione.
                </p>
              </div>
            </div>
          </div>
          {/* Service Card 3 */}
          <div
            className="w-full px-4 pt-6 text-center md:w-4/12"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="flex flex-col min-w-0 break-words rounded-lg bg-white shadow-lg mb-8">
              <div className="flex-auto px-4 py-5">
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-green-400 p-3 text-white">
                  <i className="fas fa-bolt"></i>
                </div>
                <h6 className="text-xl font-semibold">Infinite Energy</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium ipsa veritatis error ratione sunt repudiandae,
                  quasi atque.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="flex flex-wrap items-center mt-32">
          {/* Text Column */}
          <div
            className="mx-auto w-full px-4 md:w-5/12"
            data-aos="zoom-in-right"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-100 p-3 text-gray-600">
              <i className="fas fa-star text-xl"></i>
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Trying New Things is Great!
            </h3>
            <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Officiis, dolores? Saepe aspernatur necessitatibus explicabo.
            </p>
            <p className="mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
              repellat obcaecati tenetur officia distinctio! A voluptates
              numquam, neque libero molestiae natus facere temporibus!
            </p>
            <a className="mt-8 font-bold text-gray-800" href="#">
              Check Tailwind Starter Kit!
            </a>
          </div>
          {/* Image Column */}
          <div
            className="mx-auto w-full px-4 md:w-4/12"
            data-aos="flip-left"
            data-aos-delay="500"
          >
            <div className="relative flex flex-col min-w-0 break-words rounded-lg bg-orange-500 shadow-lg mb-6">
              <img
                alt="Decorative"
                className="w-full rounded-t-lg align-middle"
                src="https://images.unsplash.com/photo-1512572525676-f9b59951929e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1252&q=80"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  className="absolute left-0 block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  preserveAspectRatio="none"
                  style={{ height: "95px", top: "-94px" }}
                >
                  <polygon
                    className="fill-current text-orange-500"
                    points="-30,95 583,95 583,65"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">
                  More Than Meets The Eye
                </h4>
                <p className="mt-2 text-md font-light text-white">
                  I feel like I've mentioned before that I'm a robot and that
                  continues to be true, even to this day.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
