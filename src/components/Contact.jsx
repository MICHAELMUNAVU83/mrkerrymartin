import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { BiRadio } from "react-icons/bi";

const Contact = () => {
  return (
    <div id="contact">
      <div
        className="md:h-[30vh] h-[20vh]  playfair flex text-white md:text-7xl text-4xl font-bold  justify-center items-center bg-[#202020] w-[100%] "
        style={{
          backgroundImage: `url("/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Reach Out To Me
      </div>
      <div className="w-[100%] bg-[#2B2B2B] ">
        <div className="md:w-[80%] w-[90%] py-12 mx-auto grid md:grid-cols-6 gap-4 grid-cols-2">
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <BsInstagram className="text-4xl text-white" />
            </div>
            <p className="uppercase   montserrat font-semibold">Instagram</p>
            <p className="roboto">kerrymartin</p>
          </div>
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <BsTwitter className="text-4xl text-white" />
            </div>
            <p className="uppercase  montserrat font-semibold">Twitter</p>
            <p className="roboto">kerry martin</p>
          </div>
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <BsYoutube className="text-4xl text-white" />
            </div>
            <p className="uppercase  montserrat font-semibold">Youtube</p>
            <p className="roboto">BoxPod</p>
          </div>
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <BiRadio className="text-4xl text-white" />
            </div>
            <p className="uppercase  montserrat font-semibold">Radio</p>
            <p className="roboto">Homeboyz radio</p>
          </div>
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <ImWhatsapp className="text-4xl text-white" />
            </div>
            <p className="uppercase  montserrat font-semibold">Whatsapp</p>
            <p className="roboto">+25474975297</p>
          </div>
          <div className="flex flex-col text-white justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] rounded-full border-[1px] flex flex-col justify-center items-center border-white">
              <SiGmail className="text-4xl text-white" />
            </div>
            <p className="uppercase montserrat font-semibold">Gmail</p>
            <p className="text-sm roboto">mrkerrymartin@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] bg-[#2B2B2B] ">
        <p className="text-5xl playfair md:w-[80%] w-[90%] mx-auto font-semibold text-white ">
          Have A Question?
        </p>
        <div className="md:w-[80%] roboto w-[90%] py-12 mx-auto ">
          <form className="w-[100%] flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-2 justify-between w-[100%]">
              <div className="md:w-[48%] flex flex-col gap-1">
                <input
                  className="w-[100%] border-[1px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Your Name"
                />
              </div>
              <div className="md:w-[48%] flex flex-col gap-1">
                <input
                  className="w-[100%] border-[1px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 justify-between w-[100%]">
              <div className="md:w-[48%] flex flex-col gap-1">
                <input
                  className="w-[100%] border-[1px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="md:w-[48%] flex flex-col gap-1">
                <input
                  className="w-[100%] border-[1px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="flex w-[100%]">
              <div className="w-[100%] flex flex-col gap-1">
                <textarea
                  className="w-[100%] border-[1px] h-[100px] bg-transparent focus:outline-none  p-2 border-[#666666]"
                  placeholder="Message"
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
        <div className="md:w-[80%] w-[90%] flex md:flex-row flex-col gap-4 justify-between md:items-center items-start mx-auto py-6">
          <div className=" text-white flex flex-col gap-2">
            <p classname="playfair">Mr Kerry Martin </p>
            <p className="text-[#3C3D3C] roboto">mrkerrymartin@gmail.com</p>
            <div className="flex gap-2 items-center">
              <BsInstagram className="text-white " />
              <BsTwitter className="text-white " />
              <ImWhatsapp className="text-white " />
              <SiGmail className="text-white " />
            </div>
          </div>
          <div className="text-white">
            <img
              src="/logo.png"
              alt=""
              className="w-[100px] object-contain h-[100px]"
            />
          </div>

          <div className=" text-white roboto flex flex-col gap-2">
            <p>Designed by</p>
            <p className="text-[#3C3D3C] text-xs md:text-base flex gap-2 items-center">
              <span className="montserrat">
                <a
                  href="https://michaelmunavu.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Michael Munavu
                </a>
              </span>
              <span className="text-white">and</span>

              <span className="montserrat">
                {" "}
                <a
                  href="https://kiprotichkimutai.dev"
                  rel="noreferrer"
                  target="_blank"
                >
                  Kimutai Kiprotich{" "}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
