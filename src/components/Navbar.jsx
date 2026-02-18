import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Languages, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showHi, setShowHi] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showLogoMsg, setShowLogoMsg] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [logoMsg, setLogoMsg] = useState('');
  const [showFestival, setShowFestival] = useState(false);
  const [isBroken, setIsBroken] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 20);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);

    // Check local storage or system theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showFestival || isBroken) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showFestival, isBroken]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);

    const messages = [
      'TRY CLICKING ICON',
      'BETTER?',
      'EXTRA MONEY INC...',
      'STOP CLICKING',
      'PLEASE STOP'
    ];
    const recommendations = ['SCROLL DOWN', 'CHECK PROJECTS', 'HIRE ME!', 'VIBE CHECK', 'LOOK AT LOGO', 'NICE THEME?'];

    let msg = '';
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount <= 4) {
      msg = messages[newCount - 1];
    } else {
      msg = recommendations[Math.floor(Math.random() * recommendations.length)];
    }

    setCurrentMessage(msg);
    setShowHi(true);
    setTimeout(() => {
      setShowHi(false);
    }, 1200);
  };

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    const messages = [
      'NE PAS TOUCHER... 🤫',
      'STOP IT!',
      'MY NAME IS ANWAR',
      '22 YO',
      'WHAT YOU WAITING',
      'HAVE A NICE DAY',
      'WISH YOU THE BEST',
      'KEEP GOING...',
      'ALMOST THERE...',
      'STAY FOCUSED!',
      'GET READY...',
      'BOOM! 🎊',
      'YOU AGAIN?',
      'STOP IT...',
      'YOU ALMOST BROKE IT',
      'PLEASE...',
      'I KNOW YOU CURIOUS',
      'WARNING...',
      'SERIOUSLY?',
      'LAST CHANCE...',
      'DONT DO IT...',
      'YOU NEED TO PARTICIPATE IN A CLICKING TOURNAMENT!',
      'SYSTEM ERROR... 💀'
    ];

    let msg = '';
    if (newCount <= messages.length) {
      msg = messages[newCount - 1];
    } else {
      msg = 'SYSTEM ERROR...';
    }

    if (newCount === 10) {
      setShowFestival(true);
      setTimeout(() => setShowFestival(false), 4000);
    }

    if (newCount === 20) {
      setIsBroken(true);
      setTimeout(() => setIsBroken(false), 6000);
    }

    setLogoMsg(msg);
    setShowLogoMsg(true);
    setTimeout(() => setShowLogoMsg(false), 1500);
    scrollToSection('home');
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { section: 'home', label: t('nav.home') },
    { section: 'skills', label: t('nav.skills') },
    { section: 'experience', label: t('nav.experience') },
    { section: 'projects', label: t('nav.projects') },
    { section: 'contact', label: t('nav.contact') }
  ];

  return (
    <nav className={clsx(
      'fixed w-full top-0 z-50 transition-all duration-300',
      scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="relative">
            <motion.button
              onClick={handleLogoClick}
              animate={showLogoMsg ? { scale: 1.15 } : { scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 600, damping: 15 }}
              className="flex items-center gap-4 group cursor-pointer relative z-50 origin-left"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-800 group-hover:border-blue-500 transition-all duration-500 shadow-md group-hover:shadow-blue-500/20">
                  <img src="/images/profile.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-2xl font-black text-gradient leading-none">A.D.S</span>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mt-1 group-hover:text-blue-500 transition-colors">Anwar Dahbi Skali</span>
              </div>
            </motion.button>

            <AnimatePresence>
              {showLogoMsg && (
                <motion.div
                  initial={{ opacity: 0, y: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: 15, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="absolute top-full left-0 z-[60] bg-blue-600 text-white px-4 py-2 rounded-2xl text-[10px] font-black shadow-xl whitespace-nowrap pointer-events-none"
                >
                  {logoMsg}
                  <div className="absolute -top-1 left-4 w-2 h-2 bg-blue-600 rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 mr-4 border-r border-slate-200 dark:border-slate-800 pr-8">
              {navLinks.map((link) => (
                <button
                  key={link.section}
                  onClick={() => scrollToSection(link.section)}
                  className={clsx(
                    'text-sm font-semibold transition-all relative group text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2"
                title="Switch Language"
              >
                <Languages className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{i18n.language}</span>
              </button>

              <button
                onClick={handleThemeToggle}
                className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700 hover:scale-110 active:scale-95 group min-w-[44px] flex items-center justify-center overflow-hidden"
                title="Toggle Theme"
              >
                <AnimatePresence mode="wait">
                  {showHi ? (
                    <motion.span
                      key="hi"
                      initial={{ opacity: 0, scale: 0.2, rotate: -15 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.2, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      className="text-[9px] font-black whitespace-nowrap text-blue-600 dark:text-blue-400 uppercase"
                    >
                      {currentMessage}
                    </motion.span>
                  ) : (
                    <motion.div
                      key="icon"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <Monitor className={clsx(
                        "w-5 h-5",
                        isDark ? "text-blue-400" : "text-slate-600"
                      )} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-blue-500/20"
              >
                {t('common.hireMe')}
              </button>
            </div>
          </div>


          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLanguage} className="p-2 text-slate-600 dark:text-slate-400">
              <Languages className="w-5 h-5" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-900 dark:text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 mt-4 px-2"
            >
              <div className="flex flex-col space-y-4 py-8">
                {navLinks.map((link) => (
                  <button
                    key={link.section}
                    onClick={() => scrollToSection(link.section)}
                    className="text-left text-2xl font-black text-slate-800 dark:text-white hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-bold text-slate-600 dark:text-slate-400">
                      {isDark ? 'Mode Sombre' : 'Mode Clair'}
                    </span>
                    <button
                      onClick={handleThemeToggle}
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 min-w-[44px] flex items-center justify-center overflow-hidden"
                    >
                      <AnimatePresence mode="wait">
                        {showHi ? (
                          <motion.span
                            key="hi-mobile"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="text-[9px] font-black whitespace-nowrap text-blue-600 dark:text-blue-400 uppercase"
                          >
                            {currentMessage}
                          </motion.span>
                        ) : (
                          <motion.div
                            key="icon-mobile"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                          >
                            <Monitor className={clsx(
                              "w-5 h-5",
                              isDark ? "text-blue-400" : "text-slate-600"
                            )} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Festival Animation Overlay */}
        <AnimatePresence>
          {showFestival && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden bg-blue-600/10 backdrop-blur-[2px]"
            >
              <div className="relative w-full h-full">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      top: "-10%",
                      left: `${Math.random() * 100}%`,
                      scale: Math.random() * 1 + 0.5,
                      rotate: 0
                    }}
                    animate={{
                      top: "110%",
                      left: `${Math.random() * 100}%`,
                      rotate: 360 * Math.random()
                    }}
                    transition={{
                      duration: Math.random() * 2 + 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: Math.random() * 5
                    }}
                    className={clsx(
                      "absolute w-4 h-4 rounded-sm",
                      ['bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400', 'bg-purple-400', 'bg-pink-400'][Math.floor(Math.random() * 6)]
                    )}
                  />
                ))}

                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <div className="bg-white/90 dark:bg-slate-900/90 p-10 rounded-[3rem] shadow-2xl border-4 border-blue-500 text-center scale-110">
                    <motion.h2
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="text-5xl md:text-7xl font-black text-gradient mb-4"
                    >
                      🎊 BINGO! 🎊
                    </motion.h2>
                    <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                      Congratulations! You've clicked 10 times!
                    </p>
                    <p className="text-slate-500 mt-2 font-semibold">You're officially a fan of A.D.S</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Broken Project Glitch Overlay */}
        <AnimatePresence>
          {isBroken && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1, 0.9, 1] }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-black flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHlxM2RxeXpydnB4Ynl4eXpydnB4Ynl4eXpydnB4Ynl4eXpydnB4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxx6bYCc92w/giphy.gif')] opacity-20 mix-blend-screen bg-cover pointer-events-none"></div>

              <motion.div
                animate={{
                  x: [-2, 2, -2, 2, 0],
                  y: [2, -2, 2, -2, 0]
                }}
                transition={{ duration: 0.1, repeat: Infinity }}
                className="text-center px-6 relative z-10"
              >
                <h2 className="text-6xl md:text-8xl font-black text-red-600 mb-6 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] font-mono">
                  FATAL_ERROR
                </h2>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-red-500 font-mono animate-pulse">
                    &gt; PROJECT DATA CORRUPTED
                  </p>
                  <p className="text-white font-mono text-sm opacity-60">
                    REASON: EXCESSIVE CLICKS ON A.D.S LOGO<br />
                    STATUS: REBOOTING SYSTEM...
                  </p>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5 }}
                  className="h-1 bg-red-600 mt-12 mx-auto max-w-md rounded-full"
                />
              </motion.div>

              {/* Random Glitch Blocks */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.random() * 100 - 50, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ duration: 0.2, repeat: Infinity, delay: Math.random() }}
                  className="absolute bg-red-600/30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 20}%`,
                    height: `${Math.random() * 5}%`
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

