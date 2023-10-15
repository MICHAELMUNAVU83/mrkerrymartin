import React from "react";

const About = () => {
  return (
    <div className="bg-[#2B2B2B] h-[100vh] flex flex-col justify-center items-center">
      <div className="w-[80%] mx-auto h-[70%] p-4 flex items-center   bg-[#191919] shadow-sm shadow-black rounded-md">
        <div className="w-[40%] h-[100%] z-0">
          <img
            src="/image.jpg"
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
        <div className="w-[60%] z-10 h-[80%] -ml-8 text-white   bg-[#202020] p-4 flex flex-col gap-4">
          <p className="text-xl font-bold">Who is Mr Kerry Martin</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim
            ad minim veniam, ommodo consequa. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia is be deserunt mollit anim
            id est la borum.
          </p>
          <p>
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
