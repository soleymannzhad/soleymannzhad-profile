import {
  MdOutlineDateRange,
  PiStudentLight,
  BiBriefcaseAlt2,
} from "./ui/icons";

export default function Journey() {
  return (
    <>
      <section className=" relative mb-16  scroll-mt-[100px] min-h-screen" >
        <div className="container " id="journey">
          {/* قسمت هدر */}
          <div className="text-center">
            <span className="block text-colortheme2">My journey</span>
            <span className="block font-bold text-4xl">Qualification</span>
          </div>

          {/* قسمت دو ستون این بخش  */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-16 md:mx-36">
            {/* گرید سمت چپ  */}

            <div>
              <div className="text-white flex items-center md:mb-8 text-2xl font-bold">
                <PiStudentLight /> Education
              </div>

              <div className="grid grid-cols-1">

                 <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1 mt-8">
                  <div className="pl-4">
                    <span className="font-bold text-lg">
                     freeCodeCamp Organization (California)
                    </span>
                    <p className="text-gray-400">Front-End Development Specialization</p>
                    <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                      <span>
                        <MdOutlineDateRange />
                      </span>
                      <span className="ml-2">2024 – 2025</span>
                    </span>
                  </div>

                  <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>
                </div>

                <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1  mt-8">
                  <div className="pl-4">
                    <span className="font-bold text-lg">
                      Zakaria Institute (Mashhad)
                    </span>
                    <p className="text-gray-400">Programming and Web Development</p>
                    <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                      <span>
                        <MdOutlineDateRange />
                      </span>
                      <span className="ml-2">2023 – 2024</span>
                    </span>
                  </div>

                  <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>
                </div>

                  <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1  mt-8">
                  <div className="pl-4">
                    <span className="font-bold text-lg">
                      Safaei High School (Mashhad – Layen)
                    </span>
                    <p className="text-gray-400">Diploma in Experimental Sciences</p>
                    <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                      <span>
                        <MdOutlineDateRange />
                      </span>
                      <span className="ml-2">2017 – 2020</span>
                    </span>
                  </div>

                  <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>
                </div>
              </div>
            </div>

            {/* گرید سمت راست  */}

            <div>

              <div className="text-white flex items-center md:mb-8 text-2xl font-bold">
                <BiBriefcaseAlt2 /> Experience
              </div>

              <div className="grid grid-cols-1">

                <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1  mt-8">
                  <div className="pl-4">
                    <span className="font-bold text-lg">
                      Freelancer (All Iran)
                    </span>
                    <p className="text-gray-400">Front-End Development and WordPress</p>
                    <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                      <span>
                        <MdOutlineDateRange />
                      </span>
                      <span className="ml-2">2024 – Present</span>
                    </span>
                  </div>

                  <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>
                </div>

                <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1  mt-8">
                  <div className="pl-4">
                    <span className="font-bold text-lg">
                    Bealaveh Company (Mashhad)
                    </span>
                    <p className="text-gray-400">Programming – Front-End Development</p>
                    <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                      <span>
                        <MdOutlineDateRange />
                      </span>
                      <span className="ml-2">2024 – Present</span>
                    </span>
                  </div>

                  <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>
                </div>

                <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1 mt-8">
                  <div className="pl-4">
                    <span className="font-bold text-lg">
                      Navaaran Bartar Company (Mashhad)
                    </span>
                    <p className="text-gray-400">Junior Web Designer</p>
                    <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                      <span>
                        <MdOutlineDateRange />
                      </span>
                      <span className="ml-2">2023 – 2024</span>
                    </span>
                  </div>

                  <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
