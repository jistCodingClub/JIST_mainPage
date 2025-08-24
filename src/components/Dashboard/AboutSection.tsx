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
            className="relative flex items-center justify-center bg-black px-4 py-10 md:py-20 border-b-4 border-white shadow-[0px_2px_0_rgba(255,255,255,0.4)] text-white"
            style={{ minHeight: heroMinH }}
        >
            <div className="relative max-w-7xl w-full bg-black rounded-3xl shadow-[0_0_20px_red] border-4 border-white p-4 sm:p-6 md:p-10 overflow-hidden">
                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Left Side - Image/Logo */}
                    <div className="flex-shrink-0">
                        <div className="absolute w-90 h-90 md:w-40 md:h-40 rounded-full bg-cyan-400 opacity-10 filter blur-3xl"></div>
                        <div
                            className="relative w-70 h-70 flex items-center justify-center p-4 border-2 border-white rounded-full bg-black shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-float"
                        >
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
                        <p className="text-base sm:text-lg leading-relaxed max-w-3xl font-vt323 text-white">
                            JIST Coding Club is a hub for passionate learners and innovators.
                            We believe in building real-world skills through collaboration,
                            hands-on projects, and fun coding sessions.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 pt-4 font-press-start">
                            {/* Vision Box */}
                            <div className="bg-fuchsia-400/80 drop-shadow-[4px_4px_1px_rgba(255,0,0,0.4)] shadow-[6px_6px_0_#ff4081] border-4 border-white rounded-xl p-5">
                                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 text-shadow-[2px_2px_0_white]">
                                    Our Vision
                                </h2>
                                <p className="text-base sm:text-lg text-black">
                                    To empower students with coding skills, confidence, and teamwork
                                    to excel in tech and innovation.
                                </p>
                            </div>
                            {/* What We Do Box */}
                            <div className="bg-lime-400/80 border-4 border-white rounded-xl p-5 drop-shadow-[4px_4px_1px_rgba(255,0,127,0.4)] shadow-[6px_6px_0_#00ff00]">
                                <h2 className="text-2xl md:text-3xl text-left font-bold text-black mb-2 text-shadow-[2px_2px_0_white]">
                                    What We Do
                                </h2>
                                <ul className="list-disc list-inside text-black space-y-1">
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