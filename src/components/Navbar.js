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
      <ul className="flex">
        {navElements.map((element, index) => {
          return (
            <li
              key={index}
              className="text-white font-extrabold text-xl p-8 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br from-orange-500 to-purple-700 hover:scale-125"
            >
              {element}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
