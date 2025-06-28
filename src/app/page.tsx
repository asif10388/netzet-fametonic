import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChevronRight from "@/icons/chevron-right/ChevronRight";

const featureList = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

export default function Home() {
  return (
    <main className="relative w-full font-[family-name:var(--font-figtree)]">
      <div className="flex flex-col lg:flex-row lg:min-w-[1080px] lg:mx-[211px] relative z-10">
        <div className="order-2 lg:order-1 lg:flex-grow flex flex-col lg:items-start lg:text-left lg:mt-[57px] text-center z-101 ml-1">
          <h1 className="order-1 text-3xl lg:text-[35px] font-bold font-[family-name:var(--font-urbanist)]">
            Want to Turn Social Media Into a <br className="hidden lg:inline-block" /> Profitable
            Career?
          </h1>

          <h2 className="order-2 text-3xl lg:text-[35px] font-bold font-[family-name:var(--font-urbanist)] text-secondary-b-500 heading-text-shadow">
            Discover your way to success
            <br className="hidden lg:inline-block" /> with Fametonic:
          </h2>

          <ul className="order-3 p-4 lg:p-0 list-none mt-4 font-semibold text-[16px] leading-[22px] flex flex-col items-center lg:items-start gap-y-[12px] lg:w-[516px] -ml-[1px]">
            {featureList.map((feature, index) => (
              <li key={index} className="flex items-center gap-x-[10px]">
                <div className="relative w-[23px] h-[23px] flex-shrink-0">
                  <Image
                    fill
                    priority
                    alt="Rocket Emoji"
                    src="/sparkles.png"
                    className="lg:-mt-[1.3px] object-contain object-center w-full h-full"
                  />
                </div>
                <span className="mt-[1px] opacity-90 text-left !lg:text-center">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="order-5 lg:order-4 flex flex-col justify-center items-center !lg:items-start mt-[29px] mb-[40px] lg:mb-0">
            <Button size="extended">
              <span className="ml-[4px] tracking-[0.04px] text-">GET STARTED</span>
              <ChevronRight className="size-[14px] ml-[7px]" />
            </Button>

            <span className="text-white opacity-80 font-normal text-[12px] mt-[9px] text-center">
              1-minute quiz for personalized Insights
            </span>
          </div>

          <div className="px-6 lg:px-0 order-4 lg:order-5 mt-[10px] lg:mt-[29px] flex flex-col text-[12px] text-muted-m-500 lg:w-[516px] font-medium">
            <span className="leading-[14px] tracking-[0.1px] text-[11.9px] font-normal">
              By clicking &quot;Get Started&quot;, you agree with Terms and Conditions, Privacy
              Policy, Subscription <br className="-mt-[15px] hidden lg:inline-block" /> Terms
            </span>

            <span className="text-[10px] mt-[11px]">Fametonic 2025 ©All Rights Reserved.</span>
          </div>
        </div>

        {/* Mobile Version of Image (in flow for small screens) */}
        <div className="order-1 lg:hidden mx-auto mt-10 w-[300px] h-[330px] relative">
          <Image
            fill
            priority
            alt="Mobile Hero"
            src="/Influe_mobile_mockup_3_1.png"
            className="object-contain object-center"
          />
        </div>

        {/* Large screen: absolutely positioned image */}
        <div className="hidden lg:block">
          <div className="absolute top-[310px] right-[-48px] -translate-y-1/2 w-[666px] h-[679px] z-[1]">
            <Image
              fill
              priority
              alt="Hero Image"
              src="/Influe_mobile_mockup_3_1_1.jpg"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
