import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setStatus('success');
        formRef.current.reset();
      }, (error) => {
        console.error(error.text);
        setStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'Email',
      value: 'anwarskali478@gmail.com',
      link: 'mailto:anwarskali478@gmail.com'
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-600" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/anwar-skali',
      link: 'https://www.linkedin.com/in/anwar-skali/'
    },
    {
      icon: <Github className="w-6 h-6 text-blue-600" />,
      title: 'GitHub',
      value: 'github.com/Anwar-skali',
      link: 'https://github.com/Anwar-skali'
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: 'Téléphone',
      value: '+212 706 28 11 74',
      link: 'tel:0706281174'
    }
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 pt-20 pb-16 flex items-center transition-colors duration-500">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6"
          >
            {t('contact.title')} <span className="text-gradient">{t('contact.subtitle')}</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: false }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="glass-card dark:bg-slate-800/50 p-6 rounded-3xl flex items-center gap-6 border border-transparent hover:border-blue-500/30 transition-all group shadow-md hover:shadow-xl"
                  >
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/40 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card dark:bg-slate-800/50 rounded-[2rem] p-10 shadow-xl border border-transparent hover:border-blue-500/10 transition-all"
                >

                  <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t('contact.nameLabel')}</label>
                        <input
                          required
                          name="name"
                          type="text"
                          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition outline-none font-medium dark:text-white"
                          placeholder={t('contact.placeholderName')}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t('contact.emailLabel')}</label>
                        <input
                          required
                          name="from_email"
                          type="email"
                          className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition outline-none font-medium dark:text-white"
                          placeholder={t('contact.placeholderEmail')}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Sujet / Title</label>
                      <input
                        required
                        name="title"
                        type="text"
                        className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition outline-none font-medium dark:text-white"
                        placeholder="L'objet de votre message"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">{t('contact.messageLabel')}</label>
                      <textarea
                        required
                        name="message"
                        rows="5"
                        className="w-full px-6 py-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition outline-none font-medium resize-none dark:text-white"
                        placeholder={t('contact.placeholderMessage')}
                      ></textarea>
                    </div>

                    <div className="flex flex-col gap-4">
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-xl hover:shadow-blue-500/10 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            {t('common.send')}
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <AnimatePresence>
                        {status === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold justify-center"
                          >
                            <CheckCircle2 className="w-5 h-5" />
                            {t('contact.success')}
                          </motion.div>
                        )}
                        {status === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold justify-center"
                          >
                            <AlertCircle className="w-5 h-5" />
                            {t('contact.error')}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </form>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
