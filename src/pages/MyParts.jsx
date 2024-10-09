import React from "react";
import Navbar from "../components/Navbar";
import { Parttable } from "../components/PartTables";

const MyParts = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center max-w-[1240px] mx-auto px-4 text-white">
        <div className="flex justify-between space-x-4">
          <div className="outline">CPU</div>
          <div className="outline">RAM</div>
          <div className="outline">Motherboard</div>
          <div className="outline">Storage</div>
          <div className="outline">PSU</div>
          <div className="outline ">GPU</div>
          <input type="text" />
          <div className="outline bg-[#00df9a]">ADD</div>
        </div>
        <Parttable componentType={"cpu"} />
      </div>
    </>
  );
};

export default MyParts;
