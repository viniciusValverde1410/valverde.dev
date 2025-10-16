import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const technologies = [
    { name: 'JavaScript', color: 'linear-gradient(135deg, #f7df1e 0%, #f0db4f 100%)' },
    { name: 'Next.js', color: 'linear-gradient(135deg, #000000 0%, #434343 100%)' },
    { name: 'React', color: 'linear-gradient(135deg, #61dafb 0%, #21a1c4 100%)' },
    { name: 'Node.js', color: 'linear-gradient(135deg, #68a063 0%, #3c7a34 100%)' },
    { name: 'SQLite', color: 'linear-gradient(135deg, #0f80cc 0%, #07648d 100%)' },
    { name: 'Tailwind CSS', color: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)' },
    { name: 'TypeScript', color: 'linear-gradient(135deg, #3178c6 0%, #235a97 100%)' },
    { name: 'Git', color: 'linear-gradient(135deg, #f05033 0%, #c23a28 100%)' },
  ];

  const projects = [
    {
      title: 'Projeto Portfolio',
      description: 'Landing page moderna e responsiva desenvolvida com Next.js, React e CSS Modules. Design profissional com animações suaves e experiência de usuário otimizada.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'React', 'CSS Modules'],
      liveUrl: '#',
      githubUrl: 'https://github.com/viniciusValverde1410',
    },
    {
      title: 'Sistema Web',
      description: 'Aplicação web completa com backend em Node.js e frontend em React. Integração com banco de dados SQLite para persistência de dados.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'SQLite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/viniciusValverde1410',
    },
    {
      title: 'Dashboard Interativo',
      description: 'Interface moderna para visualização de dados com gráficos interativos e design responsivo. Implementação de melhores práticas de UX/UI.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['JavaScript', 'React', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/viniciusValverde1410',
    },
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
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.btnLinkedin}>
              LinkedIn
            </Link>
            <Link href="mailto:contato@valverde.dev" className={styles.btnContact}>
              Contato
            </Link>
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

      <section className={styles.technologies}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Tecnologias</h2>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <div key={index} className={styles.techCard}>
                <div className={styles.techIcon} style={{ background: tech.color }}>
                  <span className={styles.techLetter}>{tech.name.charAt(0)}</span>
                </div>
                <h3 className={styles.techName}>{tech.name}</h3>
              </div>
            ))}
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
              <Link href="mailto:contato@valverde.dev" className={styles.socialLink}>
                <svg className={styles.socialIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}