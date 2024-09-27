import React from "react";
import Navbar from "../components/Navbar";

const MyParts = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <p className="text-lg">My Parts</p>
      </div>
    </>
  );
};

export default MyParts;
