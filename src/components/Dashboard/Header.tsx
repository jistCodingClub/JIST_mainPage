'use client';

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import ClubImage from "../../../public/club-logo.svg";
import { ScrollTrigger } from 'gsap/all'
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence import kiya

gsap.registerPlugin(SplitText)

const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#project', label: 'Projects' },
    { href: '/#team', label: 'Team' },
    { href: '/#events', label: 'Events' },
]

// Mobile nav links ke liye colors
const mobileNavColors = [
    "bg-cyan-300",
    "bg-rose-400",
    "bg-yellow-300",
    "bg-purple-300",
];

const Header = () => {
    const linkRefs = useRef<HTMLSpanElement[]>([])
    const mobileNavRef = useRef<HTMLDivElement>(null)
    const closeBtnRef = useRef<HTMLButtonElement>(null)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const router = useRouter();

    useEffect(() => {
        animateHeader()
        setupHoverAnimations()
        navBar()
    }, [])

  
    useEffect(() => {
    }, [isMobileNavOpen])

    gsap.registerPlugin(ScrollTrigger)

    const navBar = () => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "header",
                start: "top top",
                end: "+=100",
                scrub: true,
            },
        })

        navTween.fromTo(
            "header",
            {
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
            },
            {
                backgroundColor: "rgba(243, 236, 210, 0.5)",
                backdropFilter: "blur(20px)",
                duration: 1,
                ease: "power1.inOut",
            }
        )
    }

    const animateHeader = () => {
        const headingSplit = new SplitText('#header', { type: 'chars, lines' })
        const navSplit = new SplitText('#navBar', { type: 'words' })

        gsap.from(headingSplit.chars, {
            yPercent: -120,
            xPercent: -400,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'bounce.inOut',
        })

        gsap.from(navSplit.words, {
            yPercent: -120,
            opacity: 0,
            duration: 1.6,
            stagger: 0.3,
            ease: 'bounce.out',
        })

        gsap.from('#navBar', {
            yPercent: -120,
            opacity: 0,
            backgroundColor: 'transparent',
            duration: 1.5,
            ease: 'bounce.out',
        })

        gsap.from('#logoHeading', {
            opacity: 0,
            yPercent: -120,
            duration: 2,
            ease: 'bounce.out',
        })
    }

    const setupHoverAnimations = () => {
        linkRefs.current.forEach((el) => {
            if (!el) return

            const hoverIn = () => {
                gsap.to(el, {
                    scale: 1.2,
                    yPercent: -10,
                    color: '#ff6600',
                    duration: 0.3,
                    ease: 'power2.out',
                })
            }

            const hoverOut = () => {
                gsap.to(el, {
                    scale: 1,
                    yPercent: 0,
                    color: '#000',
                    duration: 0.3,
                    ease: 'power2.inOut',
                })
            }

            el.addEventListener('mouseenter', hoverIn)
            el.addEventListener('mouseleave', hoverOut)
        })
    }

    return (
        <>
            <header className="sticky top-0 z-50 transition-all duration-300 sfont min-h-[60px] md:h-[80px] w-full flex justify-between items-center px-4 md:px-8 py-2 border-b-4 border-black">
                {/* Logo + Heading */}
                <div className="flex items-center gap-2 md:gap-3 relative">
                    <div id="logoHeading" className="relative w-12 h-12 md:w-20 md:h-20 flex justify-center items-center">
                        <div
                            className="absolute inset-0 animate-spin"
                            style={{ animation: 'spin 3s linear infinite' }}
                        >
                            <div className="w-full h-full bg-[url('/bg/circle-1.png')] bg-no-repeat bg-center [background-size:70%] md:[background-size:80%]" />
                        </div>
                        <Image
                            src="/club-logo.svg"
                            alt="Club Logo"
                            width={60}
                            height={60}
                            className="w-8 h-8 md:w-16 md:h-16 relative z-10"
                        />
                    </div>

                    <Link href="#">
                        <h1 id="header" className="title text-base sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                            JIST Coding Club
                        </h1>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav
                    id="navBar"
                    className="hidden md:flex gap-6 font-semibold font-serif uppercase text-center items-center"
                >
                    {navLinks.map((link, i) => (
                        <span
                            key={link.label}
                            ref={(el) => {
                                if (el) linkRefs.current[i] = el
                            }}
                            className="inline-block cursor-pointer"
                        >
                            <Link href={link.href}>{link.label}</Link>
                        </span>
                    ))}
                    {/* Top-button styling changed */}
                    <button onClick={() => router.push("/joinNow")} className="top-button">
                        Join Now
                    </button>
                </nav>

                {/* Mobile Menu Icon */}
                <div
                    className="ri-menu-line text-3xl md:hidden cursor-pointer"
                    onClick={() => setIsMobileNavOpen(true)}
                ></div>
            </header>

            {/* Mobile Slide-In Nav - Updated for Retro Style */}
            <AnimatePresence> {/* AnimatePresence added for exit animations */}
                {isMobileNavOpen && (
                    <motion.div
                        ref={mobileNavRef}
                        initial={{ x: "100%", opacity: 0 }} // Start from right, invisible
                        animate={{ x: "0%", opacity: 1 }} // Slide to position, fully visible
                        exit={{ x: "100%", opacity: 0 }} // Slide out to right, invisible (for when it closes)
                        transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring animation
                        className="fixed top-0 right-0 h-full w-4/5 sm:w-1/2 md:hidden bg-[#f3ecd2] border-l-4 border-black shadow-lg z-50 p-6 flex flex-col gap-6 font-semibold uppercase text-center"
                    >
                        {/* Close Button */}
                        <motion.button
                            ref={closeBtnRef}
                            onClick={() => setIsMobileNavOpen(false)}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }} // Smooth pop-in
                            className="self-end text-3xl ri-close-line"
                        ></motion.button>

                        <div className="flex flex-col justify-between h-full">
                            <div className="navs-group flex flex-col gap-5">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ x: 100, opacity: 0 }} // Links start from right, invisible
                                        animate={{ x: 0, opacity: 1 }} // Slide to position, visible
                                        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 + i * 0.05 }} // Staggered smooth animation
                                        whileHover={{ scale: 1.05, rotate: -2 }}
                                        whileTap={{ scale: 0.95, rotate: 2 }}
                                        className={`border-4 border-black rounded-xl p-3 shadow-[6px_6px_0_#000] ${mobileNavColors[i % mobileNavColors.length]}`}
                                    >
                                        <Link className="block" href={link.href} onClick={() => setIsMobileNavOpen(false)}>
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full flex items-center justify-center">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-black shadow-[8px_8px_0_#000]">
                                <Image
                                    src={ClubImage}
                                    alt="JIST Coding Club Members"
                                    fill
                                    className="object-cover bg-black"
                                />
                            </div>
                        </div>

                        <motion.button // Changed to motion.button for consistency
                            onClick={() => router.push("/joinNow")}
                            initial={{ scale: 0, opacity: 0 }} // Initial animation for button
                            animate={{ scale: 1, opacity: 1 }} // Animate in
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 + navLinks.length * 0.05 }} // Delay after links
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.98, rotate: 2 }}
                            className="top-button"
                        >
                            Join Now
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header