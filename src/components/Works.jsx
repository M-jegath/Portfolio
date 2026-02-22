import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Works = () => {
    const projects = [
        {
            title: 'URL Scam Detector',
            description: 'ML system to detect and flag malicious URLs in real-time.',
            category: 'Machine Learning',
            accent: '#3b82f6'
        },
        {
            title: 'Plagiarism Checker',
            description: 'Python algorithm to detect content similarity and plagiarism.',
            category: 'Algorithms',
            accent: '#10b981'
        },
        {
            title: 'Tag Validator',
            description: 'Development tool for validating and verifying metadata tags.',
            category: 'Dev Tool',
            accent: '#fbbf24'
        },
    ];

    return (
        <section id="works" className="section-padding">
            <div className="container-custom">
                <div className="mb-16">
                    <span className="label text-accent-mustard mb-4 block">Our Work</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight italic">
                        Projects
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-[32px] border border-white/5 cursor-pointer bg-background-navy/40 p-10 h-[300px] flex flex-col justify-between"
                        >
                            {/* Visual Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: project.accent }} />

                            <div>
                                <span className="label text-accent-mustard mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold uppercase italic tracking-tighter text-white mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-muted-gray leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="w-12 h-1 bg-white/10 rounded-full group-hover:bg-accent-mustard group-hover:w-20 transition-all duration-500" />
                                <ArrowUpRight className="text-white/20 group-hover:text-accent-mustard transition-colors" size={24} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;
