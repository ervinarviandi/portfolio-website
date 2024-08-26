import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
 
export function TextBase() {
  return (
    <div className="w-full py-10 z-50">
        <div className="w-full  mx-auto px-5 ">
        <VelocityScroll
      text="Web Developer, Digital Artist, Frontend Engineer" 
      
      default_velocity={5}
      className="w-full font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      </div>
      </div>
  );
}