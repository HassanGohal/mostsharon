import React from "react";
import "./styles/globals.css";
import MainContainer from "./components/MainContainer";

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

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />

      {/* Wrap Content Inside MainContainer */}
      <MainContainer>
        <About />
        <Stats />
        <Service />
        <div className="w-full h-[2px] bg-[#6B297A]/10 my-12"></div>
        <Gallery />
        <div className="w-full h-[2px] bg-[#6B297A]/10 my-12"></div>
        <Team />
        <div className="w-full h-[2px] bg-[#6B297A]/0 my-12"></div>
        {/* hide temprery */}
        {/* <Insurance /> */}
        <Partners />
        <Appointment />
      </MainContainer>
      <Footer />

    </div>
  );
};

export default App;
