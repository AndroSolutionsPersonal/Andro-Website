"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    toast.loading("Sending message...", { id: "sending" });

    try {
      await emailjs.send(
          "service_m0yk7j5", // ⚙️ Replace with your EmailJS service ID
          "template_s79bmmq", // ⚙️ Replace with your EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "Gmfdd9f_-WEDy_daZ" // ⚙️ Replace with your EmailJS public key
      );

      toast.dismiss("sending");
      toast.success("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.dismiss("sending");
      toast.error("Failed to send message. Please try again ❌");
    } finally {
      setLoading(false);
    }
  };

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
        <motion.div variants={fadeUp(0.1)} className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Reach Out To Us</h2>
          <p className="text-sm md:text-base text-secondary">
            Have a project in mind or a question about our services? Reach out to us anytime and our team will be happy to assist you.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
            variants={fadeUp(0.3)}
            onSubmit={sendEmail}
            className="space-y-6 px-2 md:px-[25%] relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl px-5 py-3 bg-white/10 text-secondary placeholder-secondary/70
            focus:outline-none focus:ring-2 focus:ring-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all duration-300"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl px-5 py-3 bg-white/10 text-secondary placeholder-secondary/70
            focus:outline-none focus:ring-2 focus:ring-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all duration-300"
            />
          </div>

          <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-2xl px-5 py-4 bg-white/10 text-secondary placeholder-secondary/70
          focus:outline-none focus:ring-2 focus:ring-secondary focus:shadow-lg focus:shadow-secondary/20 transition-all duration-300"
          />

          <motion.div variants={fadeUp(0.5)} className="text-center">
            <button
                type="submit"
                disabled={loading}
                className={`w-full font-semibold px-8 py-3 rounded-2xl transition-all ease-in duration-200 cursor-pointer 
              ${loading
                    ? "bg-secondary/30 text-white cursor-wait"
                    : "bg-black/5 text-secondary outline outline-black/40 hover:bg-white/5 hover:text-white hover:scale-[1.03]"
                }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
  );
};

export default ContactSection;
