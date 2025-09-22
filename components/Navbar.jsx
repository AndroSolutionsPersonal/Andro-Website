import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Logo from '@/public/Logo-2.png'
import { motion } from "framer-motion";

const navLinks = [
    {
        label: 'Home',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
    },
    {
        label: 'About',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
    },
    {
        label: 'Services',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
    },
    {
        label: 'Contact',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
    },
    {
        label: 'Projects',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
    },
];

const Navbar = () => {
    // const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className={`pt-8 ${isExpanded ? 'px-[18%] md:px-[30%]' : 'px-[4%] md:px-[10%]'} fixed top-0 left-0 w-screen z-50 transition-all duration-450 ease-out`}>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative rounded-xl hover: z-30 w-full flex items-center justify-between transition-colors duration-300 ${isScrolled ? 'bg-secondary/85' : 'bg-secondary shadow-md'} px-4 md:px-8 lg:px-12 py-4`}
            >
                <nav>
                    <a
                        className={`${isExpanded ? 'block' : 'max-[450px]:hidden block'} text-2xl font-bold text-accent cursor-pointer hover:text-secondary transition-all duration-300`}
                        href='/'>
                        <Image src={Logo} alt="Andro Solutions" priority className='w-8 lg:w-12 hover:rotate-360 hover:scale-110 transition-all ease-out duration-700 delay-70' />
                    </a>
                </nav>
                {/* <ul className={`max-lg:hidden flex px-4 ml-auto font-semibold font-secondary space-x-12 ${isExpanded ? '' : 'hidden'}`}> */}
                <ul className={`px-1 lg:px-4 ml-auto font-semibold font-secondary ${isExpanded ? 'hidden' : 'flex space-x-3 text-sm lg:space-x-12'} transition-all duration-150 delay-800 ease-in`}>
                    {navLinks.map((link, idx) => (
                        <li key={link.label}>
                            <nav>
                                <a
                                    className={link.className}
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            </nav>
                        </li>
                    ))}
                </ul>
                <div className='pl-1 lg:pl-4 flex justify-end'>
                    <a
                        href="#"
                        className={`navbar-burger flex self-center`}
                        onClick={(e) => {
                            e.preventDefault();
                            // toggleSidebar();
                            setIsExpanded(!isExpanded);
                        }}
                    >
                        {isExpanded && (
                            <Menu className="text-xl text-primary" />
                        )}
                        {!isExpanded && (
                            <X size={18} className='cursor-pointer hover:text-black/80 text-primary' />
                        )}
                    </a>
                </div>
            </motion.div >
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isSidebarOpen ? 0 : "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`z-30 fixed top-0 right-0 h-full bg-tertiary bg-secondary w-3/5 max-sm:w-full transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
            >
                <ul className="flex flex-col p-4 space-y-8">
                    <li className='flex justify-between items-center'>
                        <a className="text-3xl">
                            <X className='cursor-pointer hover:text-accent text-secondary-text' onClick={toggleSidebar} />
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
            </motion.div>
        </div>
    );
}

export default Navbar;
