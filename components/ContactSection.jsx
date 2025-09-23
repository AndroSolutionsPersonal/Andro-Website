"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
  initial: { opacity: 0, y: 100, scale: 0.7 }, 
  whileInView: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 100, scale: 0.7 }, 
  viewport: { once: false, amount: 0.8 } 
});

const ContactSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="relative bg-primary text-white py-16 px-6 md:px-12 rounded-3xl w-full mx-auto font-monrserrat shadow-2xl z-20"
    >
      {/* Decorative blur glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl opacity-70"></div>

      {/* Heading */}
      <motion.div
        variants={fadeUp(0.1)}
        className="text-center max-w-2xl mx-auto mb-10 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Reach Out To Us
        </h2>
        <p className="text-sm md:text-base text-secondary">
          Have a project in mind or a question about our services? Reach out to us anytime
          and our team will be happy to assist you. We’ll get back to you as quickly as possible.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        variants={fadeUp(0.3)}
        className="space-y-6 px-2 md:px-[25%] relative z-10"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-2xl px-5 py-3 bg-white/10 text-secondary placeholder-secondary/70 
            focus:outline-none focus:ring-2 focus:ring-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl px-5 py-3 bg-white/10 text-secondary placeholder-secondary/70 
            focus:outline-none focus:ring-2 focus:ring-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all duration-300"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Your Message"
          rows={6}
          className="w-full rounded-2xl px-5 py-4 bg-white/10 text-secondary placeholder-secondary/70 
          focus:outline-none focus:ring-2 focus:ring-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all duration-300"
        />

        {/* Button */}
        <motion.div
          variants={fadeUp(0.5)}
          className="text-center"
        >
          <button
            type="submit"
            className="w-full bg-black/5 text-secondary outline outline-black/40 font-semibold px-8 py-3 rounded-2xl
            hover:bg-white/5 hover:text-white hover:scale-[1.03]
            transition-all ease-in duration-200 cursor-pointer"
          >
            Send Message
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactSection;
