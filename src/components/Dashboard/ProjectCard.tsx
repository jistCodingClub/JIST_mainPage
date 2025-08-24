'use client';

import Image from "next/image";
import Link from "next/link";

type Project = {
    title: string;
    image: string;
    category: string;
    tags?: string[];
    href: string;
    year: number;
};

// Colors for category labels
const categoryColor: Record<string, string> = {
    web: "bg-cyan-600",
    aiml: "bg-fuchsia-600",
    app: "bg-orange-600",
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group rounded-2xl border-4 border-white bg-black shadow-[8px_8px_0_#fff] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0px_0px_0_#fff]">
            {/* Image Section */}
            <div className="relative h-48 sm:h-56 w-full bg-gray-900 border-b-2 border-gray-700">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                    className={`absolute left-4 top-4 ${categoryColor[project.category]} text-white px-3 py-1 rounded-full border-2 border-white text-sm font-bold shadow-[0px_0px_0_#000]`}
                >
                    {project.category.toUpperCase()}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-4 flex-1 bg-black text-white">
                <h3 className="text-xl md:text-2xl font-extrabold text-white metal-mania-regular drop-shadow-[0px_0px_0_rgba(255,255,255,0.25)]">
                    {project.title}
                </h3>
                {project.tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-white text-black border-2 border-black rounded-full shadow-[0px_0px_0_#000] drop-shadow-[0px_0px_0px_rgba(0,0,0,0.2)]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Button Section */}
            <div className="p-4 pt-0">
                <Link
                    href={project.href}
                    target="_blank"
                    className="inline-block w-full text-center font-bold text-lg bg-white text-black border-4 border-black rounded-xl px-4 py-2 transition-all duration-200 shadow-[0px_0px_0_#000] hover:bg-gray-200 hover:-translate-y-1 hover:shadow-[1px_1px_0_#000]"
                >
                    View Project ↗
                </Link>
            </div>
        </div>
    );
}