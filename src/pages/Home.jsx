import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen relative overflow-hidden bg-white dark:bg-slate-950 pt-24 pb-16 flex items-center transition-colors duration-500">
      {/* Background blobs for depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-70" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-full mb-8"
              >
                <h2 className="text-sm md:text-base text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wider">
                  {t('home.subtitle')}
                </h2>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-none"
              >
                <span className="text-slate-900 dark:text-white">Anwar</span> <br />
                <span className="text-gradient">Skali.</span>
                <span className="block text-xl md:text-2xl mt-6 font-black text-slate-300 dark:text-slate-700 tracking-[0.4em] uppercase select-none">A.D.S Signature</span>
              </motion.h1>



              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-2xl mb-12"
              >
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {t('home.description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <a
                  href="https://github.com/Anwar-skali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <Github className="w-5 h-5" />
                  {t('common.github')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anwar-skali-1a2b3c/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <Linkedin className="w-5 h-5" />
                  {t('common.linkedin')}
                </a>
                <a
                  href="/CV_Anwar_Skali.pdf"
                  download
                  className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <Download className="w-5 h-5" />
                  {t('common.downloadCv')}
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl relative z-10 transition-all duration-500 hover:scale-105">
              <img
                src="/images/logo.png"
                alt="Anwar Skali"
                className="w-full h-full object-cover object-[center_15%]"
              />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
            </div>


            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl -rotate-12 z-0 opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600 rounded-full z-0 opacity-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;


