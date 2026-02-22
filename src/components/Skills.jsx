import React from 'react';
import { motion } from 'framer-motion';
import {
    Figma,
    Code2,
    Layers,
    Zap,
    Globe,
    Cpu,
    Brain,
    MessageSquare,
    Users,
    Sparkles
} from 'lucide-react';

const Skills = () => {
    const skills = [
        { title: 'Programming', icon: <Code2 size={32} />, desc: 'Python, Java, C.' },
        { title: 'Frontend', icon: <Figma size={32} />, desc: 'HTML, CSS, JavaScript, Bootstrap.' },
        { title: 'Machine Learning', icon: <Cpu size={32} />, desc: 'Data preprocessing, model evaluation.' },
        { title: 'Database', icon: <Layers size={32} />, desc: 'Mongo DB and MY SQL' },
        { title: 'Tools & Platforms', icon: <Globe size={32} />, desc: 'Git, GitHub, VS Code.' },
        { title: 'AI TOOLS', icon: <Sparkles size={32} />, desc: 'Cursor ai, claude, Antigravity' },
    ];

    const softSkills = [
        { title: 'Problem-solving', icon: <Brain size={32} />, desc: 'Applying logical thinking to real-world challenges.' },
        { title: 'Communication', icon: <MessageSquare size={32} />, desc: 'Conveying ideas clearly and collaborating effectively.' },
        { title: 'Team Collaboration', icon: <Users size={32} />, desc: 'Working efficiently in group settings to reach goals.' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="section-padding bg-slate-900/30">
            <div className="container-custom">
                {/* Technical Mastery */}
                <div className="mb-20 text-center">
                    <span className="label text-accent-mustard mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl uppercase italic font-black tracking-tight">Technical Skills</h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -15,
                                backgroundColor: 'rgba(251, 191, 36, 0.05)',
                                borderColor: 'rgba(251, 191, 36, 0.2)'
                            }}
                            className="p-6 md:p-10 flex flex-col justify-center items-center text-center bg-slate-900/50 border border-white/5 rounded-[40px] group transition-all duration-500 cursor-default"
                        >
                            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-accent-mustard group-hover:bg-accent-mustard group-hover:text-background-navy transition-all duration-500 mb-8 rotate-3 group-hover:rotate-12">
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{skill.title}</h3>
                            <p className="text-sm text-muted-gray group-hover:text-white transition-colors">{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Soft Skills */}
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl uppercase italic font-black tracking-tight">Soft Skills</h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -15,
                                backgroundColor: 'rgba(251, 191, 36, 0.05)',
                                borderColor: 'rgba(251, 191, 36, 0.2)'
                            }}
                            className="p-10 flex flex-col justify-center items-center text-center bg-slate-900/50 border border-white/5 rounded-[40px] group transition-all duration-500 cursor-default"
                        >
                            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-accent-mustard group-hover:bg-accent-mustard group-hover:text-background-navy transition-all duration-500 mb-8 rotate-3 group-hover:rotate-12">
                                {skill.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{skill.title}</h3>
                            <p className="text-sm text-muted-gray group-hover:text-white transition-colors">{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
