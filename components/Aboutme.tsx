"use client";
import {
  LiaAwardSolid,
  RiCalendarCheckLine,
  BiSupport,
  LuSendHorizontal,
} from "./ui/icons";
import ButtonSite from "./ui/buttonsite";
import Image from "next/image";

export default function Aboutme() {
  return (
    <>
      <section className=" relative pt-16 scroll-mt-[100px] min-h-screen flex items-center">
        <div className="container" id="about">
          <div className="text-center">
            <span className="block text-colortheme2">My intro</span>
            <span className="block font-bold text-4xl">About me</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-16">
            {/* قسمت عکس سمت چپ  */}
            <div>
              <div className="bg-colortheme1 rounded-xl">
             

                <Image
                  src="/mohammad.png"
                  alt="soleymannzhad"
                  width={500}
                  height={500}
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>

            {/* توضیحات سمت راست  */}
            <div>
              <div className="md:px-8">
                <span className="block font-bold text-2xl pb-7">
                  I&apos;m Soleymannzhad, an Iranian from Mashhad.
                </span>
                <p className="text-gray-400 text-justify">
                  My expertise is in web development, mainly front-end
                  programming and design. I’m passionate about coding and eager
                  to grow. I prioritize professional project support to build
                  client trust.
                </p>

                {/* قسمت ایتم های بخش  */}
                <div className="pt-5 md:flex items-center justify-around">
                  <div className="bg-colortheme1 text-center p-7 m-2">
                    <span className="flex justify-center items-center m-2 ">
                      <LiaAwardSolid className="text-4xl text-colortheme2" />
                    </span>
                    <span className="block m-2 text-center">Experience </span>
                    <span className="block m-2 text-center">3 + Yaers </span>
                  </div>

                  <div className="bg-colortheme1 text-center p-7 m-2">
                    <span className="flex justify-center items-center m-2 ">
                      <RiCalendarCheckLine className="text-4xl text-colortheme2" />
                    </span>
                    <span className="block m-2 text-center">Completed </span>
                    <span className="block m-2 text-center">
                      10 + Projects{" "}
                    </span>
                  </div>

                  <div className="bg-colortheme1 text-center p-7 m-2">
                    <span className="flex justify-center items-center m-2 ">
                      <BiSupport className="text-4xl text-colortheme2" />
                    </span>
                    <span className="block m-2 text-center">Support </span>
                    <span className="block m-2 text-center">Online 24/7 </span>
                  </div>
                </div>

                {/* قسمت دکمه  */}
                <div>
                  <div className="text-center md:text-left  my-10 mx-2">
                    <ButtonSite href="#">
                      <LuSendHorizontal className="inline-block text-2xl" />
                      <span className="ml-2">Contact Me</span>
                    </ButtonSite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
