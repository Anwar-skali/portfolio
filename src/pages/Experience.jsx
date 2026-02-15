import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
        {
            company: "Chaabi Cash",
            role: t('experience.chaabiRole'),
            period: "Juil. 2025 – Sept. 2025",
            type: t('experience.internship'),
            description: [
                t('experience.chaabiTask1'),
                t('experience.chaabiTask2'),
                t('experience.chaabiTask3'),
                t('experience.chaabiTask4')
            ],
            tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            company: "M2M Services",
            role: t('experience.m2mRole'),
            period: "Stage Technique",
            type: t('experience.internship'),
            description: [
                t('experience.m2mTask1'),
                t('experience.m2mTask2'),
                t('experience.m2mTask3'),
                t('experience.m2mTask4'),
                t('experience.m2mTask5')
            ],
            tech: ["Java", "Oracle SQL", "Servlet/JSP", "Enterprise Apps"],
            icon: <Briefcase className="w-6 h-6" />
        },
        {
            company: "Freelance",
            role: t('experience.freelanceRole'),
            period: "Janv. 2024 – Mars 2024",
            type: t('experience.remote'),
            description: [
                t('experience.freelanceTask1'),
                t('experience.freelanceTask2'),
                t('experience.freelanceTask3'),
                t('experience.frenchLevel')
            ],
            tech: ["React", "Node.js", "SQL", "French C1"],
            icon: <GraduationCap className="w-6 h-6" />
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase"
                    >
                        {t('experience.title')} <span className="text-gradient">{t('experience.subtitle')}</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: false }}
                        className="h-1.5 bg-blue-600 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ScrollReveal key={index} delay={index * 0.2}>
                            <div className="relative pl-8 md:pl-0 mb-12 group">
                                {/* Timeline Line */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-800 group-last:h-0" />

                                <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Content Side */}
                                    <div className="w-full md:w-1/2">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="glass-card dark:bg-slate-800/80 p-8 rounded-[2.5rem] shadow-xl border border-transparent hover:border-blue-500/30 transition-all"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/20">
                                                    {exp.icon}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">{exp.role}</h3>
                                                    <p className="text-blue-600 dark:text-blue-400 font-bold text-sm">{exp.company}</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-4 mb-6 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                                <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-lg">
                                                    <Calendar className="w-3.5 h-3.5" /> {exp.period}
                                                </span>
                                                <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-lg">
                                                    <MapPin className="w-3.5 h-3.5" /> {exp.type}
                                                </span>
                                            </div>

                                            <ul className="space-y-3 mb-8">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.tech.map((t, i) => (
                                                    <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-lg text-[10px] font-black uppercase tracking-wider border border-blue-100 dark:border-blue-800">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Icon Node (Desktop) */}
                                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-900 rounded-full border-4 border-blue-600 items-center justify-center z-10 shadow-xl group-hover:scale-110 transition-transform">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:bg-indigo-600" />
                                    </div>

                                    {/* Empty Side (Desktop Spacer) */}
                                    <div className="hidden md:block w-1/2" />
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
