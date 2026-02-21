import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const Blog = () => {
    const posts = [
        { date: 'Oct 24, 2025', title: 'The Future of AI in Product Design Architecture' },
        { date: 'Sep 12, 2025', title: 'Why Minimalist Design is Scaling Better Globally' },
        { date: 'Aug 05, 2025', title: 'Lessons from Building Enterprise React Systems' },
        { date: 'Jul 28, 2025', title: 'The Intersection of Branding and Code Integrity' },
    ];

    return (
        <section id="blog" className="section-padding bg-slate-900/30">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left: Title + Subtitle */}
                    <div className="lg:w-1/3">
                        <span className="label text-accent-mustard mb-6 block">Journal</span>
                        <h2 className="text-5xl font-black uppercase tracking-tight italic mb-8">
                            Fresh <br /> <span className="text-white/20">Insights.</span>
                        </h2>
                        <p className="text-lg text-muted-gray">
                            Thoughts on design systems, frontend engineering, and the
                            evolution of digital craftsmanship.
                        </p>
                    </div>

                    {/* Right: List of Posts */}
                    <div className="lg:w-2/3 border-t border-white/10">
                        {posts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/5 cursor-pointer hover:bg-white/[0.02] transition-colors px-6 -mx-6 rounded-xl"
                            >
                                <span className="label text-muted-gray mb-2 md:mb-0 group-hover:text-accent-mustard transition-colors">
                                    {post.date}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:italic transition-all duration-300 md:ml-20 flex-grow">
                                    {post.title}
                                </h3>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent-mustard group-hover:text-background-navy transition-all duration-300 mt-4 md:mt-0">
                                    <ArrowRight size={20} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom: Testimonial Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-32 p-12 bg-accent-mustard rounded-[40px] text-background-navy flex flex-col md:flex-row gap-12 items-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Quote size={200} weight="fill" />
                    </div>

                    <div className="relative">
                        <div className="w-24 h-24 bg-background-navy rounded-full overflow-hidden shadow-2xl">
                            {/* Avatar placeholder */}
                            <div className="w-full h-full bg-slate-700 flex items-center justify-center text-accent-mustard font-bold text-2xl">
                                SL
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow">
                        <p className="text-2xl md:text-3xl font-bold italic leading-tight mb-8">
                            "Working with Jegath was a game-changer for our platform.
                            The speed of execution and the quality of architectural decisions
                            exceeded our expectations at every phase."
                        </p>
                        <div>
                            <h4 className="text-xl font-black uppercase tracking-tight">Sarah Linden</h4>
                            <p className="label font-bold text-[10px] opacity-60">Director of Engineering @ StreamLine</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
