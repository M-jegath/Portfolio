import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-mustard/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

                    {/* Left Side: CTA */}
                    <div className="lg:w-1/2">
                        <span className="label text-accent-mustard mb-6 block">Ready to start?</span>
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-12">
                            Got a <br /> project? <br />
                            <span className="text-white/20 hover:text-white transition-colors cursor-pointer">Let's talk.</span>
                        </h2>

                        <div className="grid gap-8 mt-20">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-accent-mustard group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="label text-[8px] text-muted-gray mb-1">Email me at</p>
                                    <p className="text-xl font-bold">mjegath26@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-accent-mustard group-hover:scale-110 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="label text-[8px] text-muted-gray mb-1">Based in</p>
                                    <p className="text-xl font-bold">Erode, Tamil Nadu</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-accent-mustard group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="label text-[8px] text-muted-gray mb-1">Call me at</p>
                                    <p className="text-xl font-bold">+91 63833 08016</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 bg-slate-900/40 p-10 md:p-16 rounded-[48px] border border-white/5 backdrop-blur-md shadow-2xl"
                    >
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="label text-[10px]">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-mustard outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="label text-[10px]">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-mustard outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="label text-[10px]">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="How can I help you?"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-accent-mustard outline-none transition-colors resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 0 30px rgba(251, 191, 36, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent-mustard text-background-navy font-black uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center gap-4 group transition-all"
                            >
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
