// 'use client';

// import { useState, useMemo } from 'react';
// import ProjectCard from './ProjectCard';
// import { projects, years, categories, type Category } from '@/data/projects';
// import useIsTouch from "@/hooks/useIsDesktop";

// const catLabel: Record<Category, string> = {
//     web: 'Web',
//     aiml: 'AI/ML',
//     app: 'App',
// };

// export default function ProjectsFilters() {
//     const isTouch = useIsTouch();
//     const heroMinH = isTouch ? "50svh" : "100dvh";

//     const [activeYear, setActiveYear] = useState<number>(years[0]);
//     const [activeCat, setActiveCat] = useState<Category>('web');

//     const filtered = useMemo(
//         () => projects.filter(p => p.year === activeYear && p.category === activeCat),
//         [activeYear, activeCat]
//     );

//     return (
//         <section id='project' className="relative py-10 px-4 md:py-20 bg-[--background] border-b-4 border-red-500 shadow-[0px_2px_0_rgba(0,0,0,0.4)]" style={{ minHeight: heroMinH }} >
//             {/* Main Content Wrapper (Retro Arcade Style) */}
//             <div className="border-4 noisy border-black rounded-lg py-6 sm:py-8 bg-green-700 max-w-6xl mx-auto shadow-[10px_10px_0_#000000]">
//                 {/* Heading */}
//                 <div className="text-center mb-8 px-4">
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-[family-name:var(--font-lucky)] text-shadow-[3px_3px_0_black] drop-shadow-[5px_5px_0px_rgba(0,0,0,0.6)] mb-6">
//                         <span className="text-[#ff6600]">Club</span> Projects
//                     </h1>
//                 </div>
                
//                 {/* Year Dropdown */}
//                 <div className="flex justify-center mb-6 px-4">
//                     <select
//                         value={activeYear}
//                         onChange={(e) => setActiveYear(parseInt(e.target.value))}
//                         className="px-4 py-2 border-4 border-black rounded-lg font-bold shadow-[6px_6px_0_#000] bg-yellow-300 text-black hover:bg-yellow-400 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-500"
//                     >
//                         {years.map((yr) => (
//                             <option key={yr} value={yr}>
//                                 {yr}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Category Tabs */}
//                 <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
//                     {categories.map((cat) => (
//                         <button
//                             key={cat}
//                             onClick={() => setActiveCat(cat)}
//                             className={`px-6 py-2 rounded-full border-4 border-black font-bold text-lg transition-all duration-200 shadow-[6px_6px_0_#000] 
//                                 ${activeCat === cat
//                                     ? cat === "web"
//                                         ? "bg-blue-600 text-white shadow-[6px_6px_0_#000]"
//                                         : cat === "aiml"
//                                             ? "bg-red-600 text-white shadow-[6px_6px_0_#000]"
//                                             : "bg-orange-500 text-black shadow-[6px_6px_0_#000]"
//                                     : "bg-neutral-100 hover:bg-neutral-200"
//                                 }`}
//                         >
//                             {catLabel[cat]}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Grid */}
//                 {filtered.length === 0 ? (
//                     <div className="text-center text-gray-200 text-lg md:text-xl font-semibold mt-10">
//                         No projects for <b>{activeYear}</b> in <b>{catLabel[activeCat]}</b>. Try another filter.
//                     </div>
//                 ) : (
//                     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
//                         {filtered.map((p) => (
//                             <ProjectCard key={p.id} project={p} />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }



'use client';

import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { projects, years, categories, type Category } from '@/data/projects';
import useIsTouch from "@/hooks/useIsDesktop";
import RetroHeadingBanner from './RetroHeadingBanner';

const catLabel: Record<Category, string> = {
    web: 'Web',
    aiml: 'AI/ML',
    app: 'App',
};

export default function ProjectsFilters() {
    const isTouch = useIsTouch();
    const heroMinH = isTouch ? "50svh" : "100dvh";

    const [activeYear, setActiveYear] = useState<number>(years[0]);
    const [activeCat, setActiveCat] = useState<Category>('web');

    const filtered = useMemo(
        () => projects.filter(p => p.year === activeYear && p.category === activeCat),
        [activeYear, activeCat]
    );
// bg-[#ffe8a2]
    return (
        <section id='project' className="relative py-10 px-4 md:py-20 bg-[--background] border-b-4 border-red-500 shadow-[0px_2px_0_rgba(0,0,0,0.4)]" style={{ minHeight: heroMinH }} >
            {/* Main Content Wrapper (Vibrant Funky Retro Style) */}
            <div className="border-4 noisy border-black rounded-lg py-6 sm:py-8 bg-[#ffe8a2] max-w-6xl mx-auto shadow-[10px_10px_0_#000000] relative overflow-hidden">
          
                {/* Heading using RetroHeadingBanner */}
                <RetroHeadingBanner title="Club" secondPart='Projects' />
                
                {/* Year Dropdown */}
                <div className="flex justify-center mb-6 px-4 relative z-10">
                    <select
                        value={activeYear}
                        onChange={(e) => setActiveYear(parseInt(e.target.value))}
                        className="px-4 py-2 border-4 border-black rounded-lg font-bold shadow-[6px_6px_0_#000] bg-yellow-300 text-black hover:bg-yellow-400 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-500"
                    >
                        {years.map((yr) => (
                            <option key={yr} value={yr}>
                                {yr}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 px-4 relative z-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`px-6 py-2 rounded-full border-4 border-black font-bold text-lg transition-all duration-200 shadow-[6px_6px_0_#000] 
                                ${activeCat === cat
                                    ? cat === "web"
                                        ? "bg-blue-600 text-white shadow-[6px_6px_0_#000]"
                                        : cat === "aiml"
                                            ? "bg-red-600 text-white shadow-[6px_6px_0_#000]"
                                            : "bg-purple-600 text-white shadow-[6px_6px_0_#000]"
                                    : "bg-neutral-100 hover:bg-neutral-200"
                                }`}
                        >
                            {catLabel[cat]}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center text-gray-800 text-lg md:text-xl font-semibold mt-10 relative z-10">
                        No projects for <b>{activeYear}</b> in <b>{catLabel[activeCat]}</b>. Try another filter.
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 relative z-10">
                        {filtered.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}