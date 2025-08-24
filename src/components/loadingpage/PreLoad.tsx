'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [emojiIndex, setEmojiIndex] = useState(0);

  const messages = [
    "Welcome, Coders!",
    "Your page is loading...",
  ];

  // Emojis ka array
  const emojis = ["💻", "🚀", "💡", "✨", "👾", "🤖"]; //  emojis

  useEffect(() => {
    // Message cycle
    const messageTimer = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000); 

    // Emoji cycle
    const emojiTimer = setInterval(() => {
      setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 800);

    return () => {
      clearInterval(messageTimer);
      clearInterval(emojiTimer);
    };
  }, []);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const emojiVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: { scale: 1, opacity: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
    exit: { scale: 0, opacity: 0, rotate: 180, transition: { duration: 0.3 } },
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f3ecd2] overflow-hidden">
       

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="flex flex-col items-center gap-6 relative z-10"
        >
            {/* Animated Emojis */}
            <motion.div
                className="relative w-28 h-28 md:w-40 md:h-40 border-4 border-black rounded-full shadow-[8px_8px_0_#000] flex items-center justify-center bg-white/70 overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    <motion.span
                        key={emojis[emojiIndex]} 
                        variants={emojiVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="text-6xl md:text-8xl" 
                    >
                        {emojis[emojiIndex]}
                    </motion.span>
                </AnimatePresence>
            </motion.div>
            
            {/* Loading Text */}
            <AnimatePresence mode="wait">
                <motion.h2
                    key={messages[messageIndex]}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="font-[family-name:var(--font-lucky)] text-4xl sm:text-5xl font-extrabold text-black text-shadow-[3px_3px_0_white] drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] text-center"
                >
                    {messages[messageIndex]}
                </motion.h2>
            </AnimatePresence>
        </motion.div>
    </div>
  );
};

export default Preloader;