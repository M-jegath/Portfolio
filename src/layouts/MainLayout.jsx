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
                        <span className="font-heading font-bold text-lg tracking-tight">JEGATH</span>
                    </div>
                    <p className="label">&copy; 2026 JEGATH. Built with React & Tailwind.</p>
                    <div className="flex gap-6">
                        <a
                            href="https://leetcode.com/u/JEGATH-M/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-gray hover:text-accent-mustard transition-all duration-300 hover:scale-110"
                            title="LeetCode"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.953-.54-.54-1.414-.54-1.953 0l-2.397 2.392c-1.154 1.154-3.036 1.171-4.21.039l-4.276-4.193a3.304 3.304 0 0 1-1.04-2.046c-.08-.636-.062-1.3.106-1.931.116-.44.304-.85.556-1.216l3.854-4.127l4.078-4.389c.233-.247.56-.396.935-.396.671 0 1.203.542 1.203 1.212V8.12a.602.602 0 0 0 .601.602h6.983c.33 0 .6.268.6.6v8.624c0 .33-.268.6-.6.6h-4.016c-.33 0-.6.268-.6.6v.181a.602.602 0 0 0 .602.602h4.016c1.105 0 2-.895 2-2V9.322c0-1.105-.895-2-2-2h-6.983V4.41c0-1.105-.895-2-2-2h-.074a.766.766 0 0 1-.226-.007c-.44 0-.832.227-1.036.564L13.483 0z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jegath28"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-gray hover:text-accent-mustard transition-all duration-300 hover:scale-110"
                            title="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
