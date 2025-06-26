import React from "react";
import Image from "next/image";
import Line from "@/icons/line/Line";

const Navbar = () => {
  return (
    <header className="relative sm:w-[1080px] sm:mx-[211px] font-[family-name:var(--font-figtree)] flex flex-wrap flex-row justify-center sm:justify-start items-start">
      <a className="relative w-[107.78px] h-[46.07px] sm:w-[173.1219px] sm:h-[74.0003px]">
        <Image
          priority
          fill
          alt="Fametonic Logo"
          src="/logo.svg"
          className="w-full object-cover object-center"
        />
      </a>

      <div className="absolute top-[26%] right-[8%] sm:hidden flex flex-col items-center justify-center gap-y-[4px]">
        <Line />
        <Line />
        <Line />
      </div>

      <nav className="md:ml-auto hidden sm:flex flex-wrap items-center justify-center text-[18px] font-semibold pr-[66px] -mt-[2px]">
        <a className="text-neutral-n-500 mr-[46px]">About us</a>
        <a className="text-neutral-n-500">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
