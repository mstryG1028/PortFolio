import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
      w-full px-8 py-2 flex items-center justify-between

        text-[var(--color-textPrimary)]
        flex items-center justify-between
        px-6 md:px-12
        border-b border-[var(--color-border)]
      "
    >
      {/* Name */}
      <div className="nameBox text-4xl mb-2 text-[var(--color-accent)]">
        <Link to="/">
          <h1>Deepak Mistry</h1>
        </Link>
      </div>

      {/* Links */}
      <div
        className="
    linksBox hidden md:flex 
    items-center gap-10 px-10 h-10 mt-5
    justify-center rounded-full
    -translate-y-3

bg-blend-color-burn
    border- border-[var(--color-accentSoft)]
    backdrop-blur-md

    shadow-[0_0_25px_rgba(16,185,129,0.15)]
    hover:shadow-[0_0_10px_rgba(16,185,129,0.35)]
    transition-all duration-300
  "
      >
        <a
          href="/"
          className="
      relative font-medium cursor-pointer transition
      text-[var(--color-textPrimary)]
      hover:text-[var(--color-accentSoft)]

      after:content-['']
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0
      after:bg-[var(--color-accentSoft)]
      after:transition-all after:duration-300
      hover:after:w-full
    "
        >
          Home
        </a>

        <a
          href="/skill"
          className="
      relative font-medium cursor-pointer transition
      text-[var(--color-textPrimary)]
      hover:text-[var(--color-accentSoft)]

      after:content-['']
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0
      after:bg-[var(--color-accentSoft)]
      after:transition-all after:duration-300
      hover:after:w-full
    "
        >
          Skills
        </a>

        <a
          href="/project"
          className="
      relative font-medium cursor-pointer transition
      text-[var(--color-textPrimary)]
      hover:text-[var(--color-accentSoft)]

      after:content-['']
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0
      after:bg-[var(--color-accentSoft)]
      after:transition-all after:duration-300
      hover:after:w-full
    "
        >
          Projects
        </a>

        <a
          href="/contact"
          className="
      relative font-medium cursor-pointer transition
      text-[var(--color-textPrimary)]
      hover:text-[var(--color-accentSoft)]

      after:content-['']
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0
      after:bg-[var(--color-accentSoft)]
      after:transition-all after:duration-300
      hover:after:w-full
    "
        >
          Contact
        </a>
      </div>

      {/* Resume Button */}

      <a
        href="/Deepak_Mistry_Resume.pdf" // used to download resume which should in public folder
        download="resume" // name of downloaded file
        className="
         w-full md:w-48
    hidden md:block
    bg-[var(--color-accent)]
    text-[var(--color-themeColor)]
    px-6 py-2 rounded-full font-semibold
    hover:opacity-90 transition
  "
      >
        Download Resume
      </a>

      {/* Messages Icon */}

      {/* <Link to="/message">
        <div
          className="
      w-10 h-10
      rounded-full
      bg-cyan-400
      hover:bg-cyan-300
      flex items-center justify-center
      text-black
      text-xl
      transition
      cursor-pointer
    "
        >
          <FaEnvelope />
        </div>
      </Link> */}

      {/* Mobile Icon */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            absolute top-20 left-0 w-full
            bg-[var(--color-themeColor)]
            text-[var(--color-textPrimary)]
            flex flex-col items-center gap-6 py-6
            border-t border-[var(--color-border)]
            md:hidden
          "
        >
          {["Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              className="hover:text-[var(--color-accentSoft)] cursor-pointer"
            >
              {link}
            </a>
          ))}

          <button
            className="
              px-6 py-2 rounded-full font-semibold
              bg-[var(--color-accent)]
              text-[var(--color-themeColor)]
            "
          >
            Download Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
