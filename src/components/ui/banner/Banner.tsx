import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-[1440px] py-[10px] h-[46px] banner-gradient font-[family-name:var(--font-figtree)] font-semibold text-center text-white mb-[35px] align-middle">
      <p className="flex text-[22px] tracking-[0%] align-middle justify-center items-center -mt-[3px] -ml-[6px]">
        <Image
          priority
          width={22}
          height={22}
          src="/rocket.png"
          alt="Rocket Emoji"
          className="-mt-[4px] mr-[5px]"
        />
        <span className="text-secondary-b-500 pr-[6px] inline-block font-bold">
          FRESH BEGINNINGS SALE:
        </span>{" "}
        Extra 25% OFF, Limited Spots - start your journey today!
      </p>
    </div>
  );
};

export default Banner;
