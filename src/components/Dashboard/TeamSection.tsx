// 'use client';

// import { teamMembers } from "@/data/team";
// import TeamCard from "./TeamCard";
// import useIsTouch from "@/hooks/useIsDesktop";

// export default function TeamSection() {
//     const isTouch = useIsTouch();
//     const heroMinH = isTouch ? "100svh" : "100dvh";
//     return (
//         <section
//             id="team"
//             className="relative py-16 px-4 md:px-8 border-b-4 border-red-500 shadow-[0px_2px_0_rgba(0,0,0,0.4)]"
//             style={{ minHeight: heroMinH, backgroundColor: "var(--background)" }} 
//         >
          

//             {/* Rope at the top */}
//             <div className="absolute top-10 left-0 right-0 h-2 bg-black z-10 shadow-md"></div>

//             {/* Heading */}
//             <div className="text-center mb-12 relative z-20">
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#ff7f50] font-[family-name:var(--font-lucky)] text-shadow-[2px_2px_0_black] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)]">
//                     <span className="text-black">Our</span> <span className="text-[#ff7f50]">Team</span>
//                 </h1>
//             </div>

//             {/* Team Grid */}
//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 md:gap-y-24 relative z-20">
//                 {teamMembers.map((member, index) => (
//                     <div key={index} className="flex justify-center relative">
//                         {/* Hanging Rope for each card */}
//                         <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-black z-10"></div>
//                         <TeamCard member={member} />
//                     </div>
//                 ))}
//             </div>

        
//         </section>
//     );
// }



'use client';

import { teamMembers } from "@/data/team";
import TeamCard from "./TeamCard";
import useIsTouch from "@/hooks/useIsDesktop";
import RetroHeadingBanner from "./RetroHeadingBanner";

export default function TeamSection() {
    const isTouch = useIsTouch();
    const heroMinH = isTouch ? "100svh" : "100dvh"; 

    return (
        <section
            id="team"
            className="noisy relative py-16 px-4 md:px-8 border-b-4 border-red-500 shadow-[0px_2px_0_rgba(0,0,0,0.4)]"
            style={{ minHeight: heroMinH, backgroundColor: 'var(--background)' }} 
        >
            
           <RetroHeadingBanner title="Team" secondPart="Leads" />
            {/* Team Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-28 relative z-20">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex justify-center">
                       
                        <TeamCard member={member} index={index} />
                    </div>
                ))}
            </div>

        </section>
    );
}