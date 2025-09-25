import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Logo from '@/public/Logo-2.png'
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    {
        label: 'Home',
        href: '/',
        className: 'relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
        mobileClass: 'text-secondary-text hover:text-primary cursor-pointer transition-colors duration-300',
    },
    {
        label: 'About',
        href: '/about',
        className: 'relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
        mobileClass: 'text-secondary-text hover:text-primary cursor-pointer transition-colors duration-300',
    },
    {
        label: 'Services',
        href: '/services',
        className: 'relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
        mobileClass: 'text-secondary-text hover:text-primary cursor-pointer transition-colors duration-300',
    },
    {
        label: 'Projects',
        href: '/projects',
        className: 'relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
        mobileClass: 'text-secondary-text hover:text-primary cursor-pointer transition-colors duration-300',
    },
    {
        label: 'Contact',
        href: '/contact',
        className: 'relative text-primary cursor-pointer transition-colors duration-300 ease-out hover:text-primary after:content-[""] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
        mobileClass: 'text-secondary-text hover:text-primary cursor-pointer transition-colors duration-300',
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
            initial={{y: -120, width: 340}}
            animate={{y: showNavbar ? 0 : -120, width: isExpanded ? 800 : 340}}
            transition={{duration: 0.4, ease: [0.33,1,0.68,1], delay: isExpanded? 0: 0.1    }}
            className="pt-8 fixed top-0 left-1/2 -translate-x-1/2 z-50"
        >
            <motion.div
                initial={{y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.3, ease: "easeOut"}}
                className={`outline outline-primary relative rounded-full z-30 w-full flex items-center justify-between transition-colors duration-300 ${isScrolled ? 'bg-secondary/85' : 'bg-secondary shadow-md'} px-8 py-4`}
            >
                <Link
                    href="/public"
                    className="inline-flex items-center justify-center w-[40px] h-[40px] min-w-[40px] shrink-0 cursor-pointer"
                >
                    <Image
                        src={Logo}
                        alt="Andro Solutions"
                        width={60}
                        height={60}
                        priority
                        className="object-contain transition-transform duration-700 ease-out hover:rotate-[360deg] hover:scale-110"
                    />
                </Link>

                {/* top-level links: show Home & About always; show remaining links only when menu is expanded */}
                <nav>
                    <motion.ul
                        initial={{width:108}}
                        animate={{width:isExpanded ? 346: 108, transition:{delay:0.1} }}
                        transition={{duration: 0.3}}
                        className={'flex gap-6 w-[108px]'}>
                        <li><Link href={""}>Home</Link></li>
                        <li><Link href={""}>About</Link></li>
                        <AnimatePresence mode="wait">
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition:{duration: 0.4, ease: "easeInOut", delay: 0.3} }}
                                    exit={{ opacity: 0 }}
                                    // transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
                                    className="flex gap-6"
                                >
                                    <li><Link href="">Service</Link></li>
                                    <li><Link href="">Projects</Link></li>
                                    <li><Link href="">Contact</Link></li>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.ul>
                </nav>
                <div className='  flex justify-center  '>
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
                            <X  className=' text-xl cursor-pointer hover:text-black/80 text-primary' />
                        )}
                    </a>
                </div>
            </motion.div>
            {/* <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isSidebarOpen ? 0 : "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`z-30 fixed top-0 right-0 h-full bg-tertiary bg-secondary w-3/5 max-sm:w-full transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
            >
                <ul className="flex flex-col p-4 space-y-8">
                    <li className='flex justify-between items-center'>
                        <a className="text-3xl">
                            <X className='cursor-pointer hover:text-primary text-secondary-text' onClick={toggleSidebar} />
                        </a>
                    </li>
                    {navLinks.map((link, idx) => (
                        <li key={link.label}>
                            {link.href ? (
                                <a
                                    className={link.mobileClass}
                                    href={link.href}
                                    onClick={link.onClick}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a
                                    className={link.mobileClass}
                                    onClick={link.onClick}
                                >
                                    {link.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </motion.div>*/}
        </motion.div>
    );
}

export default Navbar;
