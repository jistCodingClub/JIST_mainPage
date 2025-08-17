'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

interface TeamMember {
    name: string;
    role: string;
    quote: string;
    src: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
}

// Card colors 
const cardColors = [
    { front: "bg-red-400", back: "bg-red-700", roleColor: "bg-yellow-400" },     
    { front: "bg-blue-400", back: "bg-blue-700", roleColor: "bg-orange-400" },   
    { front: "bg-green-400", back: "bg-green-700", roleColor: "bg-purple-400" }, 
    { front: "bg-yellow-400", back: "bg-yellow-700", roleColor: "bg-blue-400" }, 
    { front: "bg-pink-400", back: "bg-pink-700", roleColor: "bg-green-400" },    
    { front: "bg-purple-400", back: "bg-purple-700", roleColor: "bg-red-400" },  
];

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Dynamic color selection based on index
    const { front, back, roleColor } = cardColors[index % cardColors.length]; 

    return (
        <motion.div
            className="w-full h-80 relative perspective cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
            initial={{ rotate: -5, transformOrigin: "top" }}
            animate={{ rotate: [5, -5] }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
        >
            {/* Hanging Rope for this card */}
            <div className="absolute -top-6 left-1/2 w-0.5 h-6 bg-black z-20"></div>

            {/* Main Card Container with flip animation */}
            <motion.div
                className="w-full h-full relative rounded-xl border-4 border-black shadow-[8px_8px_0_#000000]"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }} 
            >
                {/* Card Front */}
                <div className={`w-full h-full absolute backface-hidden ${front} rounded-xl p-4 flex flex-col items-center justify-center text-center`}>
                    <Image
                        src={member.src}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-black shadow-[4px_4px_0_#000] mb-4 object-cover"
                    />
                    <h3 className="text-xl sm:text-3xl sfont font-bold text-black stroke-3 text-outline drop-shadow-[1px_1px_0_white]">
                        {member.name}
                    </h3>
                    {/* role Banner*/}
                    <p className={`absolute -top-3 -left-4 font-[family-name:var(--font-lucky)] text-lg text-white text-outline-black font-extrabold rotate-[-12deg] ${roleColor} shadow-[4px_4px_0_black] px-6 py-2 rounded-lg border-2 border-black`}>
                        {member.role.toUpperCase()}
                    </p>
                </div>

                {/* Card Back */}
                <div className={`w-full h-full absolute backface-hidden ${back} rounded-xl p-4 flex flex-col justify-center text-center rotate-y-180`}>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                        About {member.name}
                    </h4>
                    <p className="text-sm sm:text-md text-white mb-4 italic">
                        &quot;{member.quote}&quot;
                    </p>
                    <div className="flex justify-center gap-4">
                        {member.github && (
                            <Link href={member.github} target="_blank">
                                <i className="ri-github-fill text-2xl text-white hover:scale-110 transition-transform"></i>
                            </Link>
                        )}
                        {member.instagram && (
                            <Link href={member.instagram} target="_blank">
                                <i className="ri-instagram-line text-2xl text-white hover:scale-110 transition-transform"></i>
                            </Link>
                        )}
                        {member.linkedin && (
                            <Link href={member.linkedin} target="_blank">
                                <i className="ri-linkedin-box-fill text-2xl text-white hover:scale-110 transition-transform"></i>
                            </Link>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TeamCard;