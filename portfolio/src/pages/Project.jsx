import React from "react";

const projects = [
  {
    title: "Wanderlust Holidays",
    description:
      "A travel and holiday booking website with modern UI, responsive design, and smooth user experience.",
    image: "/images/Screenshot 2026-05-09 090051.png",
    tech: ["Node","Express","Database Management", "Bootstrap", "MongoDB"],
    code: "https://github.com/mstryG1028/WanderLust-Holidays",
    demo: "https://wanderlust-holidays-7umj.onrender.com",
  },
  {
    title: "Digital Dashboard",
    description:
      "An analytics dashboard displaying charts, statistics, and insights using a clean and modern layout.",
    image: "/images/Screenshot 2026-05-09 090212.png",
    tech: ["node","Express", "Charts","Excel", "Web Technology"],
    code: "https://github.com/mstryG1028/Digital_DashBoard",
    demo: "https://digital-dashboard.onrender.com",
  },
  {
    title: "Sorting Visualizer",
    description:
      "A visual tool to understand sorting algorithms through animations and real-time comparisons.",
    image: "/images/Screenshot 2026-05-09 090410.png",
    tech: ["JavaScript", "Sorting Algorithms", "Web Technology"],
    code: "https://github.com/mstryG1028/sorting",
    demo: "https://sortingpro1.netlify.app/",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-16 text-white">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
        My <span className="text-orange-400">Projects</span>
      </h1>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              rounded-2xl overflow-hidden
              bg-gradient-to-br from-slate-900 to-slate-800
              border border-white/10
              shadow-xl
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1 text-xs rounded-full
                      bg-white/10 text-slate-300
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 text-center py-2 rounded-lg
                    bg-white/10 hover:bg-white/20
                    transition
                  "
                >
                  Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 text-center py-2 rounded-lg
                    bg-orange-500 hover:bg-orange-600
                    text-black font-medium
                    transition
                  "
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Project;
