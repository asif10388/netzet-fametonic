import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex items-center justify-start lg:justify-center lg:w-[1440px] py-[10px] h-[76px] lg:h-[46px] banner-gradient font-[family-name:var(--font-figtree)] font-semibold text-center text-white mb-[35px]">
      <Image
        priority
        width={22}
        height={22}
        src="/rocket.png"
        alt="Rocket Emoji"
        className="lg:-mt-[4px] lg:mr-[6px]"
      />

      <span className="text-[16px] lg:text-[22px] align-middle tracking-[0.1px]">
        <span className="text-secondary-b-500 lg:inline-block font-bold">
          FRESH BEGINNINGS SALE:
        </span>{" "}
        <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
      </span>
    </div>
  );
};

export default Banner;
