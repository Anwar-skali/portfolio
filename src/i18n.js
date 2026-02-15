import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: {
                home: 'Home',
                skills: 'Skills',
                experience: 'Experience',
                projects: 'Projects',
                contact: 'Contact'
            },
            common: {
                hireMe: 'Hire Me',
                downloadCv: 'Download CV',
                github: 'GitHub',
                linkedin: 'LinkedIn',
                send: 'Send Message'
            },
            home: {
                title: 'Anwar Dahbi Skali',
                subtitle: 'Engineering in Development & Systems | Data Engineering',
                description: 'Passionate about Java development, Web Full Stack, and data-driven systems. I build innovative solutions combining performance and modern design.'
            },
            skills: {
                title: 'Technical',
                subtitle: 'Skills'
            },
            projects: {
                title: 'My',
                subtitle: 'Projects',
                comingSoon: 'Coming Soon',
                comingSoonDesc: 'Projects will be added soon'
            },
            contact: {
                title: 'Let\'s talk about your',
                subtitle: 'Project',
                nameLabel: 'Full Name',
                emailLabel: 'Email',
                messageLabel: 'Message',
                placeholderName: 'Amine Alami',
                placeholderEmail: 'amine.alami@email.ma',
                placeholderMessage: 'How can I help you?',
                success: 'Message sent successfully!',
                error: 'An error occurred. Please try again.'
            },
            experience: {
                title: 'Professional',
                subtitle: 'Journey',
                internship: 'Observation Internship',
                remote: 'Remote / Freelance',
                chaabiRole: 'Web Developer Intern',
                chaabiTask1: 'Created a mini CRM for agents and administrators management',
                chaabiTask2: 'Implemented transaction management and internal operations',
                chaabiTask3: 'Developed web applications using Laravel and Tailwind CSS',
                chaabiTask4: 'Managed data persistence with MySQL databases',
                m2mRole: 'Software Development Intern',
                m2mTask1: 'Participated in development and maintenance of business applications',
                m2mTask2: 'Contributed to Java and Web technology projects',
                m2mTask3: 'Implemented backend features and relational database integration',
                m2mTask4: 'Analyzed functional needs and collaborated with technical teams',
                m2mTask5: 'Followed best programming practices, code structuring, and testing',
                freelanceRole: 'Web Developer & Language Expert',
                freelanceTask1: 'Designing and building personal and freelance web projects',
                freelanceTask2: 'Full-stack development (Frontend & Backend)',
                freelanceTask3: 'Database management and SQL integrations',
                frenchLevel: 'Advanced French Certification - Level C1 (Score 536 TCF)'
            }
        }
    },
    fr: {
        translation: {
            nav: {
                home: 'Accueil',
                skills: 'Compétences',
                experience: 'Expérience',
                projects: 'Projets',
                contact: 'Contact'
            },
            common: {
                hireMe: 'Me Recruter',
                downloadCv: 'Télécharger CV',
                github: 'GitHub',
                linkedin: 'LinkedIn',
                send: 'Envoyer le Message'
            },
            home: {
                title: 'Anwar Dahbi Skali',
                subtitle: 'Ingénierie en Développement & Systèmes | Data Engineering',
                description: 'Passionné par le développement Java, le Web Full Stack et les systèmes orientés données. Je conçois des solutions innovantes alliant performance et design moderne.'
            },
            skills: {
                title: 'Compétences',
                subtitle: 'Techniques'
            },
            projects: {
                title: 'Mes',
                subtitle: 'Projets',
                comingSoon: 'Projets à venir',
                comingSoonDesc: 'Les projets seront ajoutés prochainement'
            },
            contact: {
                title: 'Parlons de votre',
                subtitle: 'Projet',
                nameLabel: 'Nom Complet',
                emailLabel: 'Email',
                messageLabel: 'Message',
                placeholderName: 'Mohammed Benjelloun',
                placeholderEmail: 'm.benjelloun@email.ma',
                placeholderMessage: 'Comment puis-je vous aider ?',
                success: 'Message envoyé avec succès !',
                error: 'Une erreur est survenue. Veuillez réessayer.'
            },
            experience: {
                title: 'Parcours',
                subtitle: 'Professionnel',
                internship: 'Stage d’observation',
                remote: 'À distance / Freelance',
                chaabiRole: 'Stagiaire Développeur Web',
                chaabiTask1: 'Réalisation d’un mini CRM pour la gestion des agents et des administrateurs',
                chaabiTask2: 'Mise en place de la gestion des transactions et des opérations internes',
                chaabiTask3: 'Développement d’une application web avec Laravel et Tailwind CSS',
                chaabiTask4: 'Utilisation d’une base de données MySQL pour la persistance des données',
                m2mRole: 'Stagiaire Développement Logiciel',
                m2mTask1: 'Participation au développement et à la maintenance d’applications métiers',
                m2mTask2: 'Contribution à des projets basés sur Java et technologies Web',
                m2mTask3: 'Implémentation de fonctionnalités backend et intégration avec des bases de données relationnelles',
                m2mTask4: 'Analyse des besoins fonctionnels et collaboration avec l’équipe technique',
                m2mTask5: 'Respect des bonnes pratiques de programmation, structuration du code et tests',
                freelanceRole: 'Développeur Web & Expert Linguistique',
                freelanceTask1: 'Conception et réalisation de projets web personnels et freelance',
                freelanceTask2: 'Développement d’applications web frontend & backend',
                freelanceTask3: 'Gestion de bases de données et intégration SQL',
                frenchLevel: 'Formation en langue française – Niveau C1 (Score 536 TCF / CCF)'
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
