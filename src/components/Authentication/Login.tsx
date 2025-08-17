'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [message, setMessage] = useState<{ type: string; text: string } | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !pwd.trim()) {
            setMessage({ type: "error", text: "Please fill in all fields!" });
            setTimeout(() => setMessage(null), 3000);
            return;
        }

        // Logic for login (replace with your actual login call)
        console.log("Login attempt with:", { email, pwd });

        // On successful login
        setMessage({ type: "success", text: "Logged in successfully!" });
        setTimeout(() => {
            setMessage(null);
        }, 3000);
        
        setEmail("");
        setPwd("");
    };

    return (
        <div className="min-h-screen noisy flex items-center justify-center bg-[--background] p-6 relative overflow-hidden">

            <motion.form
                onSubmit={handleLogin}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="noisy bg-cyan-300 border-4 border-black rounded-3xl p-8 w-full max-w-sm flex flex-col gap-4 shadow-[10px_10px_0_#000000] relative z-10"
            >
                {/* Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl md:text-6xl text-center font-[family-name:var(--font-lucky)] font-extrabold text-yellow-500 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] text-shadow-[2px_2px_0_black]"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    LOG <span className="text-rose-500">IN</span>
                </motion.h2>

                {/* Email */}
                <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-white/80 shadow-[4px_4px_0_#000]"
                    placeholder="Enter your email"
                    required
                />

                {/* Password */}
                <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="password" 
                    name="password"
                    id="pwd"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black rounded-lg font-bold placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-white/80 shadow-[4px_4px_0_#000]"
                    placeholder="Enter your password"
                    required
                />
                
                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.98, rotate: 2 }}
                    type="submit"
                    className="w-full mt-4 py-3 bg-rose-500 text-white border-4 border-black rounded-xl font-extrabold text-xl shadow-[8px_8px_0_#000] hover:bg-rose-600 transition-all duration-200"
                >
                    Log In
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
                            ${message.type === "success" ? "bg-green-400 text-black" : "bg-red-400 text-white"}`}
                    >
                        {message.text}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Login;