import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <p className="text-lg">This is the about page</p>
      </div>
    </>
  );
};

export default About;
