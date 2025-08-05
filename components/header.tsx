'use client';

import React, { useState } from 'react';
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-scroll";
  import Image from 'next/image';




export default function Header() {
  const [expanded, setExpanded] = useState(false);


  return (
<header className="fixed top-0 left-0 w-full md:w-16 z-50 md:h-full bg-black md">

  
    
      <div className="p-2.5">
        <div className="flex justify-between md:block">
          <div className="shrink-0">
            <a href="#" title="" className=" text-white">

              <Image
               src="/logoMS.png"
               alt="logo" 
               width={56}
               height={56}
               className='w-14 bg-colortheme2 rounded-full'/>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              aria-expanded={expanded}
              onClick={() => setExpanded(!expanded)}
            >
              {!expanded ? (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Desktop navigation */}
 <nav className="hidden md:flex flex-col items-center justify-center h-screen">
  <div className="flex flex-col items-center h-[520px] w-full">
    {[
      { label: 'Home', to: 'home' },
      { label: 'About', to: 'about' },
      { label: 'Skills', to: 'skills' },
      { label: 'Work', to: 'work' },
      { label: 'Services', to: 'services' },
      { label: 'Contact', to: 'contact' },


    ].map(({ label, to }) => (
      <Link
        key={label}
        to={to}
        smooth={true}
        duration={600}
        offset={-20}
        spy={true}
        activeClass="active-link"
        className="flex-1 flex items-center justify-center text-base p-1 font-normal text-gray-400 transition-all duration-200 hover:text-white writing-mode-vertical-rl rotate-180 cursor-pointer"
      >
        {label}
      </Link>
    ))}
    <div className="flex-1 flex items-center justify-center">
      <AiOutlineShareAlt className="text-gray-400 hover:text-white text-2xl transition-all duration-300 hover:rotate-45" />
    </div>
  </div>
</nav>


          {/* Free trial button */}
        </div>
        {/* Mobile navigation - collapsible */}
        {expanded && (
          <nav>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              {['Home', 'Services', 'Portfolio', 'Support'].map((item) => (
                <a
                  key={item}
                  href="#"
                  title={item}
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  {item}
                </a>
              ))}
           
            </div>
          </nav>
        )}
      </div>

     
    </header>
  );
}
