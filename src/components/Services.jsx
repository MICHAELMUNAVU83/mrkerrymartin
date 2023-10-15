import React from "react";

const Services = () => {
  return (
    <div>
      {" "}
      <div
        className="h-[40vh] flex text-white text-5xl font-bold  justify-center items-center bg-[#202020] w-[100%] "
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        What I do
      </div>
      <div className="w-[100%] py-12 bg-[#202020] flex flex-col gap-4">
        <div className="w-[80%] mx-auto flex justify-between">
          <div className="bg-[#191919] w-[22%] h-[200px] shadow-sm shadow-black rounded-md flex flex-col justify-center items-center"></div>
          <div className="bg-[#191919] w-[22%] h-[200px] shadow-sm shadow-black rounded-md flex flex-col justify-center items-center"></div>
          <div className="bg-[#191919] w-[22%] h-[200px] shadow-sm shadow-black rounded-md flex flex-col justify-center items-center"></div>
          <div className="bg-[#191919] w-[22%] h-[200px] shadow-sm shadow-black rounded-md flex flex-col justify-center items-center"></div>
        </div>
      </div>
      <div className="bg-[#202020] py-8 min-h-[80vh]">
        <div className="flex flex-col gap-4 w-[80%] mx-auto">
          <div className="flex text-white text-xl  gap-4 ">
            <p className="hover:underline duration-500 ease-in-out  transition-all cursor-pointer">
              All
            </p>
            <p className="hover:underline duration-500 ease-in-out  transition-all cursor-pointer">
              Events
            </p>
            <p className="hover:underline duration-500 ease-in-out  transition-all cursor-pointer">
              Podcasts
            </p>
            <p className="hover:underline duration-500 ease-in-out  transition-all cursor-pointer">
              Brands
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="w-[100%] h-[550px]">
              <img
                src="/image.jpg"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="w-[100%] h-[550px]">
              <img
                src="/image.jpg"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
