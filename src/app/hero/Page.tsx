import Image from "next/image";
import Logo from "../../../public/club-logo.svg"
import Infiniteslider from "@/components/Dashboard/InfiniteSlide";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { HeroAnimation } from "../../gsap/scrollAnimation";
const Page = () => {
    const greetRef = useRef<HTMLDivElement>(null)
    const motoRef = useRef<HTMLDivElement>(null)

    gsap.registerPlugin(SplitText);
    useEffect(() => {
        animatedText();
        HeroAnimation();

    }, [])

    //hover effect
    useEffect(() => {
        if (greetRef.current) {
            greetRef.current.style.cursor = "pointer"

            greetRef.current.addEventListener("mouseenter", () => {
                gsap.to(greetRef.current, {
                    yPercent: -20,
                    duration: 0.4,
                    ease: "power1.in",
                })
            })

            greetRef.current.addEventListener("mouseleave", () => {
                gsap.to(greetRef.current, {
                    yPercent: 0,
                    duration: 0.4,
                    ease: "power1.out",
                })
            })
        }



        if (motoRef.current) {
            motoRef.current.style.cursor = "pointer"

            motoRef.current.addEventListener("mouseenter", () => {
                gsap.to(motoRef.current, {
                    yPercent: -20,
                    duration: 0.4,
                    ease: "power1.in",
                })
            })

            motoRef.current.addEventListener("mouseleave", () => {
                gsap.to(motoRef.current, {
                    yPercent: 0,
                    duration: 0.4,
                    ease: "power1.out",
                })
            })
        }
    }, [])





    const animatedText = () => {
        const mainText = new SplitText('.main-text', { type: "chars, words" });
        const motoText = new SplitText('.moto', { type: "words" });
        const greetText = new SplitText('.greet', { type: "words" })

        gsap.from('#heroLogo', {
            yPercent: '-150',
            duration: 1.9,
            ease: 'bounce.out',
            opacity: 0,
            delay: 0.2,
            backgroundColor: "transparent"

        });


        gsap.from(mainText.chars, {
            yPercent: 100,
            duration: 1.7,
            ease: 'power4.inOut',
            stagger: 0.03,
            opacity: 0
        });
        gsap.from(motoText.words, {
            yPercent: 120,
            duration: 1.7,
            ease: 'sine.inOut',
            stagger: 0.03,
            opacity: 0,
            delay: 0.5
        })
        gsap.from(greetText.words, {
            xPercent: '-130',
            duration: 1.7,
            ease: 'sine.inOut',
            stagger: 0.03,
            opacity: 0,
            delay: 0.2,
        });

        gsap.from('.greet', {
            xPercent: '-150',
            duration: 1.7,
            ease: 'sine.inOut',
            stagger: 0.03,
            opacity: 0,
            delay: 0.2,
            backgroundColor: "transparent"

        });
        gsap.from('.moto', {
            xPercent: '-150',
            duration: 1.7,
            ease: 'sine.inOut',
            stagger: 0.03,
            opacity: 0,
            delay: 0.2,
            backgroundColor: "transparent"

        });
        

        // main text hover
        mainText.words.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(el, {
                    yPercent: "-20",
                    duration: 0.4,
                    ease: "power2.in",
                    cursor: "pointer"
                })
            })
            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    yPercent: "0",
                    duration: 0.4,
                    ease: "power2.out",
                    cursor: "pointer"
                })
            })
        })
    }

    return (

        <section  >


            <section
                id="heroSection"
                className="relative flex items-center justify-center overflow-hidden px-0 bg-conic-90 md:px-8 bg-none md:min-h-[calc(100dvh-80px)] desktop-only-bg"
            >

                {/* Content wrapper */}
                <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10">
                    {/* Left Content */}
                    <div className="flex-1 text-left pl-10">

                        <div className="greet overflow-hidden inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full border-2 border-black shadow-md drop-shadow-[4px_4px_0px_rgba(0,0,0,0.4)] mt-16 md:mt-0 mb-4 "
                            ref={greetRef}
                        >

                            <span>👋</span>
                            <span>Hey!! Coders</span>
                        </div>

                        {/* Main Title */}
                        <h2 className="main-text text-[3.1rem] font-[family-name:var(--font-lucky)] md:text-[5rem] lg:text-[6rem] uppercase font-extrabold leading-tight text-[var(--text-color)] text-shadow-[2px_2px_0_var(--secondary-color)] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] text-outline overflow-hidden ">
                            Jist Coding Club!
                        </h2>

                        {/* moto*/}
                        <div className="moto overflow-hidden inline-block bg-orange-400 px-6 py-2 mt-4 border-2 border-black shadow-md rotate-[-3deg]  drop-shadow-[4px_5px_0px_rgba(0,0,0,0.4)]"
                            ref={motoRef}>
                            <p className="text-white text-2xl font-bold">
                                Code, Create, Collaborate!
                            </p>
                        </div>
                    </div>

                    {/* Right Side Logo */}
                    <div id="heroLogo" className="flex-1 flex justify-center rounded-2xl h-full items-center pt-8 md:pt-0 md:mt-0 relative ">

                        {/* <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-[6px_6px_2px_rgba(0,0,0,0.4)] border-2 p-6 bg-black border-white outline-orange-500 outline-5 mb-6 md:mb-0"> */}
                        <div className="absolute inset-0 flex justify-center items-center"
                        >
                            <div className="w-full h-full bg-[url('/bg/circle-2.png')] bg-no-repeat bg-center md:[background-size:75%] [background-size:87%] drop-shadow-[7px_7px_2px_rgba(0,0,0,0.5)] " />
                        </div>
                        {/*  Logo */}
                      
                         <Image
                            src={Logo}
                            alt="JIST Coding Club Logo"
                            width={350}
                            height={350}
                            className="animate-float relative z-10 h-130"
                        />
                    </div></div>
                {/* </div> */}


            </section>
            <Infiniteslider />
        </section>
    );
};

export default Page;
