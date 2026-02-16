import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { clsx } from 'clsx';

const ProjectCard = ({ title, description, technologies, githubLink, demoLink, imgSrc, gifSrc, onClick, isMobile }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="glass-card dark:bg-slate-800/50 rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 group"
    >
      {/* Image or GIF */}
      {(imgSrc || gifSrc) && (
        <div className={clsx(
          "relative w-full overflow-hidden bg-slate-100 dark:bg-slate-800",
          isMobile ? "h-80" : "h-60"
        )}>
          <img
            src={gifSrc || imgSrc}
            alt={title}
            className={clsx(
              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
              isMobile ? "object-top" : "object-center"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="flex gap-3">
              {githubLink && (
                <a href={githubLink} target="_blank" className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-bold uppercase tracking-wider"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
