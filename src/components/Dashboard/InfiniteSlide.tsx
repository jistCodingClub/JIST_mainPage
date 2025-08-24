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
                duration: 20,
                ease: "linear",
            },
        },
    },
};

const Infiniteslider = () => {
    return (
        <div className="relative md:absolute md:bottom-0 w-full overflow-hidden whitespace-nowrap bg-black text-white py-2 sm:py-3 font-bold text-lg sm:text-xl md:text-3xl border-y-4 border-white shadow-[0px_6px_0_#fff]">
            <motion.div
                className="flex font-press-start md:text-2xl" 
                variants={sliderVariants}
                animate="animate"
            >
                <p className="mr-8 text-shadow-[0px_0px_2px_blue]">{text}</p>
                <p className="mr-8 text-shadow-[0px_0px_2px_blue]">{text}</p>
                <p className="mr-8 text-shadow-[0px_0px_2px_blue]">{text}</p>
                <p className="mr-8 text-shadow-[0px_0px_2px_blue]">{text}</p>
                <p className="mr-8 text-shadow-[0px_0px_2px_blue]">{text}</p>
                <p className="mr-8 text-shadow-[0px_0px_2px_blue]">{text}</p>
            </motion.div>
        </div>
    );
};

export default Infiniteslider;