import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setColor("#202020");
        setTextColor("white");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed z-50 left-0 top-0 w-full  ease-in duration-300"
    >
      <div className="md:w-[90%] w-[80%] m-auto flex justify-between items-center text-white">
        <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl ">
          Logo
        </h1>

        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">Home</li>

          <li className="p-4">Gallery</li>

          <li className="p-4">Work</li>

          <li className="p-4">Contact</li>
        </ul>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-white duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav}>
            <li>Home</li>

            <li>Gallery</li>

            <li>Work</li>

            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
