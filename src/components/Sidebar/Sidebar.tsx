import { useState } from "react";
import About from "../Modal/About";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getThemeId, openAboutModal, toggleSidebar } from "../../redux/reducers/interaction";
import { themes } from "../../data/themes";
import { eventHistorial } from "../../data/event";
import { personnes } from "../../data/personnes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBookOpen, faFlag, faHouse, faImagePortrait } from "@fortawesome/free-solid-svg-icons";
import logo from "/logo.png";

function Sidebar2() {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.interaction.sidebar);
  const modal = useAppSelector((state) => state.interaction.aboutModal);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isEventHistorielOpen, setIsEventHistorielOpen] = useState(false);
  const [isPersonOpen, setIsPersonOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number | null) => {
    setActiveIndex(index);
  };
  const toggleThemes = () => {
    setIsThemeOpen(!isThemeOpen);
    setIsEventHistorielOpen(false);
    setIsPersonOpen(false);
  };
  const toggleEventHistoriel = () => {
    setIsEventHistorielOpen(!isEventHistorielOpen);
    setIsThemeOpen(false);
    setIsPersonOpen(false);
  };
  const togglePerson = () => {
    setIsPersonOpen(!isPersonOpen);
    setIsEventHistorielOpen(false);
    setIsThemeOpen(false);
  };
  const openModal = () => {
    dispatch(openAboutModal());
  };

  return (
    <div className={`Sidebar absolute z-[999] ${sidebar ? "lg:w-96" : "w-full"}`}>
      {/* Menu Burger */}
      <button
        type="button"
        className={`lg:focus:outline-none absolute bg-base-100 p-3 rounded-full mx-5 duration-1000 mt-5 ${
          sidebar ? "ml-[263px]" : ""
        } ${sidebar ? "lg:ml-[400px]" : ""}`}
        onClick={() => {
          dispatch(toggleSidebar(sidebar));
        }}
      >
        <span
          className={`block h-1 w-6 bg-primary rounded-full transition-all duration-1000 transform ${
            sidebar ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-primary rounded-full mt-1 transition-all duration-1000 ${
            sidebar ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-primary rounded-full mt-1 transition-all duration-1000 transform ${
            sidebar ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Contenu de la barre latérale */}
      <aside
        className={`min-h-full overflow-y-auto fixed top-0 left-0 lg:w-96 w-64 ${
          !isPersonOpen ? "flex flex-col" : ""
        } ${sidebar ? "lg:translate-x-0 duration-1000" : "-translate-x-full duration-1000"} bg-base-100`}
      >
        {/* Titre de l'application */}
        <h1 className={`collapse-title font-bold text-primary lg:text-lg uppercase text-left mb-2`}>
          <a href="/">héritage raciste dans l’espace public de genève</a>
        </h1>
        {/* Contenu - Personnages Historiques */}
        <section
          className={`collapse collapse-arrow max-h-[100px] rounded-none border-t-2 border-accent
           ${isPersonOpen ? "max-h-screen transition-all duration-500 ease-in-out" : "max-h-0"}`}
        >
          {/* input cliquable pour ouvrir le menu déroulant vers le bas */}
          <input
            type="radio"
            name="my-accordion-2"
            className="cursor-pointer"
            checked={isPersonOpen}
            onChange={togglePerson}
            onClick={togglePerson}
          />
          {/* Sous-titre : Personnage Historiques */}
          <h2 className="collapse-title font-bold max-lg:text-sm text-secondary">
            Personnages historiques
            <FontAwesomeIcon icon={faImagePortrait} size="lg" style={{ marginLeft: "1rem" }} />
          </h2>
          {/* La liste des personnages historiques */}
          <div className="flex flex-col overflow-auto">
            {isPersonOpen &&
              personnes.map((personne, index) => (
                <a className="m-2 pl-2 text-sm text-accent cursor-pointer" key={index}>
                  {personne}
                </a>
              ))}
          </div>
        </section>
        {/* Contenu - Faits Historiques */}
        <section
          className={`collapse collapse-arrow max-h-[100px] overflow-hidden rounded-none border-y-2 border-accent ${
            isEventHistorielOpen ? "max-h-screen transition-all duration-500 ease-in-out" : "max-h-0"
          }`}
        >
          {/* input cliquable pour ouvrir le menu déroulant vers le bas */}
          <input
            type="radio"
            name="my-accordion-2"
            className="cursor-pointer"
            checked={isEventHistorielOpen}
            onChange={toggleEventHistoriel}
            onClick={toggleEventHistoriel}
          />
          {/* Sous-titre : Faits historiques */}
          <h2 className="collapse-title font-bold max-lg:text-sm text-secondary">
            Faits historiques
            <FontAwesomeIcon icon={faBookOpen} style={{ marginLeft: "1rem" }} />
          </h2>
          {/* La liste des Faits historiques */}
          <div className="flex flex-col">
            {isEventHistorielOpen &&
              eventHistorial.map((event, index) => (
                <a className="m-2 pl-2 text-sm text-accent" key={index}>
                  {event}
                </a>
              ))}
          </div>
        </section>
        {/* Contenu - Thèmes */}
        <section
          className={`collapse collapse-arrow max-h-[100px] overflow-hidden  ${
            isThemeOpen ? "max-h-screen transition-all duration-500 ease-in-out" : "max-h-0"
          }`}
        >
          {/* input cliquable pour ouvrir le menu déroulant vers le bas */}
          <input
            type="radio"
            name="my-accordion-2"
            className="cursor-pointer"
            checked={isThemeOpen}
            onChange={toggleThemes}
            onClick={toggleThemes}
          />
          {/* Sous-titre : Thèmes */}
          <h2 className="collapse-title font-bold max-lg:text-sm text-secondary">
            Thèmes
            <FontAwesomeIcon icon={faFlag} style={{ marginLeft: "1rem" }} />
          </h2>
          {/* La liste des thèmes */}
          <div className="flex flex-col">
            {isThemeOpen &&
              themes.map((theme, index) => (
                <a
                  className={`m-2 pl-2 text-sm text-accent ${activeIndex === index ? "active" : ""}`}
                  key={index}
                  onClick={() => {
                    dispatch(getThemeId(theme.id));
                    handleItemClick(index);
                  }}
                >
                  {theme.theme_name}
                </a>
              ))}
          </div>
        </section>
        {/* Contenu - Accueil */}
        <section className="collapse border-y-2 rounded-none border-accent">
          <a href="/" className="collapse-title font-bold text-sm text-secondary">
            Accueil
            <FontAwesomeIcon icon={faHouse} style={{ marginLeft: "1rem" }} />
          </a>
        </section>
        {/* Contenu - About */}
        <section className="collapse rounded-none border-b-2 border-accent">
          <h2
            className="collapse-title font-bold first-letter:uppercase max-lg:text-sm text-secondary"
            onClick={openModal}
          >
            à propos
            <FontAwesomeIcon icon={faAddressCard} style={{ marginLeft: "1rem" }} />
          </h2>
        </section>
        {/* Logo de la ville de Gèneve */}
        <img src={logo} alt="Logo de la ville de Genève" className="w-1/2 mt-auto ml-auto mr-2 mb-2" />
      </aside>
      {/* Popup modal pour la page à propos */}
      <About sidebar={sidebar} isOpen={modal} />
    </div>
  );
}

export default Sidebar2;
