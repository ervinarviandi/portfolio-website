import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { VscSearchFuzzy } from "react-icons/vsc";
import { IoAnalyticsOutline } from "react-icons/io5";
import { TbDeviceMobile } from "react-icons/tb";




export function FeaturedCard() {
  const { theme } = useTheme();
  return (
    <>
    <div className="w-full lg:max-w-5xl px-5">
    <h2 className="lg:text-3xl text-2xl font-bold">Services</h2>
    <p className="lg:text-md text-sm mt-5">I can deliver the following services</p>
    <div
      className={
        "flex  w-full lg:max-w-6xl p-5 mx-auto flex-col gruid md:grid-cols-4 gap-4  lg:flex-row"
      }
      >
      
      <MagicCard
        className="cursor-pointer p-5 shadow-2xl 8  border-2 "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        
        >
        <div className="flex items-center gap-x-2 mb-4 text-sm">
        <HiOutlineComputerDesktop />
        Website Development
        </div>
        <span className=" text-teal-200 text-sm">#coding</span>
        <p className="text-sm mt-5 dark:text-[#777777] text-[#454a55]">Create stunning, user-friendly fullstack web applications using modern technologies.</p>
      </MagicCard>
      <MagicCard
        className="cursor-pointer p-5 shadow-2xl 8  border-2 "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        
        >
        <div className="flex items-center gap-x-2 mb-4 text-sm">
        <IoAnalyticsOutline size={20} />
        Analitycs Integration
        </div>
        <span className=" text-teal-200 text-sm">#marketing</span>
        <p className="text-sm mt-5 dark:text-[#777777] text-[#454a55]">Create Implement Google Tag Manager, Google Analytics, and Mixpanel for data-driven insights.</p>
      </MagicCard>
      <MagicCard
        className="cursor-pointer p-5 shadow-2xl 8  border-2 "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        
        >
        <div className="flex items-center gap-x-2 mb-4 text-sm">
        <TbDeviceMobile />
        Responsive Design
        </div>
        <span className=" text-teal-200 text-sm">#coding</span>
        <p className="text-sm mt-5 dark:text-[#777777] text-[#454a55]">Create stunning, user-friendly, responsive web applications &  modern technologies. </p>
      </MagicCard>
      <MagicCard
        className="cursor-pointer p-5 shadow-2xl 8  border-2 "
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        
        >
        <div className="flex items-center flex-row gap-x-2 mb-4 text-sm">
        < VscSearchFuzzy size={20}/>
        SEO
        </div>
        <span className=" text-teal-200 text-sm">#marketing</span>
        <p className="text-sm mt-5 dark:text-[#777777] text-[#454a55]">Create Improvement Search Engine Optimization and web performance.</p>
      </MagicCard>
      


      {/* Dedault */}
      {/* <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
        Card
        </MagicCard> */}
    </div>
        </div>
     </>
  );
}
