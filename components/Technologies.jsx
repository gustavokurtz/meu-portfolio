"use client";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaVuejs, FaHtml5, FaCss3, FaDatabase, FaJava, FaDocker, FaAws, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiExpress, SiMysql, SiPostgresql, SiPrisma, SiMongodb, SiTypescript, SiRedis, SiGraphql, SiRabbitmq, SiSpringboot, SiKubernetes, SiPython } from "react-icons/si";

const techGroups = [
  {
    name: "Frontend",
    icon: <FaReact className="text-4xl" />,
    color: "bg-gradient-to-br from-blue-500 to-cyan-400",
    techs: [
      { icon: FaReact, name: "React.js" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: FaVuejs, name: "Vue.js" },
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3, name: "CSS3" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: FaJs, name: "JavaScript" },
    ]
  },
  {
    name: "Backend",
    icon: <FaServer className="text-4xl" />,
    color: "bg-gradient-to-br from-purple-500 to-indigo-500",
    techs: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiNestjs, name: "Nest.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: FaJava, name: "Java" },
      { icon: SiSpringboot, name: "Spring Boot" },
      { icon: SiPython, name: "Python" },
      { icon: SiGraphql, name: "GraphQL" },
    ]
  },
  {
    name: "Banco de Dados",
    icon: <FaDatabase className="text-4xl" />,
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    techs: [
      { icon: SiMysql, name: "MySQL" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiRedis, name: "Redis" },
      { icon: SiPrisma, name: "Prisma" },
    ]
  },
  {
    name: "DevOps",
    icon: <FaDocker className="text-4xl" />,
    color: "bg-gradient-to-br from-orange-500 to-amber-500",
    techs: [
      { icon: FaDocker, name: "Docker" },
      { icon: SiKubernetes, name: "Kubernetes" },
      { icon: FaAws, name: "AWS" },
      { icon: SiRabbitmq, name: "RabbitMQ" },
    ]
  }
];

export default function Technologies() {
  return (
    <section className="w-full py-16 px-10 md:px-24 lg:px-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="inline-block text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Arsenal Tecnológico
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Ferramentas que utilizo para criar soluções de ponta a ponta
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`${group.color} p-6 text-white flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  {group.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4">{group.name}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {group.techs.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    >
                      <tech.icon className="text-3xl text-gray-700" />
                      <p className="mt-2 text-xs text-center">{tech.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Elemento visual decorativo */}
        <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-100 opacity-50"></div>
      </div>
    </section>
  );
}