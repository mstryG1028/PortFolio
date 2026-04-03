import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiHibernate,
} from "react-icons/si";

const skills = [
  { name: "Java", level: 90, icon: FaJava, color: "bg-orange-500" },
  { name: "JavaScript", level: 60, icon: SiJavascript, color: "bg-yellow-400" },
  { name: "React", level: 70, icon: FaReact, color: "bg-cyan-400" },
  { name: "HTML", level: 90, icon: FaHtml5, color: "bg-orange-600" },
  { name: "CSS", level: 85, icon: FaCss3Alt, color: "bg-blue-500" },
  { name: "MongoDB", level: 75, icon: SiMongodb, color: "bg-green-500" },
  { name: "SQL", level: 85, icon: SiMysql, color: "bg-sky-500" },
  { name: "Git", level: 80, icon: FaGitAlt, color: "bg-red-500" },
];

const Skill = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-16">
      <h1 className="text-4xl font-bold text-center mb-14 text-white">
        My Skills
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="
                rounded-2xl p-5
                bg-gradient-to-br from-[#0f172a] to-[#020617]
                border border-white/10
                shadow-lg
              "
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-3xl text-white" />
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>

              {/* Proficiency */}
              <div className="flex justify-between text-sm mb-2 text-slate-400">
                <span>Proficiency</span>
                <span className="text-white">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full ${skill.color} rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
