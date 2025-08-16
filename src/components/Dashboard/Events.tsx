"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronDown, ExternalLink } from "lucide-react";
import useIsTouch from "@/hooks/useIsDesktop";
import { events } from "@/data/eventData";
type Event = {
    id: number;
    title: string;
    date: string;
    description: string;
    location: string;
};

export default function Events() {
    const [openEvent, setOpenEvent] = useState<number | null>(null);

    const handleAddToCalendar = (event: Event) => {
        const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            event.title
        )}&dates=20250820T120000Z/20250820T140000Z&details=${encodeURIComponent(
            event.description
        )}&location=${encodeURIComponent(event.location)}`;
        window.open(calendarUrl, "_blank");
    };

    const isTouch = useIsTouch();
    const heroMinH = isTouch ? "60svh" : "100dvh";
    return (
        <section
            id="events"
            className="relative z-10 px-6 md:px-12 py-16 bg-[var(--background)] border-t-4 border-black"
            style={{ minHeight: heroMinH }}>
            {/* Retro Title */}
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="  text-5xl text-center font-[family-name:var(--font-lucky)]  md:text-6xl font-extrabold text-black  text-shadow-[2px_2px_0_var(--secondary-color)] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] mb-6 tracking-wide"
            >
                <span className="text-orange-400 text-shadow-[2px_2px_0_red]">UPCOMING </span> EVENTS
            </motion.h2>

            {/* Event List */}
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
                {events.map((event) => (
                    <motion.div
                        key={event.id}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="group border-2 border-black bg-[#FFE8C8] shadow-[6px_6px_0_#000] rounded-2xl overflow-hidden"
                    >
                        <button
                            onClick={() =>
                                setOpenEvent(openEvent === event.id ? null : event.id)
                            }
                            className="w-full flex items-center justify-between px-6 py-4 font-bold text-lg md:text-xl text-black"
                        >
                            {event.title}
                            <ChevronDown
                                className={`transition-transform ${openEvent === event.id ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openEvent === event.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="px-6 pb-6 space-y-3"
                            >
                                <p className="text-sm md:text-base font-medium">
                                    📅 {event.date}
                                </p>
                                <p className="text-sm md:text-base">📍 {event.location}</p>
                                <p className="text-sm md:text-base italic">
                                    {event.description}
                                </p>

                                <div className="flex gap-3 mt-4">
                                    <button
                                        onClick={() => handleAddToCalendar(event)}
                                        className="flex items-center gap-2 bg-black text-white border-2 border-black px-4 py-2 rounded-xl font-semibold text-sm hover:translate-y-[-2px] hover:shadow-[3px_3px_0_#000] transition"
                                    >
                                        <Calendar size={16} /> Save to Calendar
                                    </button>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="flex items-center gap-2 bg-[#ff5a5a] text-white border-2 border-black px-4 py-2 rounded-xl font-semibold text-sm hover:translate-y-[-2px] hover:shadow-[3px_3px_0_#000] transition"
                                    >
                                        <ExternalLink size={16} /> View Details
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
