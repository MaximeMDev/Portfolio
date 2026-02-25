import { useState } from "react";

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-3xl focus:outline-none z-50 relative"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <div
        className={`fixed inset-0 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 z-40 h-52 bg-[#0F172A]`}
      >
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="text-2xl hover:text-cyan-400 transition-colors"
        >
          À propos
        </a>
        <a
          href="#project"
          onClick={() => setIsOpen(false)}
          className="text-2xl hover:text-cyan-400 transition-colors"
        >
          Projets
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="text-2xl hover:text-cyan-400 transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
};
export default MenuBurger;
