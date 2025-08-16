"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--text-color)] border-t-4 border-[var(--text-color)] shadow-[0_-6px_0_var(--secondary-color)] mt-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-2xl font-[var(--font-lucky)] text-[var(--primary-color)] drop-shadow-[2px_2px_0_var(--text-color)]">
            JIST Codin Club
          </h2>
          <p className="text-sm leading-relaxed">
            A vibrant club for coders, dreamers, and creators. Join us for fun, events, and unforgettable vibes! 🚀
          </p>
        </motion.div>

        {/* Middle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start md:items-center gap-2"
        >
          <h3 className="text-xl font-[var(--font-lucky)] text-[var(--secondary-color)] drop-shadow-[2px_2px_0_var(--text-color)]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#events" className="hover:text-[var(--primary-color)]">Upcoming Events</a></li>
            <li><a href="#join" className="hover:text-[var(--primary-color)]">Join Now</a></li>
            <li><a href="#about" className="hover:text-[var(--primary-color)]">About Us</a></li>
            <li><a href="#contact" className="hover:text-[var(--primary-color)]">Contact</a></li>
          </ul>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h3 className="text-xl font-[var(--font-lucky)] text-[var(--secondary-color)] drop-shadow-[2px_2px_0_var(--text-color)]">
            Stay Connected
          </h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-[var(--primary-color)]"><FaInstagram /></a>
            <a href="#" className="hover:text-[var(--primary-color)]"><FaFacebook /></a>
            <a href="#" className="hover:text-[var(--primary-color)]"><FaTwitter /></a>
          </div>
          <p className="text-sm flex items-center gap-2"><FaEnvelope /> jistcodingclub@gmail.com</p>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-[var(--text-color)] text-[var(--background)] text-center py-4 text-sm font-[var(--font-lucky)]"
      >
        © {new Date().getFullYear()} JIST Coding Club ✨ All Rights Reserved
      </motion.div>
    </footer>
  );
}
