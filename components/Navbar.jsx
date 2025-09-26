import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Logo from '@/public/Logo-2.png'
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  {
    label: "Home",
    href: "/",
    className:
      'relative text-primary cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4',
    mobileClass:
      "text-secondary-text hover:text-accent cursor-pointer transition-colors duration-300",
  },
  {
    label: "About",
    href: "/about",
    className:
      'relative text-primary cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4',
    mobileClass:
      "text-secondary-text hover:text-accent cursor-pointer transition-colors duration-300",
  },
  {
    label: "Services",
    href: "/services",
    className:
      'relative text-primary cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4',
    mobileClass:
      "text-secondary-text hover:text-accent cursor-pointer transition-colors duration-300",
  },
  {
    label: "Projects",
    href: "/projects",
    className:
      'relative text-primary cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4',
    mobileClass:
      "text-secondary-text hover:text-accent cursor-pointer transition-colors duration-300",
  },
  {
    label: "Contact",
    href: "/contact",
    className:
      'relative text-primary cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] after:content-[""] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4',
    mobileClass:
      "text-secondary-text hover:text-accent cursor-pointer transition-colors duration-300",
  },
];



const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNavbar(false); // hide on scroll down
            } else {
                setShowNavbar(true); // show on scroll up
            }
            setLastScrollY(window.scrollY);
            setIsScrolled(window.scrollY > 50);
        };

        const handleMouseMove = (e) => {
            if (e.clientY < 80) {
                setShowNavbar(true); // show if mouse moves near top
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastScrollY]);
    // Keep 'Home' and 'About' visible at all times; collapse/expand the remaining links
    const alwaysLinks = navLinks.slice(0, 2);
    const collapsibleLinks = navLinks.slice(2);

    return (
        <motion.div
            initial={{ y: -120 }}
            animate={{ y: showNavbar ? 0 : -120 }}
            transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1], delay: !isExpanded ? 0 : 0.2 }}
            className={`pt-8 ${!isExpanded ? 'px-[18%] md:px-[27%] lg:px-[35%]' : 'px-[4%] md:px-[10%] lg:px-[27%]'} fixed top-0 w-screen left-1/2 -translate-x-1/2 z-50`}
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`outline outline-primary relative rounded-full z-30 w-full flex items-center justify-between transition-colors duration-300 ${isScrolled ? 'bg-secondary/85' : 'bg-secondary shadow-md'} px-4 md:px-8 lg:px-12 py-4`}
            >
                <Link
                    href="/"
                    className={`${isExpanded ? 'text-right max-[420px]:hidden' : 'flex'}  items-center justify-center w-[35px] h-[35px] min-w-[35px] shrink-0 cursor-pointer`}
                >
                    <Image
                        src={Logo}
                        alt="Andro Solutions"
                        width={60}
                        height={60}
                        priority
                        className={`object-contain transition-transform duration-700 ease-out hover:rotate-[360deg] hover:scale-110`}
                    />
                </Link>

                {/* top-level links: show Home & About always; show remaining links only when menu is expanded */}
                <nav>
                    <motion.ul
                        initial={{  }}
                        animate={{ transition: { delay: 0.1 } }}
                        transition={{ duration: 0.1 }}
                        className={'flex justify-center gap-2 md:gap-6'}>
                        <li><Link href="/" className='relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Home</Link></li>
                        <li><Link href="/about" className='relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>About</Link></li>
                        <AnimatePresence mode="wait">
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.2, ease: "easeInOut", delay: 0.2 } }}
                                    exit={{ opacity: 0 }}
                                    // transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
                                    className="flex justify-center gap-2 md:gap-6"
                                >
                                    <li><Link href="/service" className='relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Service</Link></li>
                                    <li><Link href="/projects" className='relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Projects</Link></li>
                                    <li><Link href="/contact" className='relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full'>Contact</Link></li>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.ul>
                </nav>
                <div className='-ml-4 md:-ml-1 flex justify-start  '>
                    <a
                        href="#"
                        className={`navbar-burger flex self-center`}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsExpanded(!isExpanded);
                        }}
                    >
                        {!isExpanded && (
                            <Menu className="text-xl text-primary" />
                        )}
                        {isExpanded && (
                            <X className=' text-xl cursor-pointer hover:text-black/80 text-primary' />
                        )}
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Navbar;
