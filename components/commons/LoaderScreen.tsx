import React from "react";
import { motion } from "framer-motion";

// default colors
// from-[#7af080] via-[#e0ff7d] to-[#e0ff7d]

const LoaderScreen = () => {
  return (
    <motion.section initial={{ y: 0, opacity: 1 }} animate={{ y: -1000, transition: { duration: 1, delay: 2.9 } }} className="fixed bg-gradient-to-tr from-[#dceda9] via-[#dceda9] to-[#dceda9] z-[2000] w-full h-full  ">
      <div className=" w-full h-full flex flex-col justify-center items-center  text-3xl font-bold leading-[0px] text-black">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 }, transitionEnd: { display: "none" } }} className=" font-Inconsolata">
          Halo
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 }, transitionEnd: { display: "none" } }} className=" font-Inconsolata">
          Hello
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.1 }, transitionEnd: { display: "none" } }} className=" font-Inconsolata">
          Annyeong
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.4 }, transitionEnd: { display: "none" } }} className=" font-Inconsolata">
        ハロー
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.7 }, transitionEnd: { display: "none" } }} className=" font-Inconsolata">
          مرحبًا
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.0 }, transitionEnd: { display: "none" } }} className=" font-Inconsolata">
          Xin chào
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.3 }, transitionEnd: { display: "none" } }} className=" font-Inconsolata">
        รัศมี
        </motion.span>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.6 } }} className=" font-Inconsolata">
          konnichiwa
        </motion.span>
        {/* <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.6 }, transitionEnd: { display: "none" } }} className=" font-Inconsolata">
          Allinllachu
        </motion.span> */}
       
      </div>
    </motion.section>
  );
};

export default LoaderScreen;