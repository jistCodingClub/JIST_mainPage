
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

    return (
        <section id='project' className="relative py-10 px-4 md:py-20 bg-black border-b-4 border-white shadow-[0px_0px_15px_#ff00ff,_0px_0px_30px_#ff00ff] text-white" style={{ minHeight: heroMinH }} >
            {/* Main Content Wrapper  */}
            <div className="border-4 border-white rounded-lg py-6 sm:py-8 bg-black max-w-6xl mx-auto shadow-[0px_0px_0_#00ffff,_0_0_20px_#00ffff] relative overflow-hidden p-2">
                
                {/* Heading using RetroHeadingBanner */}
                <RetroHeadingBanner title="Club" secondPart='Projects' />
                
                {/* Year Dropdown */}
                <div className="flex justify-center mb-6 px-4 relative z-10">
                    <select
                        value={activeYear}
                        onChange={(e) => setActiveYear(parseInt(e.target.value))}
                        className="px-4 py-2 border-4 border-white rounded-lg font-bold shadow-[6px_6px_0_#00ffff] bg-gray-800 text-white font-space-mono hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-500"
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
                            className={`px-6 py-2 rounded-full border-4 border-white font-bold text-lg font-space-mono transition-all duration-200 
                                ${activeCat === cat
                                    ? cat === "web"
                                        ? "bg-cyan-600 text-white shadow-[6px_6px_0_#00ffff]"
                                        : cat === "aiml"
                                            ? "bg-fuchsia-600 text-white shadow-[6px_6px_0_#ff00ff]"
                                            : "bg-orange-600 text-white shadow-[6px_6px_0_#ff6a00]"
                                    : "bg-gray-800 text-white shadow-[6px_6px_0_#222] hover:bg-gray-700 hover:shadow-[8px_8px_0_#333]"
                                }`}
                        >
                            {catLabel[cat]}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center text-white text-lg md:text-xl font-semibold mt-10 relative z-10 font-space-mono">
                        No projects for <b>{activeYear}</b> in <b>{catLabel[activeCat]}</b>. Try another filter.
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 relative z-10">
                        {filtered.map((p) => (
                            // Assuming ProjectCard is already styled for the black retro theme
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}