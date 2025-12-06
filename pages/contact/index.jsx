"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import Head from "next/head";
import FollowUsSection from "@/components/FollowUs";
import Footer from "@/components/Footer";
// Reuse the fadeUp function
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
});

const ContactPage = () => {
  // Track scroll progress (from top of page to ~300px down)
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // fade out as user scrolls

  return (
      <main className="min-h-screen w-full bg-foreground text-white font-sans overflow-clip">
          <Head>
              <title>Contact Andro Solutions — Start Your Digital Project Today</title>

              <meta
                  name="description"
                  content="Ready to build your digital product? Contact Andro Solutions for consultations, quotes, partnerships, and custom development."
              />
              <meta
                  name="keywords"
                  content="contact Andro Solutions, hire developers, project consultation, tech support"
              />

              <meta property="og:title" content="Contact Andro Solutions"/>
              <meta
                  property="og:description"
                  content="Get in touch with our team to discuss your project, get quotes, or start building your next digital product."
              />
              <meta property="og:image" content="/Logo-1.png"/>
              <meta property="og:type" content="website"/>
              <meta property="og:url" content="https://andro-solutions.tech/contact"/>
              <link rel="canonical" href="https://www.andro-solutions.tech/contact" />

          </Head>


          {/* Hero Header */}
          <motion.section
              style={{opacity}} // bind scroll opacity
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              variants={fadeUp(0.1)}
              className="sticky top-10 w-full flex flex-col items-center justify-center text-center mt-[10vh] md:mt-[15vh] py-20 md:py-28 px-6 md:px-12"
          >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Let’s Build Something Together
              </h1>
              <p className="text-base md:text-lg text-primary/50 max-w-2xl">
                  Whether you have a brilliant idea, a project in progress, or just want to
                  explore possibilities, we’re here to collaborate. Reach out and we’ll
                  respond quickly.
              </p>

              {/* Decorative blurred background */}
              <div
                  className="absolute -z-10 top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-70"></div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
              initial=""
              whileInView="visible"
              viewport={{once: false, amount: 0.2}}
              variants={fadeUp(0.2)}
              className="px-2 pb-2 md:px-4 md:pb-4  overflow-hidden bg-foreground"
          >
              <ContactSection/>
          </motion.section>


          <div>
              <div className="relative z-10 mb-5">
                  <FollowUsSection />
              </div>
              <div className="sticky bottom-0">
                  <Footer/>
              </div>
          </div>
      </main>
  );
};

export default ContactPage;
