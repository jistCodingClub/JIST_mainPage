"use client";


import { motion, Variants } from "framer-motion";

const text = "JORHAT INSTITUTE OF SCIENCE AND TECHNOLOGY - JIST CODING CLUB ";


const sliderVariants: Variants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Infiniteslider = () => {
  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap bg-[#f3a20f] text-white py-4 font-bold text-3xl border-1 border-black">
      <motion.div
        className="flex"
        variants={sliderVariants}
        animate="animate"
      >
        <p className="mr-8">{text}</p>
        <p className="mr-8">{text}</p>
      </motion.div>
    </div>
  );
};

export default Infiniteslider;