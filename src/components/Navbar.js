import React from "react";
import logo from "../assets/logo.png";
export const Navbar = () => {
  const navElements = [
    "Home",
    "About Us",
    "Our approach",
    "Our Work",
    "Newsroom",
    "Let's Talk",
  ];
  return (
    <nav className="container mx-auto flex items-center justify-between">
      <img src={logo} alt="This is the logo" className="p-4" />
      <ul className="hidden lg:flex  ">
        {navElements.map((element, index) => {
          return (
            <li
              key={index}
              className="text-white font-extrabold text-xl p-8 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-orange-500 to-purple-700 hover:scale-125 cursor-pointer"
            >
              {element}
            </li>
          );
        })}
      </ul>
      <div className="lg:hidden bg-white mx-4">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
