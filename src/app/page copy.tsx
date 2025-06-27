import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChevronRight from "@/icons/chevron-right/ChevronRight";

const featureList = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

export default function HeroSection() {
  return (
    <main className="relative w-full overflow-hidden bg-black text-white font-[family-name:var(--font-figtree)]">
      {/* Content Wrapper */}
      <div className="flex flex-col lg:flex-row lg:min-w-[1080px] lg:mx-[211px] relative z-10">
        {/* Left Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left mt-12 lg:mt-[57px] z-10">
          {/* Headings */}
          <h1 className="text-3xl lg:text-[35px] font-bold font-[family-name:var(--font-urbanist)]">
            Want to Turn Social Media Into a <br className="hidden lg:inline-block" />
            Profitable Career?
          </h1>

          <h2 className="mt-4 text-3xl lg:text-[35px] font-bold text-secondary-b-500 heading-text-shadow font-[family-name:var(--font-urbanist)]">
            Discover your way to success <br className="hidden lg:inline-block" />
            with Fametonic:
          </h2>

          {/* Features List */}
          <ul className="mt-6 list-none font-semibold text-[16px] leading-[22px] flex flex-col gap-y-[12px] lg:w-[516px] px-6 lg:px-0">
            {featureList.map((feature, index) => (
              <li key={index} className="flex items-start gap-x-[10px]">
                <div className="relative w-[22.4px] h-[22.4px] flex-shrink-0 mt-[2px]">
                  <Image
                    fill
                    priority
                    alt="Sparkles"
                    src="/sparkles.png"
                    className="object-contain"
                  />
                </div>
                <span className="text-left opacity-90">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-[29px] mb-[40px] lg:mb-0 flex flex-col items-center lg:items-start">
            <Button size="extended">
              <span className="ml-[4px] tracking-[0.04px]">GET STARTED</span>
              <ChevronRight className="size-[14px] ml-[7px]" />
            </Button>
            <span className="text-white opacity-80 font-normal text-[12px] mt-[9px] text-center">
              1-minute quiz for personalized Insights
            </span>
          </div>

          {/* Footer Text */}
          <div className="px-6 lg:px-0 text-[12px] text-muted-m-500 lg:w-[516px]">
            <span className="leading-[14px] tracking-[0.1px]">
              By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy
              Policy, Subscription <br className="-mt-[15px] hidden lg:inline-block" />
              Terms
            </span>
            <span className="text-[10px] mt-[11px] block">
              Fametonic 2025 ©All Rights Reserved.
            </span>
          </div>
        </div>

        {/* Mobile Version of Image (in flow for small screens) */}
        <div className="order-1 lg:hidden mx-auto mt-10 w-[300px] h-[330px] relative">
          <Image
            fill
            priority
            alt="Mobile Hero"
            src="/Influe_mobile_mockup_3_1.png"
            className="object-contain"
          />
        </div>

        {/* Large screen: absolutely positioned image */}
        <div className="hidden lg:block">
          <div className="absolute top-[465px] right-0 -translate-y-1/2 w-[666px] h-[679px] z-0">
            <Image
              fill
              priority
              alt="Hero Image"
              src="/Influe_mobile_mockup_3_1.png"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
