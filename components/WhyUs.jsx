"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Briefcase, Users, Rocket, Heart } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: "Proven Experience",
    desc: "We’ve successfully partnered with businesses across industries to bring ideas to life.",
  },
  {
    icon: <Users className="w-10 h-10 text-secondary" />,
    title: "Collaborative Approach",
    desc: "Your goals drive our process — we work hand in hand from start to finish.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-accent" />,
    title: "Future-Ready Solutions",
    desc: "We design with tomorrow in mind — scalable, innovative, and built to last.",
  },
  {
    icon: <Heart className="w-10 h-10 text-pink-500" />,
    title: "Passion & Care",
    desc: "Every project is crafted with detail, love, and a commitment to excellence.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const WhyUs = () => {
  // hook to track visibility
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="rounded-2xl relative py-24 bg-gradient-to-b from-secondary to-primary overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full opacity-70" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent"
        >
          Why Work With Us?
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-primary/80 max-w-2xl mx-auto"
        >
          We don’t just build projects — we build long-term partnerships and solutions
          that stand out.
        </motion.p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden"
              animate={controls}
              variants={fadeUp}
              transition={{ delay: 0.3 + i * 0.2 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 flex items-center justify-center rounded-full bg-white/10 p-4 group-hover:rotate-6 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
