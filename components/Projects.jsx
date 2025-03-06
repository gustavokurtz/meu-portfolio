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
    description: "Plataforma para meditação e mindfulness",
    link: "https://medite.vercel.app/",
    image: "/previews/medite.png",
    tech: ["Next.js, TailwindCSS"],
  },
];
export default function Projects() {
  return (
    
      

Meus Projetos


      


        {projects.map((project, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
          return (
            
              {/* Imagem com bordas arredondadas */}
              
              

{project.title}


              

{project.description}


              


                {project.tech.map((tech, i) => (
                  
                    {tech}
                  
                ))}
              


            
          );
        })}
      


    
  );
}
