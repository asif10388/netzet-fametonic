import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex items-center justify-start sm:justify-center sm:w-[1440px] py-[10px] h-[76px] sm:h-[46px] banner-gradient font-[family-name:var(--font-figtree)] font-semibold text-center text-white mb-[35px] -ml-[5px]">
      {/* <Image
        priority
        width={22}
        height={22}
        src="/rocket.png"
        alt="Rocket Emoji"
        className="sm:-mt-[4px] sm:mr-[6px] flex-grow"
      /> */}

      <span className="text-[16px] sm:text-[22px] align-middle">
        <span className="text-secondary-b-500 sm:pr-[6px] sm:inline-block font-bold">
          🚀 FRESH BEGINNINGS SALE:
        </span>{" "}
        <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
      </span>
    </div>
  );
};

export default Banner;
