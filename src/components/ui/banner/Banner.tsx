import React from "react";

const Banner = () => {
  return (
    <div className="flex px-[20px] lg:px-0 items-center justify-center lg:w-[1440px] py-[10px] h-[76px] lg:h-[46px] banner-gradient font-[family-name:var(--font-figtree)] font-semibold text-center text-white mb-[35px]">
      <span className="text-[16px] lg:text-[22px] lg:-ml-[15px]">
        <span className="text-secondary-b-500 lg:pr-[1px] lg:inline-block font-bold">
          🚀 FRESH BEGINNINGS SALE:
        </span>{" "}
        <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
      </span>
    </div>
  );
};

export default Banner;
