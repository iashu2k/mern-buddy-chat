import React from "react";
import { RiRadioButtonLine } from "react-icons/ri";
import { FiPower } from "react-icons/fi";


const Header = ({ room }) => {
  return (
    <div className="bg-blue-500 text-white px-4 py-4 rounded-md flex justify-between items-center font-extrabold text-xl">
      <div className="flex items-center">
        <RiRadioButtonLine className="text-green-200 text-xl" />
        <div className="ml-2">{room}</div>
      </div>
      <div>
      <a href="/">
        <FiPower className="text-xl cursor-pointer" />
      </a>
        
      </div>
    </div>
  );
};

export default Header;
