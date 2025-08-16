import Image from "next/image";
import ClubImage from "../../../public/club-logo.svg"; // apna image add karo
// import { HeroAnimation } from "@/gsap/scrollAnimation";
import useIsTouch from "@/hooks/useIsDesktop";

// export default function AboutPage() {



// const isTouch = useIsTouch();
// const heroMinH = isTouch ? "50svh" : `calc(100dvh - 80px)`;

//   return (
//     <main id="about" className="bg-[var(--background)] md:bg-[#121212] relative min-h-screen  md:px-2 flex flex-col items-center justify-center"    style={{ minHeight: heroMinH }}>

//       <div className="md:border-1 border-white p-3 md:p-5 z-2 m-0 md:m-20 bg-[var(--color-background)] md:rounded-4xl">
//         <div className="p-3 border-2 m-0 md:m-3 border-amber-600 rounded-2xl">
//           {/* Content */}
//           <div className="relative z-10 max-w-5xl w-full text-center p-4 ">
//             {/* Hero Title */}
//             <h1 className="text-5xl font-[family-name:var(--font-lucky)]  md:text-6xl font-extrabold text-orange-400  text-shadow-[2px_2px_0_var(--secondary-color)] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] mb-6">
//               <span className="text-shadow-[2px_2px_0_black]">About</span>  <span className="text-black">JIST Coding Club</span>
//             </h1>

//             {/* Short Description */}
//             <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
//               We are a community of passionate coders, creators, and innovators at JIST.
//               Our mission is to learn, build, and collaborate on exciting projects that
//               push the boundaries of technology while fostering an inclusive environment
//               for everyone.
//             </p>

//             <div className="flex flex-col md:flex-row items-center gap-10 mt-10">



//               {/* Club Image */}
//               <div className="relative w-72 h-72 rounded-xl overflow-hidden shadow-[6px_6px_2px_rgba(0,0,0,0.4)] border-2 p-6 border-white outline-orange-500 outline-5">
// <Image
//   src={ClubImage}
//   alt="JIST Coding Club Members"
//   fill
//   className="object-cover bg-black"
// />

//               </div>

//               {/* Details */}
//               <div className="text-left max-w-lg">
//                 <h2 className="text-3xl font-bold mb-4 text-orange-500">
//                   Our Vision
//                 </h2>
//                 <p className="text-gray-700 mb-6">
//                   To empower students with the skills, confidence, and network
//                   to excel in the tech industry by providing hands-on learning
//                   opportunities and fostering a spirit of innovation.
//                 </p>

//                 <h2 className="text-3xl font-bold mb-4 text-orange-500">
//                   What We Do
//                 </h2>
//                 <ul className="list-disc pl-5 text-gray-700 space-y-2">
//                   <li>Organize coding workshops and hackathons</li>
//                   <li>Collaborate on real-world projects</li>
//                   <li>Participate in national and international tech events</li>
//                   <li>Support each other in learning new skills</li>

//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </main>
//   );
// }

export default function AboutSection() {
  const isTouch = useIsTouch();
  const heroMinH = isTouch ? "100svh" : "100dvh";
  return (
    <section
      id="about"
      className="relative flex items-center justify-center bg-[var(--background)] p-10 border-b-4 border-red-500 shadow-[0px_2px_0_rgba(0,0,0,0.4)] "
      style={{ minHeight: heroMinH }}
    >
      <div className="relative noisy max-w-6xl w-full bg-white/50 rounded-3xl shadow-lg border-4 border-[var(--text-color)] p-10">
      {/* elements */}
      

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left Side - Image/Logo */}
          <div className="flex-shrink-0">
            <div className="w-60 h-60 rounded-full border-4 border-[var(--text-color)] shadow-lg flex items-center justify-center bg-black overflow-hidden">
              <Image
                src={ClubImage} // logo file public/ folder me daal
                alt="JIST Coding Club Logo"
                width={260}
                height={260}
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Side - Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-[var(--text-color)]">
              About <span className="text-[var(--primary-color)]">Jist Coding Club</span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--text-color)] max-w-2xl">
              JIST Coding Club is a hub for passionate learners and innovators.
              We believe in building real-world skills through collaboration,
              hands-on projects, and fun coding sessions.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="bg-[var(--primary-color)] border-4 border-[var(--text-color)] rounded-xl p-5 shadow-md">
                <h2 className="text-2xl font-semibold text-[var(--text-color)] mb-2">
                  Our Vision
                </h2>
                <p className="text-[var(--text-color)]">
                  To empower students with coding skills, confidence, and teamwork
                  to excel in tech and innovation.
                </p>
              </div>
              <div className="bg-[var(--secondary-color)] border-4 border-[var(--text-color)] rounded-xl p-5 shadow-md">
                <h2 className="text-2xl font-semibold text-[var(--text-color)] mb-2">
                  What We Do
                </h2>
                <ul className="list-disc list-inside text-[var(--text-color)] space-y-1">
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
