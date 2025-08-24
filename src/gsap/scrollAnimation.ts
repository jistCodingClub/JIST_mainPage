import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)




export const HeroAnimation = () => {

    ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 769px)": function () {
            createHeroAnimation(); // desktop animation
        },

        // Mobile
        "(max-width: 768px)": function () {
            createHeroAnimation(true); // mobile animation with tweaks
        }
    });
    function createHeroAnimation(isMobile = false) {
        const hero = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: isMobile ? "top 85%" : "top 90%",
                end: isMobile ? "top 40%" : "top 20%",
                scrub: isMobile ? 0.8 : 0.5,
            }
        });

        hero.to(".main-text", {
            opacity: 0,
            yPercent: -50,
            duration: 1,
            ease: "power3.inOut",
            rotate: -60,
            xPercent: -50
        }, "0");

        if (!isMobile) {
            hero.to(".moto", {
                opacity: 0,
                xPercent: -50,
                duration: 1,
                ease: "power2.out"
            }, "0");
        }

        hero.to("#heroLogo", {
            duration: 1,
            ease: "power1.out",
            yPercent: -10,
        }, "0");
    }
}