import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stagger: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="flex-grow">
        <section id="home" className="scroll-mt-20">
          <Home />
        </section>

        <ScrollReveal>
          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="experience" className="scroll-mt-20">
            <Experience />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}

export default App;


