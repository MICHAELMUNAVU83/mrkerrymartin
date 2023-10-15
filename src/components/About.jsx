import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#2B2B2B] md:h-[100vh] py-12 md:py-0 flex flex-col justify-center items-center">
      <div className="md:w-[80%] w-[90%] mx-auto md:h-[70%] p-4 flex  md:flex-row flex-col-reverse items-center   bg-[#191919] shadow-sm shadow-black rounded-md">
        <div className="md:w-[40%] h-[100%] z-0">
          <img
            src="/image3.jpg"
            alt=""
            className="w-[100%] h-[100%] object-cover rounded-md"
          />
        </div>
        <div className="md:w-[60%] z-10 h-[90%] md:-ml-8  text-white   bg-[#202020] p-4 flex flex-col gap-4">
          <p className="text-xl playfair font-bold">Who is Mr Kerry Martin ?</p>
          <p className="montserrat">
            Hey there, I'm Martin Kerry, the voice behind the stories on Radio
            Homeboyz. I'm not just a radio presenter—I'm your companion on a
            musical journey, blending beats and lyrics to create an experience
            that transcends genres. Whether it's the rhythm that moves you or
            the lyrics that touch your soul, join me on the airwaves for a
            unique, soul-stirring adventure.
          </p>
          <p className="montserrat">
            Beyond the radio waves, you can find me over at BoxPod, where I dive
            into engaging conversations, extending the storytelling beyond the
            realm of music. Proudly donning the hat of a Johnnie Walker brand
            ambassador, I'm all about spreading good vibes and celebrating the
            journey. Let's connect through the power of sound and stories.
            Cheers to the adventure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
