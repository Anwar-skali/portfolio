import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../components/ScrollReveal';
import {
  Code2,
  Globe,
  Database,
  Cpu,
  Smartphone,
  Settings,
  Coffee,
  Terminal,
  Layers,
  Container
} from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: 'Web & Frontend',
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      skills: ['React', 'Vue.js', 'Angular', 'Tailwind', 'JavaScript', 'Firebase']
    },
    {
      title: 'Backend & Java',
      icon: <Coffee className="w-8 h-8 text-orange-600" />,
      skills: ['Java Avancé', 'Spring Boot', 'Laravel', 'Jakarta EE', 'Architecture MVC/DAO']
    },
    {
      title: 'Python & Data Eng',
      icon: <Terminal className="w-8 h-8 text-emerald-600" />,
      skills: ['Python', 'FastAPI', 'Pipeline ETL', 'Unix / Linux', 'Big Data']
    },
    {
      title: 'Mobile & API',
      icon: <Smartphone className="w-8 h-8 text-rose-600" />,
      skills: ['React Native', 'Expo', 'API REST', 'Microservices', 'Postman']
    },
    {
      title: 'Bases de Données',
      icon: <Database className="w-8 h-8 text-purple-600" />,
      skills: ['Oracle', 'MySQL / SQL Server', 'MongoDB', 'Redis', 'Cassandra']
    },
    {
      title: 'Outils & DevOps',
      icon: <Settings className="w-8 h-8 text-slate-600" />,
      skills: ['Git / GitHub', 'Maven', 'Docker', 'HBase', 'Déploiement']
    }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 pt-20 pb-16 transition-colors duration-500">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
          >
            {t('skills.title')} <span className="text-gradient">{t('skills.subtitle')}</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card dark:bg-slate-800/50 rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-blue-500/30 group h-full shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-semibold border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Skills;
