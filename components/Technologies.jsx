import { FaJs, FaReact, FaNodeJs, FaVuejs, FaHtml5, FaCss3, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiExpress, SiMysql, SiPostgresql, SiPrisma } from "react-icons/si";

const techs = [
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React.js" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaVuejs, name: "Vue.js" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3, name: "CSS3" },
  { icon: SiNestjs, name: "Nest.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiPrisma, name: "Prisma" },
];

export default function Technologies() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6 pb-4">Tecnologias</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
        {techs.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <tech.icon className="text-5xl text-black" />
            <p className="mt-2 text-sm">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
