import {
MdOutlineDateRange,
PiStudentLight,
BiBriefcaseAlt2
} from "./ui/icons";


export default function Journey() {
  return (
    <>
      <section className=" relative pt-16  scroll-mt-[100px] min-h-screen">
        <div className="container ">
          {/* قسمت هدر */}
          <div className="text-center">
            <span className="block text-colortheme2">My journey</span>
            <span className="block font-bold text-4xl">Qualification</span>
          </div>

          {/* قسمت دو ستون این بخش  */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-16 md:mx-40">


{/* گرید سمت چپ  */}
            <div>
                <div className="text-white flex items-center mb-8 text-2xl"><PiStudentLight/> Education </div>


                <div className="grid grid-cols-1">

                    <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1  mt-8">
                        <div className="pl-4">
                        <span className="font-bold text-lg">B.Sc. in Computer Science</span>
                        <p className="text-gray-400">University of Tehran</p>
                        <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                            <span><MdOutlineDateRange/></span> 
                        <span className="ml-2">2020 – 2024</span>
                        </span>
                        </div>

                        <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>

                    </div>



                    <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1  mt-8">
                        <div className="pl-4">
                        <span className="font-bold text-lg">B.Sc. in Computer Science</span>
                        <p className="text-gray-400">University of Tehran</p>
                        <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                            <span><MdOutlineDateRange/></span> 
                        <span className="ml-2">2020 – 2024</span>
                        </span>
                        </div>

                        <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>

                    </div>



                    <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1 mt-8">
                        <div className="pl-4">
                        <span className="font-bold text-lg">B.Sc. in Computer Science</span>
                        <p className="text-gray-400">University of Tehran</p>
                        <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                            <span><MdOutlineDateRange/></span> 
                        <span className="ml-2">2020 – 2024</span>
                        </span>
                        </div>

                        <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>

                    </div>

                </div>


                
            </div>


{/* گرید سمت راست  */}

  <div>
                <div className="text-white flex items-center mb-8 text-2xl"><BiBriefcaseAlt2/> Experience </div>


                <div className="grid grid-cols-1">

                    <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1  mt-8">
                        <div className="pl-4">
                        <span className="font-bold text-lg">B.Sc. in Computer Science</span>
                        <p className="text-gray-400">University of Tehran</p>
                        <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                            <span><MdOutlineDateRange/></span> 
                        <span className="ml-2">2020 – 2024</span>
                        </span>
                        </div>

                        <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>

                    </div>



                    <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1  mt-8">
                        <div className="pl-4">
                        <span className="font-bold text-lg">B.Sc. in Computer Science</span>
                        <p className="text-gray-400">University of Tehran</p>
                        <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                            <span><MdOutlineDateRange/></span> 
                        <span className="ml-2">2020 – 2024</span>
                        </span>
                        </div>

                        <span className="absolute -left-[6px] -top-[5px] bg-colortheme2 rounded-full w-3 h-3"></span>

                    </div>



                    <div className="relative border-colortheme2 border-l leading-7 hover:border-colortheme1 mt-8">
                        <div className="pl-4">
                        <span className="font-bold text-lg">B.Sc. in Computer Science</span>
                        <p className="text-gray-400">University of Tehran</p>
                        <span className="flex items-center text-colortheme2 text-sm mt-3 ">
                            <span><MdOutlineDateRange/></span> 
                        <span className="ml-2">2020 – 2024</span>
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
