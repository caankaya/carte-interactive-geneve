import { useState } from 'react';
import logo from '/logo.png';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  getThemeId,
  openAboutModal,
  toggleSidebar,
} from '../../redux/reducers/interaction';
import { Link } from 'react-router-dom';
import { themes } from '../../data/themes';
import { eventHistorial } from '../../data/event';
import { personnes } from '../../data/personnes';
import About from '../Modal/About';

function Sidebar2() {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.interaction.sidebar);
  const modal = useAppSelector((state) => state.interaction.aboutModal);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isEventHistorielOpen, setIsEventHistorielOpen] = useState(false);
  const [isPersonOpen, setIsPersonOpen] = useState(false);

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
    <div
      className={`Sidebar absolute z-[999] flex flex-col ${
        sidebar ? 'lg:w-96' : 'w-full'
      }`}
    >
      <button
        type="button"
        className={`lg:focus:outline-none absolute bg-white p-3 rounded-full mx-5 duration-1000 mt-5 ${
          sidebar ? 'ml-[280px]' : ''
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
      <aside
        className={`h-screen overflow-y-auto fixed top-0 left-0 lg:w-96 w-64 ${
          sidebar
            ? 'lg:translate-x-0 duration-1000'
            : '-translate-x-full duration-1000'
        } bg-white dark:bg-gray-800`}
      >
        <h1
          className={`collapse-title font-bold text-[#cd3030] text-2xl uppercase text-left mb-2`}
        >
          la carte interactive
        </h1>
        {/* Personnages Historiques */}
        <ul
          className={`collapse collapse-arrow max-h-[100px] overflow-hidden ${
            isPersonOpen
              ? 'max-h-screen transition-all duration-1000 ease-in-out'
              : 'max-h-0'
          }`}
        >
          <input
            type="radio"
            name="my-accordion-2"
            checked={isPersonOpen}
            onChange={togglePerson}
          />
          <h2 className="collapse-title">Personnages historiques</h2>
          {isPersonOpen &&
            personnes.map((personne, index) => (
              <li className="m-2 pl-2 text-sm" key={index}>
                {personne}
              </li>
            ))}
        </ul>
        {/* Faits Historiques */}
        <ul
          className={`collapse collapse-arrow max-h-[100px] overflow-hidden ${
            isEventHistorielOpen
              ? 'max-h-screen transition-all duration-1000 ease-in-out'
              : 'max-h-0'
          }`}
        >
          <input
            type="radio"
            name="my-accordion-2"
            checked={isEventHistorielOpen}
            onChange={toggleEventHistoriel}
          />
          <h2 className="collapse-title">Faits historiques</h2>
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
          className={`collapse collapse-arrow max-h-[100px] overflow-hidden ${
            isThemeOpen
              ? 'max-h-screen transition-all duration-1000 ease-in-out'
              : 'max-h-0'
          }`}
        >
          <input
            type="radio"
            name="my-accordion-2"
            checked={isThemeOpen}
            onChange={toggleThemes}
          />
          <h2 className="collapse-title">Thèmes</h2>
          {isThemeOpen && (
            <>
              {themes.map((theme, index) => (
                <li
                  className="m-2 pl-2 text-sm"
                  key={index}
                  onClick={() => {
                    dispatch(getThemeId(theme.id));
                  }}
                >
                  <button>{theme.theme_name}</button>
                </li>
              ))}
            </>
          )}
        </ul>
        {/* Accueil */}
        <ul className="collapse">
          <h2 className="collapse-title">
            <Link to={'/'}>Accueil</Link>
          </h2>
        </ul>
        {/* About */}
        <ul className="collapse">
          <h2
            className="collapse-title first-letter:uppercase"
            onClick={openModal}
          >
            à propos
          </h2>
        </ul>

        {/* Logo */}
        <img src={logo} alt="" className="w-1/2 ml-auto mt-auto" />
      </aside>
      <About sidebar={sidebar} isOpen={modal} />
    </div>
  );
}

export default Sidebar2;
