import React from "react";
import { HiLocationMarker } from "react-icons/hi";
const Contact = () => {
  return (
    <div>
      <div
        className="h-[40vh] flex text-white text-5xl font-bold  justify-center items-center bg-[#202020] w-[100%] "
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Reach Out To Me
      </div>
      <div className="w-[100%] bg-[#2B2B2B] ">
        <div className="w-[80%] py-12 mx-auto flex justify-between items-start">
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <HiLocationMarker className="text-4xl text-white" />
            </div>
            <p className="uppercase font-semibold">Address</p>
            <p>Juja Road , Langata</p>
          </div>
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <HiLocationMarker className="text-4xl text-white" />
            </div>
            <p className="uppercase font-semibold">Address</p>
            <p>Juja Road , Langata</p>
          </div>
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <HiLocationMarker className="text-4xl text-white" />
            </div>
            <p className="uppercase font-semibold">Address</p>
            <p>Juja Road , Langata</p>
          </div>
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <HiLocationMarker className="text-4xl text-white" />
            </div>
            <p className="uppercase font-semibold">Address</p>
            <p>Juja Road , Langata</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#2B2B2B] ">
        <p className="text-5xl w-[80%] mx-auto font-semibold text-white ">
          Have A Question?
        </p>
        <div className="w-[80%] py-12 mx-auto ">
          <form className="w-[100%] flex flex-col gap-4">
            <div className="flex justify-between w-[100%]">
              <div className="w-[48%] flex flex-col gap-1">
                <input
                  className="w-[100%] border-[1px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-[48%] flex flex-col gap-1">
                <input
                  className="w-[100%] border-[1px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="flex justify-between w-[100%]">
              <div className="w-[48%] flex flex-col gap-1">
                <input
                  className="w-[100%] border-[1px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-[48%] flex flex-col gap-1">
                <input
                  className="w-[100%] border-[1px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="flex w-[100%]">
              <div className="w-[100%] flex flex-col gap-1">
                <textarea
                  className="w-[100%] border-[1px] h-[100px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="w-[100%">
              <button className="p-2 bg-white rounded-2xl">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-[100%] bg-[#111111]">
        <div className="w-[80%] flex justify-between items-center mx-auto py-6">
          <div className=" text-white flex flex-col gap-2">
            <p>Juja Done</p>
            <p className="text-[#3C3D3C]">Hello @gmail.com</p>
            <div className="flex gap-2 items-center">
              <HiLocationMarker className="text-white " />
              <HiLocationMarker className="text-white " />
              <HiLocationMarker className="text-white " />
              <HiLocationMarker className="text-white " />
            </div>
          </div>
          <div>Logo</div>

          <div className=" text-white flex flex-col gap-2">
            <p className="text-[#3C3D3C]">Juja Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
