"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "TranscrevaTube",
    description: "Transforma vídeos e áudios em texto automaticamente.",
    link: "https://transcrevamp4.vercel.app/",
    image: "/previews/transcrevatube.png",
    tech: ["Vue.js", "Flask", "Nginx", "FFmpeg", "Pydub"],
  },
  {
    title: "Gerenciador de Eventos",
    description: "Sistema para criar e gerenciar eventos de forma eficiente.",
    link: "https://gerenciadoreventos.vercel.app/",
    image: "/previews/gerenciadoreventos.png",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Java (Spring Boot)"],
  },
  {
    title: "Hábitos Diários",
    description: "Sistema que entrega três hábitos diários automaticamente.",
    link: "https://habitosdiarios.vercel.app/",
    image: "/previews/habitosdiarios.png",
    tech: ["Next.js", "Node.js", "Prisma", "SQLite"],
  },
  {
    title: "Tranquilize AI",
    description: "Assistente de apoio emocional baseado em IA.",
    link: "https://tranquilizeai.vercel.app/",
    image: "/previews/tranquilizeai.png",
    tech: ["Next.js", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    title: "Notas SaaS",
    description: "Compartilhe notas temporárias de forma segura.",
    link: "https://notas-temp-frontend.vercel.app/",
    image: "/previews/notassaas.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "Encurtador de Links",
    description: "Gere links curtos personalizados com contagem de cliques.",
    link: "https://encurtador-link-frontend.vercel.app/",
    image: "/previews/encurtador.png",
    tech: ["Next.js", "Node.js", "Express", "SQLite"],
  },
  {
    title: "Medite",
    description: "Plataforma para meditação e mindfulness.",
    link: "https://medite.vercel.app/",
    image: "/previews/medite.png",
    tech: ["Next.js", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <div>
      <h2>Meus Projetos</h2>
      <div>
        {projects.map((project, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, translateY: 50 }}
              animate={inView ? { opacity: 1, translateY: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Imagem com bordas arredondadas */}
              <img src={project.image} alt={project.title} style={{ borderRadius: "8px" }} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
