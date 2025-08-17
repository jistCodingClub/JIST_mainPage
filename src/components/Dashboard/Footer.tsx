'use client';

import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";
import { socialLinks } from '@/data/footer';

export default function Footer() {
    return (
        <footer className="w-full bg-[#f3ecd2] py-16 px-4 md:px-8 border-t-4 border-red-500 shadow-[0px_-2px_0_rgba(0,0,0,0.4)]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                    viewport={{ once: true }}
                    className="noisy bg-cyan-300 border-4 border-black rounded-3xl p-8 shadow-[10px_10px_0_#000000] relative overflow-hidden"
                >
                    {/* Background Shapes */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                        <div className="absolute w-20 h-20 bg-yellow-200 rounded-full opacity-40 animate-pulse-slow top-[10%] left-[5%]"></div>
                        <div className="absolute w-28 h-28 bg-rose-200 rounded-xl rotate-45 opacity-40 animate-bounce-slow top-[60%] right-[10%]"></div>
                        <div className="absolute w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-pulse-slow bottom-[5%] left-[25%]"></div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                        {/* Left Side: Branding, Email & Socials */}
                        <div className="flex flex-col items-center md:items-start gap-2"> {/* gap reduced for closer text */}
                            <motion.h3
                                className="text-3xl sm:text-4xl font-extrabold text-black font-[family-name:var(--font-lucky)] text-shadow-[2px_2px_0_white] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]"
                            >
                                JIST Coding Club
                            </motion.h3>
                            {/* Institute Name Added Here */}
                            <p className="text-sm md:text-base text-gray-700 font-semibold mb-2">
                                Jorhat Institute of Science and Technology
                            </p>
                            <motion.a
                                href={socialLinks.email}
                                className="text-base md:text-lg text-gray-800 font-semibold hover:text-[#ff6600] transition-colors"
                            >
                                jistcodingclub@gmail.com
                            </motion.a>
                            <div className="flex justify-center gap-6 mt-4">
                                <motion.a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <i className="ri-instagram-line text-4xl text-rose-500 hover:text-rose-700 transition-colors"></i>
                                </motion.a>
                                <motion.a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <i className="ri-linkedin-box-fill text-4xl text-blue-500 hover:text-blue-700 transition-colors"></i>
                                </motion.a>
                                <motion.a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <i className="ri-github-fill text-4xl text-gray-800 hover:text-black transition-colors"></i>
                                </motion.a>
                            </div>
                        </div>

                        {/* Right Side: Quick Links */}
                        <div className="flex flex-col text-center md:text-left">
                            <h4 className="text-xl font-bold text-black mb-4 text-shadow-[1px_1px_0_white]">Quick Links</h4>
                            <Link href="#project" className="text-gray-800 font-semibold hover:text-[#ff6600] transition-colors mb-2">Projects</Link>
                            <Link href="#team" className="text-gray-800 font-semibold hover:text-[#ff6600] transition-colors mb-2">Team</Link>
                            <Link href="#events" className="text-gray-800 font-semibold hover:text-[#ff6600] transition-colors">Events</Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Copyright Text */}
            <div className="mt-8 text-center text-sm md:text-base font-semibold text-gray-700">
                <p>&copy; {new Date().getFullYear()} JIST Coding Club. All rights reserved.</p>
            </div>
        </footer>
    );
}