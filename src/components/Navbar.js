import { useState } from "react";
import logo from "../assets/logo.png";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navElements = [
    "Home",
    "About Us",
    "Our approach",
    "Our Work",
    "Newsroom",
    "Let's Talk",
  ];
  return (
    <nav className="container mx-auto flex items-center justify-between relative">
      {!showMenu && <img src={logo} alt="This is the logo" className="p-4" />}
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
      <div
        className={`lg:hidden ${
          showMenu ? "text-center mx-auto w-full" : ""
        }  relative 
        top-2 right-2`}
      >
        <svg
          className="bg-white"
          viewBox="0 0 100 80"
          width="40"
          height="40"
          onClick={() => setShowMenu(!showMenu)}
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        {showMenu && (
          <ul className="flex flex-col bg-black  ">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
