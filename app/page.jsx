"use client";
import Footer from "@/components/Footer";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-black flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section com gradiente e design moderno */}
      <section className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white py-16 px-10 md:px-24 lg:px-40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="block">Transformando</span>
                <span className="block">
                  <span className="text-yellow-300">ideias</span> em
                </span>
                <span className="block">realidade digital</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Fullstack Developer | Solucionador de Problemas | Criador de Experiências
              </p>
              <div className="flex gap-4">
                <a 
                  href="#projetos" 
                  className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 hover:text-blue-800 transition-colors duration-300"
                >
                  Ver Projetos
                </a>
                <a 
                  href="#contato" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-700 transition-colors duration-300"
                >
                  Fale Comigo
                </a>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-blue-500 bg-opacity-30 absolute animate-ping-slow"></div>
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-9xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="w-full py-16 px-10 md:px-24 lg:px-40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-blue-600"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Sobre Mim
              </span>
              <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 flex-grow ml-4"></div>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Desenvolvedor apaixonado por transformar desafios em soluções elegantes. 
              Com expertise em todo o ciclo de desenvolvimento, entrego software que não apenas 
              funciona, mas impressiona. Minha missão é criar experiências digitais que façam a diferença.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Seção de Tecnologias */}
      <Technologies />
      
      {/* Seção de Projetos */}
      <div id="projetos">
        <Projects />
      </div>
      
      <div id="contato">
        <Footer />
      </div>

      {/* Elemento visual decorativo */}
      <div className="fixed -z-10 top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-blue-500/5 to-purple-500/5"></div>
      <div className="fixed -z-10 bottom-0 left-0 w-1/3 h-screen bg-gradient-to-t from-blue-500/5 to-purple-500/5"></div>
    </motion.main>
  ); 
}