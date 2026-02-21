import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Works = () => {
    const projects = [
        { title: 'URL Scam Detector', category: 'Machine Learning', accent: '#3b82f6', span: 'col-span-2 row-span-2' },
        { title: 'Plagiarism Checker', category: 'Python Algorithms', accent: '#10b981', span: 'col-span-1 row-span-2' },
        { title: 'Tag Validator', category: 'Tool Development', accent: '#fbbf24', span: 'col-span-1 row-span-2' },
    ];

    return (
        <section id="works" className="section-padding">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

                    {/* Left Side: Title + CTA */}
                    <div className="lg:w-1/3 flex flex-col justify-between pt-10">
                        <div>
                            <span className="label text-accent-mustard mb-6 block">Our Work</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight italic mb-8">
                                Selected <br /> <span className="text-white/20">Artifacts.</span>
                            </h2>
                            <p className="text-xl text-muted-gray mb-12 max-w-sm">
                                A selection of projects involving machine learning models,
                                logical algorithms, and development tools.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-4 text-accent-mustard font-bold uppercase tracking-widest text-sm border-b-2 border-accent-mustard pb-2 w-fit transition-all"
                        >
                            Explore More
                            <ArrowUpRight size={20} />
                        </motion.button>
                    </div>

                    {/* Right Side: Grid */}
                    <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-[300px]">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`${project.span} relative group overflow-hidden rounded-[32px] border border-white/5 cursor-pointer`}
                            >
                                {/* Image Placeholder with Gradient */}
                                <div
                                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.accent}20 0%, #0f172a 100%)`,
                                    }}
                                />

                                {/* Visual Accent */}
                                <div className="absolute top-10 right-10 w-24 h-24 blur-3xl opacity-20 group-hover:opacity-60 transition-opacity" style={{ backgroundColor: project.accent }} />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-background-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex flex-col justify-end p-10">
                                    <span className="label text-accent-mustard mb-2 block scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        {project.category}
                                    </span>
                                    <h3 className="text-4xl font-bold uppercase italic tracking-tighter text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Constant Label (Visible when overlay is off) */}
                                <div className="absolute top-8 left-8 group-hover:opacity-0 transition-opacity">
                                    <div className="w-12 h-1 bg-white/10 mb-2 rounded-full" />
                                    <p className="label text-[8px]">{project.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Works;
