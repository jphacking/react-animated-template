// src/components/TeamSection.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faDribbble,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  social: {
    twitter?: string;
    facebook?: string;
    dribbble?: string;
    google?: string;
    instagram?: string;
  };
  delay: number; // Delay (in ms) for AOS animation
}

const teamMembers: TeamMember[] = [
  {
    name: "Ryan Thompson",
    role: "Web Developer",
    imageUrl: "https://randomuser.me/api/portraits/men/25.jpg",
    social: {
      twitter: "#",
      facebook: "#",
      dribbble: "#",
    },
    delay: 0,
  },
  {
    name: "Romina Hadid",
    role: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/women/19.jpg",
    social: {
      google: "#",
      facebook: "#",
    },
    delay: 400,
  },
  {
    name: "Alexa Smith",
    role: "UI/UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/63.jpg",
    social: {
      google: "#",
      twitter: "#",
      instagram: "#",
    },
    delay: 600,
  },
  {
    name: "Jenna Kardi",
    role: "Founder and CEO",
    imageUrl: "https://randomuser.me/api/portraits/women/67.jpg",
    social: {
      dribbble: "#",
      google: "#",
      twitter: "#",
      instagram: "#",
    },
    delay: 800,
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-24 flex flex-wrap justify-center text-center">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className="text-4xl font-semibold">Here are our heroes</h2>
            <p className="m-4 text-lg leading-relaxed text-gray-600">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scientist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        {/* Team Member Cards */}
        <div className="flex flex-wrap">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0"
              data-aos="fade-in"
              data-aos-delay={member.delay}
            >
              <div className="px-6">
                <img
                  alt={member.name}
                  className="mx-auto max-w-full rounded-full shadow-lg"
                  style={{ maxWidth: "120px" }}
                  src={member.imageUrl}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">{member.name}</h5>
                  <p className="mt-1 text-sm font-semibold uppercase text-gray-500">
                    {member.role}
                  </p>
                  <div className="mt-6">
                    {member.social.twitter && (
                      <button
                        type="button"
                        className="mr-1 mb-1 w-8 h-8 rounded-full bg-blue-400 text-white outline-none focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </button>
                    )}
                    {member.social.facebook && (
                      <button
                        type="button"
                        className="mr-1 mb-1 w-8 h-8 rounded-full bg-blue-600 text-white outline-none focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </button>
                    )}
                    {member.social.dribbble && (
                      <button
                        type="button"
                        className="mr-1 mb-1 w-8 h-8 rounded-full bg-pink-500 text-white outline-none focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faDribbble} />
                      </button>
                    )}
                    {member.social.google && (
                      <button
                        type="button"
                        className="mr-1 mb-1 w-8 h-8 rounded-full bg-red-600 text-white outline-none focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faGoogle} />
                      </button>
                    )}
                    {member.social.instagram && (
                      <button
                        type="button"
                        className="mr-1 mb-1 w-8 h-8 rounded-full bg-gray-800 text-white outline-none focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
