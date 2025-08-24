'use client';

import { motion } from "framer-motion";

const RetroHeadingBanner = ({ title, secondPart }: { title: string, secondPart: string }) => {
    return (
        <div className="text-center mb-12 relative z-20">
            <motion.div
                initial={{ scale: 0.8, y: -20, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="inline-block bg-black px-8 py-4 rounded-xl border-4 border-white shadow-[0px_0px_15px_rgba(255,255,255,0.4)]"
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-400 font-press-start drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">
                    {title}<span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-rose-500 font-press-start drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]"> {secondPart}</span>
                </h1>
            </motion.div>
        </div>
    );
};

export default RetroHeadingBanner;