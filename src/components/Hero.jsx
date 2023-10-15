import React from "react";

const Hero = () => {
  return (
    <div
      className=" md:pt-24 pt-20 pb-8  text-white bg-fixed  font-bold   bg-[#202020]  md:w-[100%] "
      style={{
        backgroundImage: `url("/bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:w-[100%] w-[90%] mx-auto flex md:flex-row flex-col-reverse justify-center items-center">
        <div className="md:w-[46%] flex  flex-col gap-6">
          <p className="text-7xl playfair font-semibold">Mr Kerry Martin</p>
          <p className="roboto">
            We design brand identities & digital interaction for
            industry-changing clients across the globe.
          </p>
          <p className="w-[100px] bg-white h-[1px]" />
          <p className="montserrat text-4xl">Explore my world</p>
        </div>
        <div className="md:w-[46%] h-[90%]">
          <div className="bg-[#2B2B2B] h-[100%] w-[100%] p-2 rounded-b-full rounded-tr-full">
            <img
              src="/image2.jpg"
              className="h-[100%] w-[100%] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
