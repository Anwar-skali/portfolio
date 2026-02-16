import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, X, ChevronRight, Layout } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { clsx } from 'clsx';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "JobTracker",
      description: "A collaborative real-time platform for candidates to track applications and interviews, and for recruiters to manage job offers and candidate pipelines seamlessly.",
      longDescription: "JobTracker is a full-stack solution designed to streamline the recruitment process. It leverages Firebase's real-time capabilities to ensure that both candidates and recruiters stay synchronized. Candidates can organize their search and prep for interviews, while recruiters can manage multiple pipelines with ease.",
      technologies: ["Firebase", "React Native", "Real-time DB", "Team Project"],
      imgSrc: "/images/project1.png/1768584764824.jpg",
      gallery: [
        "/images/project1.png/1768584764824.jpg",
        "/images/project1.png/1768584764895.jpg",
        "/images/project1.png/1768584764948.jpg",
        "/images/project1.png/1768584764993.jpg",
        "/images/project1.png/1768584765049.jpg"
      ],
      githubLink: "https://github.com/Anwar-skali/app-job-tracker",
      isMobile: true
    },
    {
      title: "Gestion d'Entreprise (ERP)",
      description: "A high-performance web application built with ASP.NET Core and Neo4j graph database, featuring advanced user management and graph-based stock/sales optimization.",
      longDescription: "This ERP system focuses on high complexity relational data. By choosing Neo4j over traditional SQL, the system can perform complex queries on product relationships, sales histories, and client networks at significant speeds. Built with a clean Service/Repository architecture for maximum maintainability.",
      technologies: ["ASP.NET Core", "Neo4j", "C#", "Repository Pattern"],
      imgSrc: "/images/project2.png/1768596481468.jpg",
      gallery: [
        "/images/project2.png/1768596481326.jpg",
        "/images/project2.png/1768596481343.jpg",
        "/images/project2.png/1768596481468.jpg",
        "/images/project2.png/1768596481526.jpg"
      ],
      githubLink: "https://github.com/Anwar-skali/gestion-entreprise-erp"
    },
    {
      title: "ERP Light",
      description: "A comprehensive JavaFX desktop application for enterprise management, featuring a multi-layered architecture (DAO, Service, UI), role-based security, and full inventory/audit tracking.",
      longDescription: "ERP Light is a robust desktop application built to demonstrate full software lifecycle development. It includes complex features such as inventory threshold alerts, multi-role authentication, and an audit logging system to track every user action, all within a responsive JavaFX interface. [Note: Video documentation of the desktop implementation is available upon request].",
      technologies: ["Java 17", "JavaFX", "MySQL", "MVC Architecture", "Desktop App"],
      imgSrc: "/images/project3.png/1766154394545.jpg",
      gallery: [
        "/images/project3.png/1766154394246.jpg",
        "/images/project3.png/1766154394395.jpg",
        "/images/project3.png/1766154394545.jpg"
      ],
      githubLink: null
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
            {t('projects.title')} <span className="text-gradient">{t('projects.subtitle')}</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)} className="cursor-pointer">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card dark:bg-slate-800/30 rounded-[2.5rem] border-2 border-dashed border-slate-200 dark:border-slate-800 p-8 md:p-12 text-center max-w-2xl w-full group hover:border-blue-500/50 transition-all duration-500 mx-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500">
              <Layout className="w-8 h-8 text-slate-400 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-4 uppercase tracking-tighter">More Projects in Progress</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold leading-relaxed mb-4 uppercase tracking-widest">
              Currently working on advanced <span className="text-blue-600 dark:text-blue-400">ETL Pipelines</span> & <span className="text-indigo-600 dark:text-indigo-400">SaaS Applications</span>
            </p>
            <p className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-widest">
              Not pushed to GitHub yet • Stay tuned
            </p>
          </motion.div>
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white dark:bg-slate-900 w-full max-w-5xl h-[85vh] md:h-auto md:max-h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200 dark:border-slate-800"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-[70] p-2.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full text-slate-900 dark:text-white hover:bg-red-500 hover:text-white transition-all shadow-xl border border-slate-200 dark:border-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left side: Images gallery */}
                <div className={clsx(
                  "bg-slate-50 dark:bg-slate-950 flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800",
                  selectedProject.isMobile ? "w-full md:w-[45%]" : "w-full md:w-3/5"
                )}>
                  <div className={clsx(
                    "flex custom-scrollbar gap-8 p-8 md:p-12 pt-20 md:pt-24 snap-x snap-mandatory overflow-x-auto",
                    selectedProject.isMobile ? "md:h-[75vh] items-center" : "md:flex-col h-72 md:h-[75vh]"
                  )}>
                    {selectedProject.gallery?.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={clsx(
                          "snap-center rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 flex-shrink-0 bg-slate-100 dark:bg-slate-900",
                          selectedProject.isMobile ? "h-[55vh] md:h-[60vh] aspect-[9/19] mx-auto" : "w-full aspect-video"
                        )}
                      >
                        <img
                          src={img}
                          alt={selectedProject.title}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right side: Info */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
                  <div className="mb-8">
                    <span className="text-blue-600 dark:text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Project Case Study</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-6 leading-tight tracking-tighter uppercase">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-[10px] font-black uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    <h4 className="text-slate-800 dark:text-white font-black text-xs uppercase tracking-widest mb-4">The Challenge</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mt-8">
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-xl hover:-translate-y-1"
                      >
                        <Github className="w-5 h-5" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

