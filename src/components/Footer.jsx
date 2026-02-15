import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-black text-white mb-2">A.D.S.</h2>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Ingénieur informatique passionné par la création d'expériences numériques exceptionnelles.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-4">
              <a
                href="https://github.com/Anwar-skali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-2xl hover:bg-blue-600 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/anwar-skali/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-2xl hover:bg-blue-600 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              Fait avec <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> © {currentYear}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-slate-500 text-xs">
            Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

