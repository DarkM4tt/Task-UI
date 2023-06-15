import React from "react";
import { BsGlobe } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between px-14 py-5">
      <div className="">
        <div className="flex flex-col">
          <h1 className="border-b-2 border-black pb-3 text-lg font-bold">
            Razor
          </h1>
          <p className="text-xs mt-2">
            Sales@Razor.uk <span className="ml-3">-&gt;</span>
          </p>
        </div>
      </div>
      <div className="flex items-center font-semibold gap-6">
        <BsGlobe />
        <p>Signup</p>
        <button className="py-2 px-5 bg-yellow-300 rounded-lg">
          Request Demo
        </button>
      </div>
    </div>
  );
};

export default Header;
