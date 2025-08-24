'use client';

import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";
import { socialLinks } from '@/data/footer';

export default function Footer() {
    return (
        <footer className="w-full bg-black py-16 px-4 md:px-8 border-t-4 border-white shadow-[0px_-2px_0_rgba(255,255,255,0.4)]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                    viewport={{ once: true }}
                    className="bg-black border-4 border-white rounded-3xl p-8 shadow-[0_0_20px_rgba(255,255,255,0.2)] relative overflow-hidden"
                >
                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                        {/* Left Side: Branding, Email & Socials */}
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <motion.h3
                                className="text-3xl sm:text-4xl font-extrabold text-white font-major-mono text-shadow-tech"
                            >
                                JIST Coding Club
                            </motion.h3>
                            {/* Institute Name Added Here */}
                            <p className="text-sm md:text-base text-gray-300 font-normal mb-2 font-space-mono">
                                Jorhat Institute of Science and Technology
                            </p>
                            <motion.a
                                href={socialLinks.email}
                                className="text-base md:text-lg text-white font-space-mono font-semibold hover:text-cyan-400 transition-colors"
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
                                    <i className="ri-linkedin-box-fill text-4xl text-blue-400 hover:text-blue-600 transition-colors"></i>
                                </motion.a>
                                <motion.a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    <i className="ri-github-fill text-4xl text-white hover:text-gray-400 transition-colors"></i>
                                </motion.a>
                            </div>
                        </div>

                        {/* Right Side: Quick Links */}
                        <div className="flex flex-col text-center md:text-left font-space-mono">
                            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
                            <Link href="#project" className="text-gray-300 font-semibold hover:text-cyan-400 transition-colors mb-2">Projects</Link>
                            <Link href="#team" className="text-gray-300 font-semibold hover:text-cyan-400 transition-colors mb-2">Team</Link>
                            <Link href="#events" className="text-gray-300 font-semibold hover:text-cyan-400 transition-colors">Events</Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Copyright Text */}
            <div className="mt-8 text-center text-sm md:text-base font-normal font-space-mono text-gray-400">
                <p>&copy; {new Date().getFullYear()} JIST Coding Club. All rights reserved.</p>
            </div>
        </footer>
    );
}