import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  openAboutModal,
  toggleSidebar,
} from '../../redux/reducers/interaction';
import logo from '/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faHouse,
  faImagePortrait,
  faFlag,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { themes } from '../../data/themes';
import { eventHistorial } from '../../data/event';
import { personnes } from '../../data/personnes';
import About from '../Modal/About';
import { Link } from 'react-router-dom';

function Sidebar() {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.interaction.sidebar);
  const modal = useAppSelector((state) => state.interaction.aboutModal);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleMenu1() {
    setIsOpen1(!isOpen1);
    setIsOpen2(false); // Ferme le menu 2
    setIsOpen3(false); // Ferme le menu 3
  }

  function toggleMenu2() {
    setIsOpen2(!isOpen2);
    setIsOpen1(false); // Ferme le menu 1
    setIsOpen3(false); // Ferme le menu 3
  }

  function toggleMenu3() {
    setIsOpen3(!isOpen3);
    setIsOpen1(false); // Ferme le menu 1
    setIsOpen2(false); // Ferme le menu 2
  }

  return (
    <div
      className={`Sidebar absolute z-[999] ${sidebar ? 'lg:w-96' : 'w-full'}`}
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
      {/* Contenu de sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 lg:w-96 w-64 h-screen transition-transform duration-[900ms] ${
          sidebar ? 'lg:translate-x-0' : '-translate-x-full'
        } bg-white dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 flex flex-col">
          {/* Titre */}
          <div className="collapse bg-transparent">
            <h1
              className={`collapse-title font-bold text-[#cd3030] text-2xl uppercase text-left mb-2 ${
                isOpen2 && 'mb-72'
              }`}
            >
              Héritage raciste dans l'espace public genevois
            </h1>
          </div>
          {/* Tiret */}
          <div className="bg-[#cd3030] w-full h-[2px] my-2"></div>
          {/* Acceuil */}
          <div className="collapse bg-transparent">
            <Link
              className={`collapse-title text-base font-semibold ${
                isOpen2 && 'mb-28'
              }`}
              to="/"
            >
              Accueil
              <FontAwesomeIcon icon={faHouse} style={{ marginLeft: '1rem' }} />
            </Link>
          </div>
          {/* A propos */}
          <div className="collapse bg-transparent">
            <button
              className={`collapse-title text-left text-base font-semibold first-letter:uppercase  ${
                isOpen2 && 'mb-28'
              }`}
              onClick={() => {
                dispatch(openAboutModal());
              }}
            >
              À propos
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ marginLeft: '1rem' }}
              />
            </button>
          </div>
          {/* Tiret */}
          <div className="bg-[#cd3030] w-full h-[2px] my-2"></div>
          {/* Themes */}
          <div className="collapse collapse-arrow bg-transparent">
            <input
              type="radio"
              name="my-accordion-1"
              className="cursor-pointer"
              checked={isOpen1}
              onClick={toggleMenu1}
            />
            <div
              className={`collapse-title text-base font-semibold normal-cas ${
                isOpen2 && 'mb-28'
              }`}
            >
              Thèmes
              <FontAwesomeIcon icon={faFlag} style={{ marginLeft: '1rem' }} />
            </div>
            <div
              className={`collapse-content ${
                isOpen1 ? 'open flex flex-col' : ''
              }`}
            >
              {themes.map((e, index) => (
                <a key={index} href="#" className="mb-2 p-2 rounded-box">
                  {e}
                </a>
              ))}
            </div>
          </div>
          {/* Faits */}
          <div className="collapse collapse-arrow bg-transparent">
            <input
              type="radio"
              name="my-accordion-3"
              className="cursor-pointer"
              checked={isOpen3}
              onClick={toggleMenu3}
            />
            <div
              className={`collapse-title text-base font-semibold normal-case hover:bg-yellow-400 hover:text-black rounded-box ${
                isOpen2 && 'mb-28'
              }`}
            >
              Faits historiques
              <FontAwesomeIcon icon={faBook} style={{ marginLeft: '1rem' }} />
            </div>
            <div
              className={`collapse-content ${
                isOpen3 ? 'open flex flex-col' : ''
              }`}
            >
              {eventHistorial.map((e, index) => (
                <a key={index} href="#" className="mb-2 p-2 rounded-box">
                  {e}
                </a>
              ))}
            </div>
          </div>
          {/* Personnages */}
          <div className="collapse collapse-arrow bg-transparent">
            <input
              type="radio"
              name="my-accordion-2"
              className="cursor-pointer"
              checked={isOpen2}
              onClick={toggleMenu2}
            />
            <div
              className={
                'collapse-title text-base font-semibold normal-case hover:text-black rounded-box'
              }
            >
              Personnages historiques
              <FontAwesomeIcon
                icon={faImagePortrait}
                size="lg"
                style={{ marginLeft: '1rem' }}
              />
            </div>
            <div
              className={`collapse-content${
                isOpen2 ? 'open flex flex-col overflow-auto ml-3' : ''
              }`}
            >
              {personnes.map((e, index) => (
                <a key={index} href="#" className="mb-2 p-2 rounded-box">
                  {e}
                </a>
              ))}
            </div>
          </div>

          <img
            src={logo}
            alt="logo de Genève Ville"
            className="mt-auto ml-auto w-1/2"
          />
        </div>
      </aside>
      <About sidebar={sidebar} isOpen={modal} />
    </div>
  );
}

export default Sidebar;
