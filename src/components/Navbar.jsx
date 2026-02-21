import React, { useState, useEffect } from 'react';
import { Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Works', href: '#works' },
        { name: 'Blog', href: '#blog' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Simple active section detection
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 100) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-background-navy/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'}`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-10 h-10 bg-accent-mustard rounded-lg flex items-center justify-center text-background-navy group-hover:rotate-12 transition-transform duration-300">
                        <Layout size={24} strokeWidth={2.5} />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight text-white">JEGATH</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative label group flex flex-col items-center"
                            >
                                <span className={`transition-colors duration-300 ${isActive ? 'text-accent-mustard font-bold' : 'text-muted-gray group-hover:text-white'}`}>
                                    {link.name}
                                </span>

                                {/* Underline Animation */}
                                <motion.div
                                    className={`absolute -bottom-1 h-0.5 bg-accent-mustard rounded-full`}
                                    initial={{ width: 0 }}
                                    animate={{ width: isActive ? '100%' : '0%' }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Hover Underline (Hidden when active) */}
                                {!isActive && (
                                    <div className="absolute -bottom-1 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full w-full origin-left" />
                                )}
                            </motion.a>
                        );
                    })}
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none group"
                >
                    <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <div className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background-navy/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 p-8 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`label text-lg ${activeSection === link.href.substring(1) ? 'text-accent-mustard font-bold' : 'text-white'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
