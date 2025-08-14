"use client";
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

const categoryColor: Record<string, string> = {
    web: "bg-orange-500",
    aiml: "bg-red-500",
    app: "bg-blue-500",
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group rounded-2xl border-2 border-black bg-[#fff7ea] shadow-[6px_6px_0_#000] overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]">
            {/* Image Section */}
            <div className="relative h-44 w-full bg-[#FFE8C8]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                    className={`absolute left-3 top-3 ${categoryColor[project.category]} text-white px-3 py-1 rounded-full border-2 border-black text-sm font-bold`}
                >
                    {project.category.toUpperCase()}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-4 flex-1">
                <h3 className="text-lg md:text-xl font-extrabold text-black drop-shadow-[2px_2px_0_rgba(0,0,0,0.25)]">
                    {project.title}
                </h3>
                {project.tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-xs px-2 py-1 bg-white border-2 border-black rounded-full shadow-[2px_2px_0_#000]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Button Section */}
            <div className="px-4 pb-4">
                <Link
                    href={project.href}
                    target="_blank"
                    className="inline-block w-full text-center font-semibold bg-[#FF6B35] text-white border-2 border-black rounded-xl px-4 py-2 transition hover:bg-[#0077B6] hover:shadow-[4px_4px_0_#000] hover:-translate-y-[2px]"
                >
                    View Project ↗
                </Link>
            </div>
        </div>
    );
}
