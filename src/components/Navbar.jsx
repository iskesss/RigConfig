import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { FiCpu } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a]">RigConfig</h1>
      <ul className="hidden md:flex">
        <li className="p-4 flex items-center hover:bg-[#202020] hover:text-[#00df9a] transition duration-300 cursor-default rounded-xl">
          <MdDashboard className="text-xl mr-2" />
          <span>Dashboard</span>
        </li>
        <li className="p-4 flex items-center hover:bg-[#202020] hover:text-[#00df9a] transition duration-300 cursor-default rounded-xl">
          <FiCpu className="text-xl mr-2" />
          <span>My PC Parts</span>
        </li>
        <li className="p-4 flex items-center hover:bg-[#202020] hover:text-[#00df9a] transition duration-300 cursor-default rounded-xl">
          <HiOutlineSparkles className="text-xl mr-2" />
          <span>Suggest-a-Build</span>
        </li>
        <li className="p-4 flex items-center hover:bg-[#202020] hover:text-[#00df9a] transition duration-300 cursor-default rounded-xl">
          <IoMdInformationCircleOutline className="text-xl mr-2" />
          <span>About</span>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          RigConfig
        </h1>
        <li className="p-4 border-b border-gray-600">
          <MdDashboard className="inline mr-2" />
          <span>Dashboard</span>
        </li>
        <li className="p-4 border-b border-gray-600">
          <FiCpu className="inline mr-2" />
          <span>My PC Parts</span>
        </li>
        <li className="p-4 border-b border-gray-600">
          <HiOutlineSparkles className="inline mr-2 " />
          <span>Suggest-a-Build</span>
        </li>
        <li className="p-4 border-b border-gray-600">
          <IoMdInformationCircleOutline className="inline mr-2" />
          <span>About</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
