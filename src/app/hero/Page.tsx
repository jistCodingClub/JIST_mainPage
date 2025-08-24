import Image from "next/image";
import Logo from "../../../public/club-logo.svg"
import Infiniteslider from "@/components/Dashboard/InfiniteSlide";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { HeroAnimation } from "../../gsap/scrollAnimation";
import LightningBackground from "@/gsap/LightningBackground";
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
  className="relative flex items-center justify-center overflow-hidden px-0 md:px-8 md:min-h-[calc(100dvh-80px)] bg-main"
 ><LightningBackground/>
  {/* Content wrapper */}
  <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between z-10">
    {/* Left Content */}
    <div className="flex-1 text-left pl-10">
      <div className="greet overflow-hidden inline-flex items-center gap-2 bg-[#ff6a00] text-black px-4 py-2 rounded-full border-2 border-white shadow-md drop-shadow-[4px_4px_0px_rgba(255,255,255,0.4)] mt-16 md:mt-0 mb-4 animate-glow"
           ref={greetRef}>
        <span>👋</span>
        <span className="font-roboto-mono font-bold">Hey!! Coders</span>
      </div>

      {/* Main Title */}
      <h2 className="main-text text-[3.1rem] md:text-[5rem] lg:text-[7rem] uppercase font-extrabold leading-tight text-white text-shadow-[2px_2px_0_#ff6a00] drop-shadow-[3px_3px_0px_rgba(255,255,255,0.4)] overflow-hidden text-3d metal-mania-regular">
        Jist Coding Club!
      </h2>

      {/* Moto */}
      <div className="moto overflow-hidden inline-block bg-[#ff6a00] px-6 py-2 mt-4 border-2 border-white shadow-md rotate-[-3deg] drop-shadow-[4px_5px_0px_rgba(255,255,255,0.4)]"
           ref={motoRef}>
        <p className="text-black text-2xl font-bold font-roboto-mono">
          Code, Create, Collaborate!
        </p>
      </div>
    </div>

    {/* Right Side Logo */}
   <div
  id="heroLogo"
  className="flex-1 flex justify-center items-center pt-8 md:pt-0 relative"
>
  {/* Retro Futuristic Grid Background */}
<div
 className="absolute inset-0 flex justify-center items-center opacity-70 h-full"
 style={{
//    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 100%), url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Cpath d="M 10 10 L 10 180 L 90 90 L 90 10 Z" stroke="white" stroke-width="1" fill="transparent" opacity=".2" /%3E%3Cpath d="M 50 10 L 10 50 L 50 90 L 90 50 Z" stroke="white" stroke-width="1" fill="transparent" opacity=".2" /%3E%3C/svg%3E')`,
   backgroundSize: '50px 50px',
   transform: 'rotate(-5deg)',
 }}
></div>

  {/* Glowing Circle with Pulsing Effect */}
    <div id="heroLogo" className="flex-1 flex justify-center items-center pt-8 md:pt-0 relative">
  <div className="absolute w-90 h-90 rounded-full bg-cyan-400 opacity-5 blur-3xl" />
  {/* Logo Container */}
  <div
    className="relative w-80 h-80 flex items-center justify-center p-4 border-2 border-white rounded-full bg-black shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-float"
  >
    <Image
      src={Logo}
      alt="JIST Coding Club Logo"
      width={350}
      height={350}
      className="relative z-10"
    />
  </div>
</div>
  </div></div>
</section>
            <Infiniteslider />
        </section>
    );
};

export default Page;
