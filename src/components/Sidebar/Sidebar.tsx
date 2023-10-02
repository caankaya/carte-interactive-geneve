import { useState } from 'react';
import logo from '/logo.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getThemeId, openAboutModal, toggleSidebar } from '../../redux/reducers/interaction';
import { themes } from '../../data/themes';
import { eventHistorial } from '../../data/event';
import { personnes } from '../../data/personnes';
import About from '../Modal/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBookOpen, faFlag, faHouse, faImagePortrait } from '@fortawesome/free-solid-svg-icons';

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
    <div className={`Sidebar absolute z-[999] ${sidebar ? 'lg:w-96' : 'w-full'}`}>
      {/* Menu Burger */}
      <button
        type="button"
        className={`lg:focus:outline-none absolute bg-white p-3 rounded-full mx-5 duration-1000 mt-5 ${
          sidebar ? 'ml-[263px]' : ''
        } ${sidebar ? 'lg:ml-[400px]' : ''}`}
        onClick={() => {
          dispatch(toggleSidebar(sidebar));
        }}
      >
        <span
          className={`block h-1 w-6 bg-base-content rounded-full transition-all duration-1000 transform ${
            sidebar ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-base-content rounded-full mt-1 transition-all duration-1000 ${
            sidebar ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-base-content rounded-full mt-1 transition-all duration-1000 transform ${
            sidebar ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Contenu de la barre latérale */}
      <aside
        className={`h-screen overflow-y-auto fixed top-0 left-0 lg:w-96 w-64 ${!isPersonOpen ? 'flex flex-col' : ''} ${
          sidebar ? 'lg:translate-x-0 duration-1000' : '-translate-x-full duration-1000'
        } bg-white`}
      >
        {/* Titres */}
        <h1 className={`collapse-title font-bold text-[#cd3030] text-2xl uppercase text-left mb-2`}>
          héritage raciste dans l’espace public de genève
        </h1>

        {/* Personnages Historiques */}
        <ul
          className={`collapse collapse-arrow max-h-[100px] overflow-hidden rounded-none border-t-2
           ${isPersonOpen ? 'max-h-screen transition-all duration-1000 ease-in-out' : 'max-h-0'}`}
        >
          <input
            type="radio"
            name="my-accordion-2"
            className="cursor-pointer"
            checked={isPersonOpen}
            onChange={togglePerson}
            onClick={togglePerson}
          />
          <h2 className="collapse-title font-bold">
            Personnages historiques
            <FontAwesomeIcon icon={faImagePortrait} size="lg" style={{ marginLeft: '1rem' }} />
          </h2>
          {isPersonOpen &&
            personnes.map((personne, index) => (
              <li className="m-2 pl-2 text-sm" key={index}>
                {personne}
              </li>
            ))}
        </ul>

        {/* Faits Historiques */}
        <ul
          className={`collapse collapse-arrow max-h-[100px] overflow-hidden rounded-none border-y-2 ${
            isEventHistorielOpen ? 'max-h-screen transition-all duration-1000 ease-in-out' : 'max-h-0'
          }`}
        >
          <input
            type="radio"
            name="my-accordion-2"
            className="cursor-pointer"
            checked={isEventHistorielOpen}
            onChange={toggleEventHistoriel}
            onClick={toggleEventHistoriel}
          />
          <h2 className="collapse-title font-bold">
            Faits historiques
            <FontAwesomeIcon icon={faBookOpen} style={{ marginLeft: '1rem' }} />
          </h2>
          {isEventHistorielOpen && (
            <>
              {eventHistorial.map((event, index) => (
                <li className="m-2 pl-2 text-sm" key={index}>
                  {event}
                </li>
              ))}
            </>
          )}
        </ul>

        {/* Thèmes */}
        <ul
          className={`collapse collapse-arrow max-h-[100px] overflow-hidden  ${
            isThemeOpen ? 'max-h-screen transition-all duration-1000 ease-in-out' : 'max-h-0'
          }`}
        >
          <input
            type="radio"
            name="my-accordion-2"
            className="cursor-pointer"
            checked={isThemeOpen}
            onChange={toggleThemes}
            onClick={toggleThemes}
          />
          <h2 className="collapse-title font-bold">
            Thèmes
            <FontAwesomeIcon icon={faFlag} style={{ marginLeft: '1rem' }} />
          </h2>
          {isThemeOpen && (
            <>
              {themes.map((theme, index) => (
                <li
                  className={`m-2 pl-2 text-sm ${activeIndex === index ? 'active' : ''}`}
                  key={index}
                  onClick={() => {
                    dispatch(getThemeId(theme.id));
                    handleItemClick(index);
                  }}
                >
                  <button>{theme.theme_name}</button>
                </li>
              ))}
            </>
          )}
        </ul>

        {/* Accueil */}
        <ul className="collapse border-y-2 rounded-none">
          <h2 className="collapse-title font-bold">
            <a href={'/'}>
              Accueil
              <FontAwesomeIcon icon={faHouse} style={{ marginLeft: '1rem' }} />
            </a>
          </h2>
        </ul>

        {/* About */}
        <ul className="collapse rounded-none border-b-2">
          <h2 className="collapse-title font-bold first-letter:uppercase" onClick={openModal}>
            à propos
            <FontAwesomeIcon icon={faAddressCard} style={{ marginLeft: '1rem' }} />
          </h2>
        </ul>

        {/* Logo */}
        <img src={logo} alt="Logo de la ville de Genève" className={`w-1/2 mt-auto ml-auto mr-2 mb-2`} />
      </aside>

      {/* Popup modal pour la page à propos */}
      <About sidebar={sidebar} isOpen={modal} />
    </div>
  );
}

export default Sidebar2;
