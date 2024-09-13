"use client";
import TextReveal from "@/components/magicui/text-reveal";

export default function TextRevealDemo() {
  return (
    <>
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg  bg-[#e0ff7d] ">
      <TextReveal className="dark:text-[#000] text-[#e0ff7d]"  text="The agile development process allows for quick literation and improvement of the software." />
    </div>
    </>
  );
}


