const Links = () => {
  return (
    <nav className="flex flex-row gap-6 items-center">
      {/* Lien Github */}
      <a
        href="https://github.com/MaximeMDev"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
      >
        <img
          src="src/assets/github.png"
          className="w-12 h-12 object-contain"
          alt="Lien vers Github"
        />
      </a>

      {/* Lien Linkedin */}
      <a
        href="https://www.linkedin.com/in/maxime-mortelec-99a07026a/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
      >
        <img
          src="src/assets/linkedin.png"
          className="w-12 h-12 object-contain"
          alt="Lien vers Linkedin"
        />
      </a>
    </nav>
  );
};

export default Links;
