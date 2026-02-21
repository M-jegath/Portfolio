import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-start">

                    {/* LEFT: Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="label text-accent-mustard mb-6 block">About Me</span>
                        <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                            AI problem solver, <br />
                            <span className="text-muted-gray">Precision frontend developer.</span>
                        </h2>
                        <div className="space-y-6 text-xl">
                            <p>
                                I am an AI & Data Science student at Kongu Engineering College.
                                My passion lies in applying logical thinking and structured approaches
                                to real-world challenges through both data and interfaces.
                            </p>
                            <p className="text-muted-gray">
                                Whether it's training machine learning models for detecting scams,
                                or building scalable web applications with clean UI, my focus is always
                                on delivering impactful and user-friendly software solutions.
                            </p>
                        </div>

                        <div className="mt-12 pt-12 border-t border-white/10 flex gap-12">
                            <div>
                                <span className="label text-accent-mustard block mb-2">Expertise</span>
                                <p className="text-sm">Machine Learning</p>
                            </div>
                            <div>
                                <span className="label text-accent-mustard block mb-2">Focus</span>
                                <p className="text-sm">Web Interfaces</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Quote + Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-16"
                    >
                        {/* Quote Block */}
                        <div className="relative p-10 bg-slate-900/40 rounded-3xl border border-white/5">
                            <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
                            <div className="mb-6">
                                <h4 className="font-bold text-lg text-accent-mustard">Kongu Engineering College (Erode)</h4>
                                <p className="text-white mt-1">B.Tech Artificial Intelligence and Data Science</p>
                                <div className="flex justify-between mt-2 label text-muted-gray">
                                    <span>2024 - Current</span>
                                    <span>CGPA: 8.43</span>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-6">
                                <h4 className="font-bold text-lg text-accent-mustard">Balabhavan Global School (Tirupur)</h4>
                                <p className="text-white mt-1">HSC</p>
                                <div className="flex justify-between mt-2 label text-muted-gray">
                                    <span>2023 - 2024</span>
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>

                        {/* Statistics Row */}
                        <div className="grid grid-cols-2 gap-10">
                            <div className="group">
                                <h3 className="text-6xl font-bold text-white mb-2 group-hover:text-accent-mustard transition-colors">3+</h3>
                                <span className="label text-muted-gray tracking-[0.3em]">Major <br /> Projects</span>
                                <div className="h-1 w-0 bg-accent-mustard mt-4 group-hover:w-full transition-all duration-500" />
                            </div>
                            <div className="group">
                                <h3 className="text-6xl font-bold text-white mb-2 group-hover:text-accent-mustard transition-colors">8.4</h3>
                                <span className="label text-muted-gray tracking-[0.3em]">Current <br /> CGPA</span>
                                <div className="h-1 w-0 bg-accent-mustard mt-4 group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
