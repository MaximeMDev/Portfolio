import { useState } from "react";
import "./Index.css";
import MenuBurger from "./components/MenuBurger";
import Links from "./components/Link";
import ContactUs from "./components/MailForm";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showOfflineModal, setShowOfflineModal] = useState(false);

  const projects = [
    {
      id: 4,
      name: "Klivio",
      image: "./klivio.png",
      desc: "C'est le premier projet étudiant sur lequel j'ai travaillé, en solo. C'est la reproduction d'une maquette donnée, en HTML CSS dans un premier temps, puis en HTML Tailwind CSS avec un style libre pour la deuxième.",
      site: "https://maximemdev.github.io/Klivio-Integration/htmlcss/index.html",
      github: "https://github.com/MaximeMDev/Klivio-Integration",
      techs: ["React", "Tailwind", "Vite"],
    },
    {
      id: 3,
      name: "My-cinema",
      image: "./mycinema.png",
      desc: "Projet étudiant, interface administrative d'un gérant de cinéma, backend et frontend.",
      site: "#",
      github: "https://github.com/MaximeMDev/my-cinema",
      techs: ["HTML", "CSS", "PHP", "Javascript"],
    },
    {
      id: 2,
      name: "Générateur de CV",
      image: "./cvgenerator.png",
      desc: "Projet étudiant, générateur de CV interactif avec rendu en direct, HTML CSS PHP.",
      site: "#",
      github: "https://github.com/MaximeMDev/generateur-de-cv",
      techs: ["HTML", "CSS", "Bootstrap", "PHP"],
    },
    {
      id: 1,
      name: "Willypedia",
      image: "./willypedia.png",
      desc: "Un site vitrine réalisé lors d'une initiation nommée BTech par l'association Z Code pour l'emploi.",
      site: "https://maximemdev.github.io/WillyPedia/home.html",
      github: "https://github.com/MaximeMDev/WillyPedia",
      techs: ["HTML", "CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-cyan-500/30 relative">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-40 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tighter text-white">
            Maxime<span className="text-cyan-400">M</span>Dev
          </h1>
          <MenuBurger />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-32">
        {/* HERO */}
        <section className="flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25"></div>
            <img
              src="src/assets/pp.jpg"
              alt="Maxime"
              className="relative rounded-full border-2 border-slate-800 w-40 h-40 object-cover"
            />
          </div>
          <div className="space-y-2">
            <p className="text-cyan-400 font-mono text-sm">
              Bonjour, je m'appel
            </p>
            <h2 className="text-5xl font-extrabold text-white">
              Maxime Mortelec
            </h2>
            <p className="text-xl text-slate-400">
              Étudiant en Développement Web chez Epitech
            </p>
          </div>
          <Links />
        </section>

        {/* SECTION ALTERNANCE */}
        <section className="scroll-mt-[120px] space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-[#111a2e] border border-cyan-500/30 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-cyan-500/10 rounded-xl flex flex-col items-center justify-center border border-cyan-500/20 text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </div>

              <div className="flex-grow text-center md:text-left space-y-2">
                <h3 className="text-xl font-bold text-white">
                  À la recherche d'une alternance
                </h3>
                <p className="text-slate-400">
                  Actuellement à la recherche d'une alternance pour valider mon
                  diplôme et poursuivre ma montée en compétences.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 font-mono text-sm mt-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  Du 14/09/2026 au 22/10/2027
                </div>
              </div>

              <a
                href="#contact"
                className="whitespace-nowrap px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all hover:-translate-y-1 shadow-lg shadow-cyan-900/20"
              >
                Discutons-en !
              </a>
            </div>
          </div>
        </section>

        {/* PARCOURS */}
        <section id="about" className="scroll-mt-[120px] space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-4">
            <span className="text-cyan-400 text-sm">01.</span> Qui suis-je ?
            <div className="h-px bg-slate-800 flex-grow"></div>
          </h2>
          <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 text-center gap-1 flex flex-col">
            <p className="leading-relaxed text-slate-400 italic">
              "Développeur web en formation, j'aborde le code avec la même
              discipline que celle acquise sur les rings de boxe : rigueur,
              résilience et précision. Passionné par l'univers de la tech et de
              la mécanique, j'aime comprendre comment les choses fonctionnent,
              qu'il s'agisse d'un moteur de moto ou d'une architecture React.
              Motivé et assidu, je mets mon investissement au service de projets
              numériques performants et minimalistes."
            </p>
            <a
              href="src/assets/MaximeCV.pdf"
              download="MaximeCV.pdf"
              target="_blank"
              className="mt-6 self-center px-6 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300"
            >
              Télécharger mon CV
            </a>
          </div>
        </section>

        {/* PROJETS */}
        <section id="project" className="scroll-mt-[120px] space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-4">
            <span className="text-cyan-400 text-sm">02.</span> Mes projets
            <div className="h-px bg-slate-800 flex-grow"></div>
          </h2>
          <div className="grid gap-4">
            {projects.map((p) => (
              <div
                key={p.id}
                className="group bg-slate-800/30 border border-slate-800 p-6 rounded-xl flex justify-between items-center hover:border-slate-600 transition-all cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">
                  {p.name}
                </p>
                <button className="text-sm bg-slate-700 hover:bg-slate-600 py-2 px-4 rounded-lg transition-colors text-white">
                  Détails
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-[80px] text-center space-y-8 pt-10"
        >
          <h2 className="text-3xl font-bold text-white">Me contacter</h2>
          <ContactUs />
          <p className="text-slate-500 font-mono">06 37 37 49 53</p>
        </section>
      </main>

      <footer className="py-10 border-t border-slate-800 flex flex-col items-center gap-4 text-slate-500 text-sm">
        <Links />
        <p>© {new Date().getFullYear()} — Créé par MaximeMDev</p>
      </footer>
      <ScrollToTop />

      {/* MODALE DE DÉTAILS */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-[#1e293b] border border-slate-700 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.name}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  x
                </button>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {selectedProject.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techs.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    if (selectedProject.site === "#") {
                      setShowOfflineModal(true);
                    } else {
                      window.open(selectedProject.site, "_blank");
                    }
                  }}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white text-center py-3 rounded-lg font-bold transition-colors"
                >
                  Démo Live
                </button>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-center py-3 rounded-lg font-bold transition-colors"
                >
                  Code GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODALE D'ALERTE */}
      {showOfflineModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setShowOfflineModal(false)}
          />
          <div className="relative bg-slate-900 border border-cyan-500/50 p-8 rounded-2xl max-w-sm w-full text-center shadow-[0_0_30px_rgba(34,211,238,0.2)] animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Projet non hébergé
            </h3>
            <p className="text-slate-400 mb-6">
              Ce projet est actuellement disponible uniquement sur mon GitHub.
              Vous pouvez consulter le code source pour voir la structure
              technique.
            </p>
            <button
              onClick={() => setShowOfflineModal(false)}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-lg transition-colors"
            >
              J'ai compris
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
