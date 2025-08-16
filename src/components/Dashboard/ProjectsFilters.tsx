'use client';
import { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { projects, years, categories, type Category } from '@/data/projects';
import useIsTouch from "@/hooks/useIsDesktop";
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
        <section id='project' className="relative  py-10 px-4 bg-[--background] border-b-4 border-red-500 shadow-[0px_2px_0_rgba(0,0,0,0.4)]"    style={{ minHeight: heroMinH }} >
            {/* Heading */}
            <section className="border-2 noisy rounded-3xl py-3 bg-green-900 border-orange-400 max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black font-[family-name:var(--font-lucky)] text-shadow-[2px_2px_0_var(--secondary-color)] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] mb-6">
                        <span className="text-orange-400 text-shadow-[2px_2px_0_black]">Club</span> Projects
                    </h1>
                </div>

                {/* Year Dropdown */}
                <div className="flex justify-center mb-6">
                    <select
                        value={activeYear}
                        onChange={(e) => setActiveYear(parseInt(e.target.value))}
                        className="px-4 py-2 border-2 border-black rounded-lg font-bold shadow-[3px_3px_0_#000] bg-white hover:bg-orange-100 focus:outline-none"
                    >
                        {years.map((yr) => (
                            <option key={yr} value={yr}>
                                {yr}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`px-4 py-2 rounded-full border-2 border-black font-bold shadow-[3px_3px_0_#000]
            ${activeCat === cat
                                    ? cat === "web"
                                        ? "bg-blue-500 text-white"
                                        : cat === "aiml"
                                            ? "bg-red-500 text-white"
                                            : "bg-orange-500 text-black"
                                    : "bg-white hover:bg-neutral-100"
                                }`}
                        >
                            {catLabel[cat]}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center text-gray-600">
                        No projects for <b>{activeYear}</b> in <b>{catLabel[activeCat]}</b>. Try another filter.
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
                        {filtered.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </div>
                )}
            </section>
        </section>


    );
}
