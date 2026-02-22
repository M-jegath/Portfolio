import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <footer className="py-12 border-t border-white/5 bg-background-navy/50">
                <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">JEGATH</span>
                    </div>

                    <p className="label">&copy; 2026 JEGATH. Built with React & Tailwind.</p>

                    <div className="flex gap-8">
                        <a
                            href="https://leetcode.com/u/JEGATH-M/"
                            target="_blank"
                            rel="noreferrer"
                            className="label text-xs tracking-[0.2em] font-bold text-muted-gray hover:text-accent-mustard transition-colors duration-300 uppercase"
                        >
                            Leetcode
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jegath28"
                            target="_blank"
                            rel="noreferrer"
                            className="label text-xs tracking-[0.2em] font-bold text-muted-gray hover:text-accent-mustard transition-colors duration-300 uppercase"
                        >
                            Linkedin
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
