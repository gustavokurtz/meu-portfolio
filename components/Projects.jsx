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
];

export default function Projects() {
  return (
    <motion.section
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Meus Projetos</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

          return (
            <motion.a
              key={index}
              ref={ref}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg overflow-hidden shadow-lg bg-white border-2 border-black p-8 flex flex-col items-center transition-transform duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Imagem com bordas arredondadas */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-w-md object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-lg text-gray-700 text-center">{project.description}</p>
              <div className="flex flex-wrap mt-4 gap-3 justify-center">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-2 text-sm border border-black rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.section>
  );
}
