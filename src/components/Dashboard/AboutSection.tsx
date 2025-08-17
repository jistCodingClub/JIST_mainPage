'use client';

import Image from "next/image";
import ClubImage from "../../../public/club-logo.svg";
import useIsTouch from "@/hooks/useIsDesktop";
import RetroHeadingBanner from "./RetroHeadingBanner";

export default function AboutSection() {
    const isTouch = useIsTouch();
    const heroMinH = isTouch ? "100svh" : "100dvh";
    return (
        <section
            id="about"
            className="relative flex items-center justify-center bg-[#f3ecd2] px-4 py-10 md:py-20 border-b-4 border-red-500 shadow-[0px_2px_0_rgba(0,0,0,0.4)]"
            style={{ minHeight: heroMinH }}
        >
            <div className="relative noisy max-w-7xl w-full bg-cyan-300 rounded-3xl shadow-[10px_10px_0_#000000] border-4 border-black p-4 sm:p-6 md:p-10 overflow-hidden">

                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left Side - Image/Logo */}
                    <div className="flex-shrink-0">
                        <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full border-2 border-black shadow-[8px_8px_0_#000] flex items-center justify-center bg-[url('/bg/circle-2.png')] bg-cover overflow-hidden">
                            <Image
                                src={ClubImage}
                                alt="JIST Coding Club Logo"
                                width={260}
                                height={260}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    {/* Right Side - Content */}
                    <div className="space-y-6 text-center md:text-left">
                       
                        <RetroHeadingBanner title="About" secondPart="JIST Coding Club" />
                        <p className="text-base sm:text-lg leading-relaxed text-gray-800 max-w-3xl">
                            JIST Coding Club is a hub for passionate learners and innovators.
                            We believe in building real-world skills through collaboration,
                            hands-on projects, and fun coding sessions.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 pt-4">
                            {/* Vision Box */}
                            <div className="bg-yellow-400/80 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.4)] shadow-[6px_6px_0px_black] border-4 border-black rounded-xl p-5">
                                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-shadow-[2px_2px_0_white]">
                                    Our Vision
                                </h2>
                                <p className="text-base sm:text-lg text-gray-800">
                                    To empower students with coding skills, confidence, and teamwork
                                    to excel in tech and innovation.
                                </p>
                            </div>
                            {/* What We Do Box */}
                            <div className="bg-rose-400/80 border-4 border-black rounded-xl p-5 drop-shadow-[4px_4px_1px_rgba(0,0,0,0.4)] shadow-[6px_6px_0px_black]">
                                <h2 className="text-2xl md:text-3xl text-left font-bold text-black mb-2 text-shadow-[2px_2px_0_white]">
                                    What We Do
                                </h2>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                    <li>Workshops & Hackathons</li>
                                    <li>Fun Coding Challenges</li>
                                    <li>Real-world Projects</li>
                                    <li>Peer Learning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}