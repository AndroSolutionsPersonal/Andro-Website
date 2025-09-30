"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import WhyUs from "@/components/WhyUs";
import Head from "next/head";
import FollowUsSection from "@/components/FollowUs";
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
      <main className="min-h-screen w-full bg-background text-white font-sans overflow-hidden">
          <Head>
              <title>Contact Us | Andro Solutions</title>
              <meta name="description"
                    content="Get in touch with Andro Solutions. Let’s discuss how we can collaborate on technology, innovation, and business growth."/>
              <meta name="keywords"
                    content="contact Andro Solutions, business inquiry, IT consulting contact, technology partner"/>
              <meta property="og:title" content="Contact Us | Andro Solutions"/>
              <meta property="og:description"
                    content="Reach out to Andro Solutions and start your journey toward innovation and success."/>
              <meta property="og:image" content="/og-images/contact.jpg"/>
              <meta property="og:type" content="website"/>
              <meta property="og:url" content="https://yourdomain.com/contact"/>
          </Head>

          {/* Hero Header */}
          <motion.section
              style={{opacity}} // bind scroll opacity
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              variants={fadeUp(0.1)}
              className="z-0 fixed w-full flex flex-col items-center justify-center text-center mt-[10vh] md:mt-[15vh] py-20 md:py-28 px-6 md:px-12"
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
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.2}}
              variants={fadeUp(0.2)}
              className="px-2 pb-2 md:px-4 md:pb-4 mt-[50vh] md:mt-[65vh] overflow-hidden"
          >
              <ContactSection/>
          </motion.section>

          {/* Why Us Section */}
          <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.2}}
              variants={fadeUp(0.05)}
              className="px-2 pb-2 md:px-4 md:pb-4 overflow-hidden"
          >
              <WhyUs/>
          </motion.section>
          <FollowUsSection />
      </main>
  );
};

export default ContactPage;
