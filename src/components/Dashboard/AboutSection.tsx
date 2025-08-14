import Image from "next/image";
import ClubImage from "../../../public/club-logo.svg"; // apna image add karo
import { motion, useScroll, useTransform } from "motion/react";


export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <main id="about" className="bg-[#121212] relative min-h-screen  px-6 flex flex-col items-center">
      {/* Background Decoration */}
      <motion.div
        style={{
          height,
          backgroundImage: "url('/bg/-c.png')",
          backgroundSize: "100%",
          backgroundPosition: "cover",
          backgroundRepeat: 'no-repeat'


        }}
        transition={{
          duration: 1
        }}

        className="absolute w-full z-0 overflow-hidden"
      >


      </motion.div>
      <motion.div
        style={{
          height,
          backgroundImage: "url('/bg/-c.png')",
          backgroundSize: "100%",
          backgroundPosition: "cover",
          backgroundRepeat: 'no-repeat'


        }}
        transition={{
          duration: 1
        }}

        className="absolute w-full z-0 overflow-hidden hidden md:block md:bottom-0"
      >


      </motion.div>
      <div className="border-1 border-white p-3 md:p-5 z-2 m-20 bg-[var(--color-background)] rounded-4xl">
        <div className="p-3 border-2 m-0 md:m-3 border-amber-600 rounded-2xl">
          {/* Content */}
          <div className="relative z-10 max-w-5xl w-full text-center p-4 ">
            {/* Hero Title */}
            <h1 className="text-5xl font-[family-name:var(--font-lucky)]  md:text-6xl font-extrabold text-orange-400  text-shadow-[2px_2px_0_var(--secondary-color)] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] mb-6">
              <span className="text-shadow-[2px_2px_0_black]">About</span>  <span className="text-black">JIST Coding Club</span>
            </h1>

            {/* Short Description */}
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              We are a community of passionate coders, creators, and innovators at JIST.
              Our mission is to learn, build, and collaborate on exciting projects that
              push the boundaries of technology while fostering an inclusive environment
              for everyone.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-10 mt-10">



              {/* Club Image */}
              <div className="relative w-72 h-72 rounded-xl overflow-hidden shadow-[6px_6px_2px_rgba(0,0,0,0.4)] border-2 p-6 border-white outline-orange-500 outline-5">
                <Image
                  src={ClubImage}
                  alt="JIST Coding Club Members"
                  fill
                  className="object-cover bg-black"
                />

              </div>

              {/* Details */}
              <div className="text-left max-w-lg">
                <h2 className="text-3xl font-bold mb-4 text-orange-500">
                  Our Vision
                </h2>
                <p className="text-gray-700 mb-6">
                  To empower students with the skills, confidence, and network
                  to excel in the tech industry by providing hands-on learning
                  opportunities and fostering a spirit of innovation.
                </p>

                <h2 className="text-3xl font-bold mb-4 text-orange-500">
                  What We Do
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Organize coding workshops and hackathons</li>
                  <li>Collaborate on real-world projects</li>
                  <li>Participate in national and international tech events</li>
                  <li>Support each other in learning new skills</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
