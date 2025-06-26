import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-[1080px] mx-[211px] font-[family-name:var(--font-figtree)] flex flex-wrap flex-col md:flex-row items-start">
      <a>
        <Image priority width={173.1219} height={74.0003} alt="Fametonic Logo" src="/logo.svg" />
      </a>

      <nav className="md:ml-auto flex flex-wrap items-center justify-center text-[18px] font-semibold pr-[66px] -mt-[2px]">
        <a className="text-neutral-n-500 mr-[46px]">About us</a>
        <a className="text-neutral-n-500">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
