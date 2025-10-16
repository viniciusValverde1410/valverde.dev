"use client";

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { useForm, ValidationError } from '@formspree/react';



export default function Home() {

  function ContactForm() {
  const [state, handleSubmit] = useForm("mjkalkdq");
  if (state.succeeded) {
      return <p className={styles.successMessage}> Mensagem enviada com sucesso! Obrigado pelo contato!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Nome
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          placeholder="Seu nome completo"
          className={styles.formInput}
          required
        />
        <ValidationError 
          prefix="Nome" 
          field="name"
          errors={state.errors}
          className={styles.errorText}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="seu@email.com"
          className={styles.formInput}
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className={styles.errorText}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.formLabel}>
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Escreva sua mensagem aqui..."
          className={styles.formTextarea}
          required
        />
        <ValidationError 
          prefix="Mensagem" 
          field="message"
          errors={state.errors}
          className={styles.errorText}
        />
      </div>

      <button type="submit" disabled={state.submitting} className={styles.submitButton}>
        {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
}

  const technologies = [
    { name: 'Git', badge: 'https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white' },
    { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black' },
    { name: 'HTML5', badge: 'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white' },
    { name: 'CSS3', badge: 'https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white' },
    { name: 'PostgreSQL', badge: 'https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white' },
    { name: 'SQLite', badge: 'https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white' },
    { name: 'Postman', badge: 'https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white' },
    { name: 'Node.js', badge: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' },
    { name: 'Prisma', badge: 'https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white' },
    { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black' },
    { name: 'React Native', badge: 'https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black' },
    { name: 'Next.js', badge: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white' },
    { name: 'Axios', badge: 'https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white' },
  ];

  const projects = [
    {
      title: 'SCCPedia - Corinthians Web',
      description: 'Plataforma completa com Next.js e React consumindo API própria. Exibe elenco atual, lendas históricas, títulos conquistados, história do clube e formulário de contato integrado com Formspree. Design responsivo com carousels interativos.',
      image: '/images/corinthians.png',
      technologies: ['Next.js', 'React', 'Axios'],
      liveUrl: 'https://corinthians-web-pi.vercel.app/',
      githubUrl: 'https://github.com/viniciusValverde1410/corinthiansWeb.git',
    }
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.profileWrapper}>
            <div className={styles.profileImage}>
              <Image
                src="https://avatars.githubusercontent.com/u/173320892?v=4"
                alt="Valverde"
                fill
                className={styles.avatar}
                priority
              />
            </div>
          </div>

          <h1 className={styles.heroTitle}>Valverde</h1>
          <h2 className={styles.heroSubtitle}>Desenvolvedor Full Stack</h2>

          <p className={styles.heroDescription}>
            Desenvolvedor apaixonado por criar soluções web modernas e escaláveis.
            Especializado em JavaScript, React, Next.js e tecnologias de ponta para
            desenvolvimento de aplicações robustas e inovadoras.
          </p>

          <div className={styles.bibleVerse}>
            <p className={styles.verseText}>
              "Tudo posso naquele que me fortalece."
            </p>
            <p className={styles.verseReference}>- Filipenses 4:13</p>
          </div>

          <div className={styles.ctaButtons}>
            <Link href="https://github.com/viniciusValverde1410" target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/vin%C3%ADcius-valverde-b987a8339/" target="_blank" rel="noopener noreferrer" className={styles.btnLinkedin}>
              LinkedIn
            </Link>
            <Link href="#contato" className={styles.btnContact}>
              Contato
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Projetos</h2>
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sobre Mim</h2>
          <div className={styles.aboutCard}>
            <p className={styles.aboutText}>
              Sou um desenvolvedor full stack dedicado a transformar ideias em realidade através do código.
              Com experiência em tecnologias modernas como Next.js, React e Node.js, busco constantemente
              aprimorar minhas habilidades e entregar soluções de alta qualidade.
            </p>
            <p className={styles.aboutText}>
              Minha jornada no desenvolvimento web começou com JavaScript puro e evoluiu para frameworks
              modernos e práticas avançadas de engenharia de software. Acredito em código limpo,
              arquitetura bem planejada e sempre com foco na experiência do usuário.
            </p>
            <p className={styles.aboutText}>
              Além do desenvolvimento, sou apaixonado por aprender novas tecnologias, contribuir com
              a comunidade open-source e compartilhar conhecimento. Sempre em busca de novos desafios
              que me permitam crescer profissionalmente e fazer a diferença.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.education}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Formação</h2>
          <div className={styles.educationCard}>
            <div className={styles.educationIcon}>
              🎓
            </div>
            <div className={styles.educationContent}>
              <h3 className={styles.educationTitle}>Desenvolvimento de Sistemas</h3>
              <p className={styles.educationInstitution}>SENAI</p>
              <p className={styles.educationStatus}>🚀 Em andamento</p>
              <p className={styles.educationDescription}>
                Formação técnica completa em desenvolvimento de sistemas, abrangendo programação, 
                banco de dados, desenvolvimento web, mobile e desktop. Aplicação prática de 
                metodologias ágeis e boas práticas de engenharia de software.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.technologies}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Tecnologias</h2>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.techBadge}>
                <img
                  src={tech.badge}
                  alt={tech.name}
                  className={styles.badgeImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className={styles.contact}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Contato</h2>
          <div className={styles.contactCard}>
            <p className={styles.contactText}>
              Estou sempre disponível para novos projetos e oportunidades. Se você quer conversar sobre desenvolvimento,
              colaborações ou apenas trocar uma ideia, ficarei feliz em responder!
            </p>
                <ContactForm />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.copyright}>
              <p>&copy; 2025 Valverde. Todos os direitos reservados.</p>
            </div>

            <div className={styles.socialLinks}>
              <Link href="https://github.com/viniciusValverde1410" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}