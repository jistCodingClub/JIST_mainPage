import Image from "next/image";
import Logo from "../../../public/club-logo.svg"
import Infiniteslider from "@/components/Dashboard/InfiniteSlide";
import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useEffect } from "react";
const Page = () => {
    gsap.registerPlugin(SplitText);
    useEffect(() => {
      animatedText();
    
    }, [])
    const animatedText = () =>{
        const mainText = new SplitText('.main-text',{type: "chars, words"});
        const motoText = new SplitText('.moto',{type: "words"});
        const greetText = new SplitText('.greet', {type:"words"})
        gsap.from(mainText.chars ,{
            yPercent : 100,
            duration : 1.7,
            ease: 'power4.inOut',
            stagger : 0.03,
            opacity: 0
        });
        gsap.from(motoText.words,{
            yPercent : 120,
            duration : 1.7,
            ease:'sine.inOut',
            stagger : 0.03,
            opacity: 0,
            delay : 0.5
        })
        gsap.from(greetText.words,{
            xPercent : '-130',
            duration : 1.7,
            ease:'sine.inOut',
            stagger : 0.03,
            opacity: 0,
            delay : 0.2,
        });
        
        gsap.from('.greet',{
            xPercent : '-150',
            duration : 1.7,
            ease:'sine.inOut',
            stagger : 0.03,
            opacity: 0,
            delay : 0.2,
            backgroundColor : "transparent"
            
        });
        gsap.from('.moto',{
            xPercent : '-150',
            duration : 1.7,
            ease:'sine.inOut',
            stagger : 0.03,
            opacity: 0,
            delay : 0.2,
            backgroundColor : "transparent"
            
        });


    }
    
    return (

        <section style={{ minHeight: 'calc(100vh - 80px)' }}>


            <section className="relative flex items-center justify-center overflow-hidden px-8 py-20 bg-none md:bg-[url('/bg/abstract-retro-wave-background-1.png')] bg-conic-90 bg-contain bg-no-repeat ">

                {/* Content wrapper */}
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between z-10">
                    {/* Left Content */}
                    <div className="flex-1 text-left pl-10">

                        <div className="greet overflow-hidden inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full border-2 border-black shadow-md drop-shadow-[4px_4px_0px_rgba(0,0,0,0.4)] mb-4 ">
                            <span>👋</span>
                            <span>Hey!! Coders</span>
                        </div>

                        {/* Main Title */}
                        <h2 className="main-text text-[2.5rem] font-[family-name:var(--font-lucky)] md:text-[5rem] uppercase font-extrabold leading-tight text-[var(--text-color)] text-shadow-[2px_2px_0_var(--secondary-color)] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] text-outline overflow-hidden ">
                            Jist Coding Club!
                        </h2>

                        {/* Subtitle Banner */}
                        <div className="moto overflow-hidden inline-block bg-orange-400 px-6 py-2 mt-4 border-2 border-black shadow-md rotate-[-3deg]  drop-shadow-[4px_5px_0px_rgba(0,0,0,0.4)]">
                            <p className="text-white text-2xl font-bold">
                                Code, Create, Collaborate!
                            </p>
                        </div>
                    </div>

                    {/* Right Side Logo */}
                    <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 relative">

                        <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-[6px_6px_2px_rgba(0,0,0,0.4)] border-2 p-6 bg-black border-white outline-orange-500 outline-5">
                            {/* <div className="absolute inset-0 flex justify-center items-center"
                        >
                            <div className="w-full h-full bg-[url('/bg/hmm.png')] bg-no-repeat bg-center md:[background-size:65%] [background-size:82%] " />
                        </div> */}
                            {/*  Logo */}
                            <Image
                                src={Logo}
                                alt="JIST Coding Club Logo"
                                width={400}
                                height={400}
                                className="animate-float relative z-10"
                            />
                        </div></div>
                </div>
            </section>
            <Infiniteslider />
        </section>
    );
};

export default Page;
