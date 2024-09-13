import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
 
export function TextBase() {
  return (
    <div className="w-full py-10 z-50 h-96 relative">
        <div className="w-full  mx-auto px-5  ">
          <div className="w-32 h-32 bg-[#e0ff7d] rounded-full blur-3xl backdrop-blur absolute right-0 top-0" ></div>
        <VelocityScroll
      text="Web Developer, Digital Artist, Frontend Engineer" 
      default_velocity={5}
      className="w-full font-display text-center text-4xl font-bold tracking-[-0.02em]  drop-shadow-sm text-[#e0ff7d] md:text-7xl md:leading-[5rem]"
      />
      </div>
      </div>
  );
}