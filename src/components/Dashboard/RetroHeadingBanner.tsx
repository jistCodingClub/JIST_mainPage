'use client';

import { motion } from "framer-motion";

const RetroHeadingBanner = ({ title, secondPart }: { title: string, secondPart: string }) => {
    return (
        <div className="text-center mb-12 relative z-20">
            <motion.div
                initial={{ scale: 0.8, y: -20, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="inline-block noisy bg-amber-900 px-8 py-4 rounded-xl border-4 border-[#ff6600] shadow-[8px_8px_0_#000] drop-shadow-[5px_5px_0px_rgba(0,0,0,0.4)]"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-400 font-[family-name:var(--font-lucky)] text-shadow-[2px_2px_0_black] stroke-4 stroke-white drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]">
                    {title}<span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black font-[family-name:var(--font-lucky)] text-shadow-[2px_2px_0_red] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]"> {secondPart}</span>
                </h1>
            </motion.div>
        </div>
    );
};

export default RetroHeadingBanner;