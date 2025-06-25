import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="font-[family-name:var(--font-figtree)]">
      <div className="mx-auto max-w-[1080px] flex flex-wrap flex-col md:flex-row items-start">
        <a>
          <Image priority width={173.1219} height={74.0003} alt="Fametonic Logo" src="/logo.svg" />
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center justify-center text-[18px] font-semibold">
          <a className="mr-5 text-neutral-n-500">About Us</a>
          <a className="mr-5 text-neutral-n-500">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
