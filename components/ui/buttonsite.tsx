'use client';

import React from 'react';

type ButtonSiteProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  target?: string;
  rel?: string;
};

export default function ButtonSite({ children, href, onClick, target, rel }: ButtonSiteProps) {
  const commonClasses = `
    relative
    overflow-hidden
    rounded-[5px]
    bg-[#CA0049]
    text-white
    px-5
    py-2
    transition-colors
    duration-300
    before:absolute
    before:inset-0
    before:bg-[#18171D]
    before:origin-center
    before:scale-x-0
    before:transition-transform
    before:duration-300
    before:pointer-events-none
    hover:before:scale-x-100
    hover:text-white
    inline-block
    text-center
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={commonClasses}
        onClick={onClick}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={commonClasses} onClick={onClick}>
      <span className="relative z-10" >{children}</span>
    </button>
  );
}
