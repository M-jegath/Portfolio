import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-40 md:pt-48 pb-20 flex flex-col relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent-mustard/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />

            <div className="container-custom flex-grow flex flex-col justify-center">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="label text-accent-mustard mb-6 block drop-shadow-sm px-1 border-l-2 border-accent-mustard">
                            AI & DS Enthusiast
                        </span>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tight text-white uppercase italic font-black">
                            <span className="text-white hover:text-white/80 transition-colors duration-500 cursor-default">Jegath</span>
                        </h1>
                        <p className="text-base md:text-xl text-muted-gray mb-12 max-w-md leading-relaxed">
                            I am an Artificial Intelligence and Data Science student with a strong interest in problem solving and frontend development.
                            Passionate about writing clean code and scalable applications.
                        </p>

                        <motion.a
                            href="/Jegath_Resume.pdf"
                            download="Jegath_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-accent-mustard text-background-navy font-bold rounded-2xl hover:bg-white transition-all duration-300 shadow-xl shadow-accent-mustard/20 w-fit"
                        >
                            Download Resume
                            <Download className="group-hover:translate-y-1 transition-transform" size={20} />
                        </motion.a>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Background Panel Shapes */}
                        <div className="absolute -top-10 -right-10 w-full h-full border border-white/5 rounded-3xl -z-10" />
                        <div className="absolute top-10 right-10 w-full h-full bg-slate-800/20 backdrop-blur-sm rounded-3xl -z-10" />

                        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-3xl shadow-black group">
                            <img
                                src="hero_portrait.jpg"
                                alt="Jegath Portrait"
                                className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-navy via-transparent to-transparent opacity-60" />

                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="text-white font-medium text-sm italic">"Enhancing UI to deliver impactful software solutions."</p>
                            </div>
                        </div>

                        {/* Accent Floating Shape */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-mustard rounded-2xl -z-10 shadow-2xl shadow-accent-mustard/40 flex items-center justify-center rotate-12"
                        >
                            <div className="w-16 h-16 border-2 border-background-navy/20 rounded-xl" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
