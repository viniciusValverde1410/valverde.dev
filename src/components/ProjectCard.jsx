import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.techList}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Ver Projeto
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
