import React, { useEffect } from "react";
import "./styles/globals.css";
import MainContainer from "./components/MainContainer";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Service from "./components/Services";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Insurance from "./components/Insurance";
import Partners from "./components/Partners";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero data-aos="fade-down" />
      <ScrollToTop />

      {/* Wrap Content Inside MainContainer */}
      <MainContainer>
        <div data-aos="fade-up">
          <About />
        </div>
        <div data-aos="fade-up">
          <Stats />
        </div>
        <div data-aos="fade-up">
          <Service />
        </div>
        <div className="w-full h-[2px] bg-[#6B297A]/10 my-12"></div>
        <div data-aos="fade-up">
          <Gallery />
        </div>
        <div className="w-full h-[2px] bg-[#6B297A]/10 my-12"></div>
        <div data-aos="fade-up">
          <Team />
        </div>
        <div className="w-full h-[2px] bg-[#6B297A]/0 my-12"></div>
        {/* hide temprery */}
        {/* <Insurance /> */}
        <div data-aos="fade-up">
          <Partners />
        </div>
        <div data-aos="fade-up">
          <Appointment />
        </div>
      </MainContainer>
      <Footer  />
    </div>
  );
};

export default App;
