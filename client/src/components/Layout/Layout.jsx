import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className=" relative w-full bg-[#050226] font-DM">
      <Navbar />
      <div className=" pt-14 px-7">{children}</div>
    </div>
  );
};

export default Layout;
