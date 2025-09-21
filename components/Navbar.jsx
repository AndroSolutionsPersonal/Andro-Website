import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import toast from 'react-hot-toast';
import Logo from '../assets/logos/Logo-2.png'
import { motion } from "framer-motion";

const navLinks = [
    {
        label: 'Home',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
        onClick: undefined,
    },
    {
        label: 'About',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
        onClick: undefined,
    },
    {
        label: 'Services',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
        onClick: undefined,
    },
    {
        label: 'Contact',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
        onClick: undefined,
    },
    {
        label: 'Projects',
        href: '/',
        className: 'text-primary hover:text-accent cursor-pointer rounded-sm hover:bg-white/40 hover:px-4 hover:py-2 transition-all duration-200 ease-in-out',
        mobileClass: 'text-secondary-text hover:text-accent cursor-pointer',
        onClick: undefined,
    },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        <div className='pt-4 px-4 md:px-12 lg:px-24 fixed top-0 left-0 w-screen'>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`rounded-4xl hover: z-30 w-full flex items-center justify-between transition-colors duration-300 ${isScrolled ? 'bg-secondary/85' : 'bg-secondary shadow-md'} px-12 lg:px-[60px] max-md:px-6 py-4`}
            >
                <nav>
                    <a
                        className="text-2xl font-bold text-accent cursor-pointer hover:text-secondary transition-all duration-300"
                        onClick={() => { navigate("/") }}>
                        <img src={Logo} alt="Andro Solutions" width={64} />
                    </a>
                </nav>
                <ul className="max-lg:hidden flex px-4 ml-auto font-semibold font-montserrat space-x-12">
                    {navLinks.map((link, idx) => (
                        <li key={link.label}>
                            <nav>
                                {link.href ? (
                                    <a
                                        className={link.className}
                                        href={link.href}
                                        onClick={link.onClick}
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <a
                                        className={link.className}
                                        onClick={link.onClick}
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </nav>
                        </li>
                    ))}
                </ul>
                <div className='flex justify-end'>
                    <a
                        href="#"
                        className="navbar-burger flex self-center lg:hidden"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSidebar();
                        }}
                    >
                        <Menu className="text-xl text-primary" />
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
