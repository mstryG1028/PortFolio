import React from "react";
import { FaJava, FaRocket, FaCode, FaDatabase } from "react-icons/fa";

const Tools = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-3">

      {/* Full Stack Developer */}
      <div
        className="
          flex items-center gap-4  h-20 px-5 
          border border-[var(--color-border)]
          rounded-xl
          hover:bg-[var(--color-accentSoft)]/10
          transition shadow-md
        "
      >
        <FaCode className="text-3xl text-[var(--color-accent)]" />
        <h1 className="text-lg font-semibold text-[var(--color-textPrimary)]">
          Full Stack Developer
        </h1>
      </div>

     

      {/* Strong Core Java */}
      <div
        className="
          flex items-center gap-4  h-20 px-5 
          border border-[var(--color-accentSoft)]/40
          rounded-xl
          hover:bg-[var(--color-accentSoft)]/10
          transition shadow-md
        "
      >
        <FaJava className="text-3xl text-[var(--color-accentSoft)]" />
        <h1 className="text-lg font-semibold text-[var(--color-textPrimary)]">
          Strong Core Java
        </h1>
      </div>
      <div
        className="
          flex items-center gap-4  h-20 px-5 
          border border-[var(--color-accentSoft)]/40
          rounded-xl
          hover:bg-[var(--color-accentSoft)]/10
          transition shadow-md
        "
      >
        <FaDatabase className="text-3xl text-[var(--color-accentSoft)]" />
        <h1 className="text-lg font-semibold text-[var(--color-textPrimary)]">
          Strong SQL Foundation
        </h1>
      </div>
       {/* Fast Learner & Problem Solver */}
      <div
        className="
          flex items-center gap-4  h-20 px-5 
          border border-[var(--color-accentSoft)]/40
          rounded-xl
          hover:bg-[var(--color-accentSoft)]/10
          transition shadow-md
        "
      >
        <FaRocket className="text-3xl text-[var(--color-accentSoft)]" />
        <h1 className="text-lg font-semibold text-[var(--color-textPrimary)]">
          Fast Learner & Problem Solver
        </h1>
      </div>

    </div>
  );
};

export default Tools;
