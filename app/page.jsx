"use client";

import Footer from "@/components/Footer";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-10 md:px-24 lg:px-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Seção de Introdução */}
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-12 flex flex-col items-center">
          <span className="text-5xl">👋</span> 
          <span>HELLO, I’M</span> 
          <span className="font-bold">GUSTAVO</span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed">
          Sou um desenvolvedor fullstack apaixonado por resolver problemas através da tecnologia. 
          Programo desde os 16 anos, sempre buscando novas maneiras de criar, aprender e inovar. 
          Tenho experiência em <strong>JavaScript, React, Next.js, Node.js, Vue.js, HTML, CSS, Prisma, Nest.js, Express, Python, MySQL e PostgreSQL</strong>.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mt-4">
  Meu compromisso é entregar <strong>soluções eficientes e escaláveis</strong>, adaptando-me a qualquer cenário e necessidade do projeto.  
  Sou movido pela busca incessante por <strong>inovação e otimização</strong>, sempre focado em <strong>resolver problemas complexos com tecnologia</strong>.  
  Seja criando interfaces intuitivas, otimizando processos ou desenvolvendo sistemas robustos, meu objetivo é transformar desafios em oportunidades e <strong>ideias em realidade</strong>.
</p>


        
      </section>

      {/* Seção de Tecnologias */}
      <Technologies />

      {/* Seção de Projetos */}
      <Projects />
      <Footer />
    </motion.main>
  );
}
