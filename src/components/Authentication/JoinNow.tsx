"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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
    alert("Thanks for Joining! your unique id is sent to your mail");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="noisy bg-emerald-800 border-3 border-black rounded-3xl p-8 w-full max-w-lg shadow-[8px_8px_0_var(--secondary-color)]"
      >
        <motion.h2
          className="text-5xl text-center font-[family-name:var(--font-lucky)]  md:text-6xl font-extrabold text-orange-400  drop-shadow-[3px_3px_0px_rgba(0,0,0,0.4)] text-shadow-[2px_2px_0_red]"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
        JOIN <span className="text-black">US</span>
        </motion.h2>                   

        {/* Name */}
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border-3 border-black rounded-lg font-[var(--font-lucky)]"
          required
        />

        {/* Email */}
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border-3 border-black rounded-lg font-[var(--font-lucky)]"
          required
        />

        {/* Phone */}
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border-3 border-black rounded-lg font-[var(--font-lucky)]"
          required
        />

        {/* Department */}
        <motion.select
          whileFocus={{ scale: 1.05 }}
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border-3 border-black rounded-lg font-[var(--font-lucky)]"
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
          whileFocus={{ scale: 1.05 }}
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border-3 border-black rounded-lg font-[var(--font-lucky)]"
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
          whileFocus={{ scale: 1.05 }}
          name="interest"
          placeholder="Tell us your Interests..."
          value={formData.interest}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border-3 border-black rounded-lg font-[var(--font-lucky)]"
          rows={3}
        />

        {/* File Upload */}
        <div>upload any JIST Documents {'(admission reciept , ID card...)'}</div>
        <motion.input
          whileHover={{ scale: 1.05 }}
          type="file"
          name="proof"
          onChange={handleChange}
          className="w-full mb-4 border-3 border-black rounded-lg bg-white file:cursor-pointer file:px-3 file:py-1 file:mr-3 file:rounded-md file:border-2 fil3:border-black file:bg-[var(--secondary-color)] file:text-[var(--text-color)] file:font-[var(--font-lucky)]"
          />

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95, rotate: 2 }}
          type="submit"
          className="top-button w-full mt-2"
        >
          Join Now
        </motion.button>
      </motion.form>
    </div>
  );
}
