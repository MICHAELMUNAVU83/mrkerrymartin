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
      className="fixed z-50 left-0 top-0 w-full montserrat  ease-in duration-300"
    >
      <div className="md:w-[90%] w-[80%] m-auto flex justify-between items-center text-white">
        <a
          href="#home"
          style={{ color: `${textColor}` }}
          className="font-bold text-4xl "
        >
          <img src="/logo.png" className="w-[70px] h-[70px]  object-contain" />
        </a>

        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <a
            href="#home"
            className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
          >
            Home
          </a>

          <a
            href="#about"
            className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
          >
            About
          </a>

          <a
            href="#services"
            className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
          >
            Services
          </a>

          <a
            href="#contact"
            className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
          >
            Contact
          </a>
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
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-[#202020]  text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-[#202020]  text-white duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav}>
            <div class="flex flex-col justify-center items-center gap-4">
              <a
                href="#home"
                className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
              >
                Home
              </a>

              <a
                href="#about"
                className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
              >
                About
              </a>

              <a
                href="#services"
                className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
              >
                Services
              </a>

              <a
                href="#contact"
                className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
              >
                Contact
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
