"use client";

import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  LuUserRound,
  MdOutlineMarkEmailRead,
  BiMessageRoundedDots,
  CiTwitter
} from "./ui/icons";
import Image from "next/image";


import { TextGenerateEffect } from "./ui/text-generate-effect";
import ButtonSite from "./ui/buttonsite";

const HiroSection = () => {
  return (
    <section id="home" className=" flex items-center bg-colortheme1 min-h-screen mb-16">
      <div className="relative pt-24 md:pt-10 container">
        <div className="relative">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-[3fr_2fr] gap-x-16">
            <div className="pb-0 md:pb-28">
              {/* قسمت سوشال در هدر  */}
              <div>
                <div className="flex items-center">
                  <span>Fallow Me</span>
                  <span className="mr-1.5 ml-1.5 w-7 h-0.5 bg-white block "></span>
                  <span className="flex items-center space-x-3 ">
                    <a
                      href="https://www.instagram.com/soleymannzhad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-colortheme2 text-xl"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://t.me/soleymannzhad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-colortheme2 text-xl"
                    >
                      <FaTelegramPlane />
                    </a>
                    <a
                      href="https://twitter.com/soleymannzhad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-colortheme2 text-xl "
                    >
                      <CiTwitter />
                    </a>
                  </span>
                </div>
              </div>

              {/* قسمت درباره من در هیرو سکشن  */}

              <div className="pt-16">
                <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl xl:text-5xl font-bold">
                  <span>Hi, I&apos;m Soleymannzhad</span>
                </h1>
                <div>
                  <span className="custoooom">Front-end Development</span>
                </div>
                <div className="mt-4 sm:mt-8 text-lg font-normal text-gray-400">
                  <TextGenerateEffect
                    className="text-amber-50"
                    words={`I am a web developer passionate about creating practical, modern, and user-friendly digital solutions. My expertise lies in front-end and back-end programming, as well as developing optimized and professional websites that provide a great user experience.`}
                  />
                </div>
              </div>

              {/* دکمه درباره من در هیرو سکشن  */}
              <div className="my-10">
                <ButtonSite>
                  <LuUserRound className="inline-block text-2xl" />
                  <span>More About Me :</span>
                </ButtonSite>
              </div>

              {/* آیتم ایمیل و ... در هدر  */}

              <div>
                <div className=" md:flex items-center justify-around">
                  <div>
                    <div className="flex items-center pt-3">
                      <div>
                        <BiMessageRoundedDots className="text-colortheme2 text-4xl" />
                      </div>
                      <div className="ml-2">
                        <span className="block font-bold">Messages</span>
                        <span className="block text-sm text-gray-400">
                          soleymannzhad
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center pt-3">
                      <div>
                        <FaWhatsapp className="text-colortheme2 text-4xl" />
                      </div>
                      <div className="ml-2">
                        <span className="block font-bold">Whatsapp</span>
                        <span className="block text-sm text-gray-400">
                          0915-814-7344
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center pt-3">
                      <div>
                        <MdOutlineMarkEmailRead className="text-colortheme2 text-4xl" />
                      </div>
                      <div className="ml-2">
                        <span className="block font-bold">Email</span>
                        <span className="block text-sm text-gray-400">
                          soleymannzhad@gmail.com
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="relative">
           
               <Image
                className="relative md:absolute bottom-0 right-0 w-full max-w-md mx-auto "
              width={500}
              height={500}
                src="/mohammad.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiroSection;
