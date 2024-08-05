import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div className="fixed w-full bg-transparent k">
      <h1
        className="text-white font-bold text-2xl  px-7 py-5   cursor-pointer "
        onClick={() => navigate("/")}
      >
        Blend<span className="text-orange-500">On</span>
      </h1>
    </div>
  );
};

export default Navbar;
