'use client';


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
        <div className="relative md:absolute md:bottom-0 w-full overflow-hidden whitespace-nowrap bg-[#f3a20f] text-black py-2 sm:py-3 font-bold text-lg sm:text-xl md:text-3xl border-y-4 border-black shadow-[0px_6px_0_#000]">
            <motion.div
                className="flex text-shadow-[2px_2px_0_white]" 
                variants={sliderVariants}
                animate="animate"
            >
                <p className="mr-8">{text}</p>
                <p className="mr-8">{text}</p>
                <p className="mr-8">{text}</p>
                <p className="mr-8">{text}</p>
                <p className="mr-8">{text}</p>
                <p className="mr-8">{text}</p>
            </motion.div>
        </div>
    );
};

export default Infiniteslider;