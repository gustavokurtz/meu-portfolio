"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLink } from "react-icons/fa"; // FaGithub não é mais necessária

// Lista de projetos atualizada (sem GitHub, sem Tranquilize AI, com os novos)
// Removida a propriedade 'image'
const projects = [
  {
    title: "Busca Rápida CNPJ",
    description: "Consulta rápida de dados de empresas (CNPJ) via Brasil API, com rate limiting. Feito com Next.js e NestJS.",
    link: "https://buscacnpj-frontend-production.up.railway.app",
    tech: ["Next.js", "NestJS", "Brasil API", "Railway"],
  },
  {
    title: "Kanban App com JWT",
    description: "App Kanban com autenticação JWT segura, conectando frontend Next.js a um backend NestJS.",
    link: "https://kanban-app-rosy.vercel.app/", // Usando link raiz
    tech: ["Next.js", "NestJS", "JWT", "Prisma", "Vercel", "Railway"],
  },
  {
    title: "Gerador de Desculpas IA",
    description: "Gerador de desculpas técnicas divertidas para devs usando IA (OpenAI). Feito com Next.js e NestJS.",
    link: "https://gerador-desculpas-openai-fronten-production.up.railway.app", // <<< SUBSTITUA '#' PELO LINK CORRETO DO DEPLOY FRONTEND
    tech: ["Next.js", "NestJS", "OpenAI API", "Railway"],
  },
  {
    title: "Medite",
    description: "Plataforma de bem-estar digital para meditação guiada e redução de estresse/ansiedade.",
    link: "https://medite.vercel.app/",
    tech: ["Next.js", "TailwindCSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 px-10 md:px-24 lg:px-40 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Projetos
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Conheça algumas das soluções que desenvolvi.
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

            return (
              <motion.div
                key={project.title}
                ref={ref}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col" // Card como container flexível
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Container do iFrame (Preview) */}
                <div className="h-56 w-full relative border-b border-gray-200 bg-gray-100"> {/* Aumentei altura e adicionei borda/bg */}
                  {/* Renderiza o iframe APENAS se o link for válido */}
                  {project.link && project.link !== '#' ? (
                    <iframe
                      src={project.link}
                      title={`Preview do projeto ${project.title}`}
                      className="w-full h-full" // Ocupa todo o container
                      frameBorder="0" // Remove a borda padrão do iframe
                      loading="lazy" // Carregamento preguiçoso para performance
                      // Nota: Mesmo com 'allow-scripts', muitos sites ainda serão bloqueados por X-Frame-Options ou CSP.
                      // sandbox="allow-scripts allow-same-origin" // Sandbox pode aumentar segurança mas pode quebrar sites se eles carregarem
                    >
                      {/* Fallback caso o navegador não suporte iframe (raro) */}
                      Seu navegador não suporta iframes.
                    </iframe>
                  ) : (
                    // Mostra um placeholder se o link não estiver disponível
                    <div className="w-full h-full flex items-center justify-center text-center text-gray-400 text-sm p-4">
                      (Preview indisponível <br /> Link de deploy não fornecido)
                    </div>
                  )}
                  {/* Ícone de Link (Deploy) sobre o iFrame */}
                   <div className="absolute top-0 right-0 p-3 flex space-x-2 z-10"> {/* z-10 para ficar sobre o iframe */}
                      {project.link && project.link !== '#' && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer"
                             className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200" // Adicionado fundo semitransparente
                             title={`Abrir ${project.title} em nova aba`}>
                              <FaLink className="text-blue-600" />
                          </a>
                      )}
                   </div>
                </div>

                {/* Conteúdo do Card (Texto e Techs) */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botão GitHub Principal Comentado */}
        {/*
        <div className="mt-16 text-center">
          <a href="URL_DO_SEU_GITHUB_PRINCIPAL" target="_blank" rel="noopener noreferrer" ...>
            <span>Ver meu GitHub</span> <FaGithub className="ml-2" />
          </a>
        </div>
        */}
      </div>
    </section>
  );
}