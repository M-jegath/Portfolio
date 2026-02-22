import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setStatus({ submitting: true, success: false, error: null });

        try {
            const response = await fetch('https://formspree.io/f/mlgwpagw', { // Updated with user's ID
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ submitting: false, success: true, error: null });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (err) {
            setStatus({ submitting: false, success: false, error: 'Something went wrong. Please try again later.' });
        }
    };

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
                            Let's <br />
                            <span className="text-white/20 hover:text-white transition-colors cursor-pointer">talk.</span>
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
                                    <p className="text-xl font-bold">Tirupur, Tamil Nadu</p>
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
                        className="lg:w-1/2 bg-slate-900/40 p-10 md:p-16 rounded-[48px] border border-white/5 backdrop-blur-md shadow-2xl relative"
                    >
                        {status.success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10"
                            >
                                <div className="w-20 h-20 bg-accent-mustard rounded-full flex items-center justify-center text-background-navy">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-3xl font-bold uppercase italic tracking-tighter text-white">Message Sent!</h3>
                                <p className="text-muted-gray max-w-xs">
                                    Thanks for reaching out. I'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setStatus({ ...status, success: false })}
                                    className="text-accent-mustard font-bold uppercase tracking-widest text-sm border-b-2 border-accent-mustard pb-1 mt-4"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <label className="label text-[10px]">Name</label>
                                            {errors.name && <span className="text-[10px] text-red-400 flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</span>}
                                        </div>
                                        <input
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className={`w-full bg-white/5 border ${errors.name ? 'border-red-400/50' : 'border-white/10'} rounded-2xl px-6 py-4 focus:border-accent-mustard outline-none transition-colors`}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <label className="label text-[10px]">Email</label>
                                            {errors.email && <span className="text-[10px] text-red-400 flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</span>}
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-400/50' : 'border-white/10'} rounded-2xl px-6 py-4 focus:border-accent-mustard outline-none transition-colors`}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-end">
                                        <label className="label text-[10px]">Message</label>
                                        {errors.message && <span className="text-[10px] text-red-400 flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</span>}
                                    </div>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        className={`w-full bg-white/5 border ${errors.message ? 'border-red-400/50' : 'border-white/10'} rounded-2xl px-6 py-4 focus:border-accent-mustard outline-none transition-colors resize-none`}
                                    />
                                </div>

                                {status.error && (
                                    <p className="text-red-400 text-sm flex items-center gap-2">
                                        <AlertCircle size={16} /> {status.error}
                                    </p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={status.submitting}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 0 30px rgba(251, 191, 36, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full bg-accent-mustard text-background-navy font-black uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center gap-4 group transition-all ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {status.submitting ? 'Sending...' : 'Send Message'}
                                    {!status.submitting && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
