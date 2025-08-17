'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import useIsTouch from "@/hooks/useIsDesktop"; 

export default function JoinNow() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        year: "",
        interest: "",
        proof: null as File | null,
    });
    const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, files } = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        
        
        setMessage({ type: "success", text: "Thanks for Joining! Your unique ID is sent to your mail." });
        setTimeout(() => {
            setMessage(null); 
            setFormData({ 
                name: "",
                email: "",
                phone: "",
                department: "",
                year: "",
                interest: "",
                proof: null,
            });
            
        }, 5000); 
    };

    return (
        <div className="noisy min-h-screen flex items-center justify-center bg-[#f3ecd2] p-6 relative overflow-hidden">
          

            <motion.form
                onSubmit={handleSubmit}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="noisy bg-cyan-300 border-4 border-black rounded-3xl p-8 w-full max-w-lg shadow-[10px_10px_0_#000000] relative z-10" // z-10 added
            >
                {/* Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl text-center font-[family-name:var(--font-lucky)] font-extrabold text-yellow-500 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] text-shadow-[2px_2px_0_black] mb-8" // Increased mb-8 for more space
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    JOIN <span className="text-rose-500">US</span>
                </motion.h2>

                {/* Name */}
                <motion.input
                    whileFocus={{ scale: 1.02 }} 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-3 border-4 border-black rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-white/80 shadow-[4px_4px_0_#000]" // Adjusted py, added bg, shadow, focus styles
                    required
                />

                {/* Email */}
                <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-3 border-4 border-black rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-white/80 shadow-[4px_4px_0_#000]"
                    required
                />

                {/* Phone */}
                <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-3 border-4 border-black rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-white/80 shadow-[4px_4px_0_#000]"
                    required
                />

                {/* Department */}
                <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-3 border-4 border-black rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-white/80 shadow-[4px_4px_0_#000]"
                    required
                >
                    <option value="">Select Department</option>
                    <option value="Bsc Physics">Physics</option>
                    <option value="Bsc Chemistry">Chemistry</option>
                    <option value="Bsc Mathematics">Mathematics</option>
                    <option value="PEI">PEI</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Civil">Civil</option>
                    <option value="ETC">ETC</option>
                </motion.select>

                {/* Year */}
                <motion.select
                    whileFocus={{ scale: 1.02 }}
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-3 border-4 border-black rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-white/80 shadow-[4px_4px_0_#000]"
                    required
                >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                </motion.select>

                {/* Interests */}
                <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="interest"
                    placeholder="Tell us your Interests..."
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-3 border-4 border-black rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-white/80 shadow-[4px_4px_0_#000]"
                    rows={3}
                />

                {/* File Upload */}
                <div className="text-black font-semibold mb-2">Upload any JIST Documents {'(admission receipt, ID card...)'}</div>
                <motion.input
                    whileHover={{ scale: 1.02 }} 
                    type="file"
                    name="proof"
                    onChange={handleChange}
                    className="w-full mb-6 border-4 border-black rounded-lg bg-white/80 file:cursor-pointer file:px-4 file:py-2 file:mr-4 file:rounded-md file:border-2 file:border-black file:bg-yellow-400 file:text-black file:font-bold file:shadow-[4px_4px_0_#000] hover:file:bg-yellow-500 transition-all duration-200" // Updated file input styling
                />

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.05, rotate: -2 }} 
                    whileTap={{ scale: 0.98, rotate: 2 }} 
                    type="submit"
                    className="w-full py-3 bg-rose-500 text-white border-4 border-black rounded-xl font-extrabold text-xl shadow-[8px_8px_0_#000] hover:bg-rose-600 transition-all duration-200" // Custom button style
                >
                    Join Now
                </motion.button>
            </motion.form>

            {/* Custom Message Box */}
            <AnimatePresence>
                {message && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className={`fixed top-5 left-1/2 -translate-x-1/2 p-4 rounded-lg text-center font-bold text-lg border-4 border-black shadow-[6px_6px_0_#000] z-50
                            ${message.type === "success" ? "bg-green-400 text-black" : "bg-red-400 text-black"}`}
                    >
                        {message.text}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}