import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[100vh] pt-24 flex text-white bg-fixed  font-bold  justify-center items-center bg-[#202020] w-[100%] "
      style={{
        backgroundImage: `url("/bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[46%] flex  flex-col gap-6">
        <p className="text-4xl font-semibold">Creative & Digital Agency</p>
        <p>
          We design brand identities & digital interaction for industry-changing
          clients across the globe.
        </p>
        <p className="w-[100px] bg-white h-[1px]" />
        <p>See some of our latest projects below.</p>
      </div>
      <div className="w-[46%] h-[90%]">
        <img src="/image.jpg" className="h-[100%] w-[100%] object-cover" />
      </div>
    </div>
  );
};

export default Hero;
