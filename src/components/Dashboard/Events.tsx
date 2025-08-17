'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronDown } from "lucide-react"; 
import { events } from "@/data/eventData";
import RetroHeadingBanner from "./RetroHeadingBanner"; 
import useIsTouch from "@/hooks/useIsDesktop";

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
            className="noisy relative z-10 px-4 md:px-8 py-16 bg-[#f3ecd2] border-t-4 border-red-500 shadow-[0px_-2px_0_rgba(0,0,0,0.4)]"
            style={{ minHeight: heroMinH }}>

           

           
            <RetroHeadingBanner title="Upcoming" secondPart="Events" />

            {/* Event List */}
            <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-10"> 
                {events.map((event) => (
                    <motion.div
                        key={event.id}
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="group noisy border-4 border-black bg-yellow-300/80 shadow-[8px_8px_0_#000] rounded-xl overflow-hidden"
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
                                <p className="text-sm md:text-base font-medium text-gray-800">
                                    <span className="text-black font-extrabold mr-2">📅</span> {event.date}
                                </p>
                                <p className="text-sm md:text-base text-gray-800">
                                    <span className="text-black font-extrabold mr-2">📍</span> {event.location}
                                </p>
                                <p className="text-sm md:text-base italic text-gray-700">
                                    {event.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-4">
                                    <button
                                        onClick={() => handleAddToCalendar(event)}
                                        className="flex items-center gap-2 bg-purple-600 text-white border-4 border-black px-4 py-2 rounded-xl font-bold text-sm hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#000] transition"
                                    >
                                        <Calendar size={16} /> Save to Calendar
                                    </button>
                                    
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}