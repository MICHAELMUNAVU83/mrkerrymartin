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
          <p className="text-4xl font-semibold">Creative & Digital Agency</p>
          <p>
            We design brand identities & digital interaction for
            industry-changing clients across the globe.
          </p>
          <p className="w-[100px] bg-white h-[1px]" />
          <p>See some of our latest projects below.</p>
        </div>
        <div className="md:w-[46%] h-[90%]">
          <img src="/image2.jpg" className="h-[100%] w-[100%] rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
