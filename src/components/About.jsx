import React from "react";

const About = () => {
  return (
    <div className="bg-[#2B2B2B] md:h-[100vh] py-12 md:py-0 flex flex-col justify-center items-center">
      <div className="md:w-[80%] w-[90%] mx-auto md:h-[70%] p-4 flex  md:flex-row flex-col-reverse items-center   bg-[#191919] shadow-sm shadow-black rounded-md">
        <div className="md:w-[40%] h-[100%] z-0">
          <img
            src="/image.jpg"
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
        <div className="md:w-[60%] z-10 h-[80%] md:-ml-8  text-white   bg-[#202020] p-4 flex flex-col gap-4">
          <p className="text-xl roboto font-bold">Who is Mr Kerry Martin</p>
          <p className="montserrat">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim
            ad minim veniam, ommodo consequa. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia is be deserunt mollit anim
            id est la borum.
          </p>
          <p className="montserrat">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim
            ad minim veniam, ommodo consequa. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia is be deserunt mollit anim
            id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
