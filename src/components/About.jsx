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
                        <h2 className="text-4xl md:text-5xl mb-8 leading-tight uppercase font-black italic">
                            AI & <br />
                            <span className="text-muted-gray hover:text-white transition-colors">Data Science Student</span>
                        </h2>
                        <div className="space-y-6 text-xl">
                            <p>
                                Motivated Artificial Intelligence and Data Science student with a strong interest in problem solving and frontend development, currently studying at Kongu Engineering College.
                            </p>
                            <p className="text-muted-gray">
                                Skilled in building interactive and user-friendly web interfaces, applying logical thinking to real-world challenges, and creating efficient, scalable applications.
                            </p>
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
                        <div className="relative p-6 md:p-10 bg-slate-900/40 rounded-3xl border border-white/5">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                                <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-accent-mustard transition-colors">3+</h3>
                                <span className="label text-muted-gray tracking-widest sm:tracking-[0.3em]">Major Projects</span>
                                <div className="h-1 w-0 bg-accent-mustard mt-4 group-hover:w-full transition-all duration-500" />
                            </div>
                            <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                                <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-accent-mustard transition-colors">8.4</h3>
                                <span className="label text-muted-gray tracking-widest sm:tracking-[0.3em]">Current CGPA</span>
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
