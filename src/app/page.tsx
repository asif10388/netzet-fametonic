import { Button } from "@/components/ui/button";
import Image from "next/image";
import ChevronRight from "@/icons/chevron-right/ChevronRight";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-figtree)]">
      <main className="flex flex-col items-center sm:items-start max-w-[1080px] mx-auto">
        <div className="mx-auto flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-50">
            <h1 className="text-3xl sm:text-[35px] font-bold font-[family-name:var(--font-urbanist)]">
              Want to Turn Social Media Into a <br /> Profitable Career?
            </h1>

            <h2 className="text-3xl sm:text-[35px] font-bold font-[family-name:var(--font-urbanist)]">
              Discover your way to success with Fametonic:
            </h2>

            <div className="flex justify-center">
              <Button size="extended">
                <span>GET STARTED</span>
                <ChevronRight className="size-3" />
              </Button>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -ml-[120px]">
            <Image
              priority
              width={666}
              height={679}
              alt="Hero Image"
              src="/Influe_mobile_mockup_3_1.png"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
