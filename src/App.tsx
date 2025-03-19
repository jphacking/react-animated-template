// src/App.tsx
import React from "react";
import Navigation from "./components/Navigation";
import SplashSection from "./components/SplashSection";
import ServiceSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <Navigation />
      <main>
        {/* Main hero splash section */}
        <SplashSection />
        {/* Services offered */}
        <ServiceSection />
        {/* About the company */}
        <AboutSection />
        {/* Team members */}
        <TeamSection />
        {/* Contact information and form */}
        <ContactSection />
      </main>
      {/* Footer with social and links */}
      <Footer />
    </div>
  );
};

export default App;
