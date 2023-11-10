import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { openAboutModal } from "../../redux/reducers/interaction";

interface IAbout {
  sidebar: boolean;
  isOpen: boolean;
}

function About({ sidebar, isOpen }: IAbout) {
  const dispatch = useAppDispatch();

  function closeModal() {
    dispatch(openAboutModal());
  }

  return (
    <div className="About">
      <dialog id="my_modal_1" className="modal" open={isOpen}>
        <div
          className={`modal-box w-11/12 max-w-5xl ${
            sidebar ? "ml-[400px]" : ""
          }`}
        >
          <h3 className="font-bold text-lg first-letter:uppercase max-lg:text-base">
            à propos
          </h3>
          <p className="py-4 max-lg:text-sm">
            Depuis novembre 2020, la Ville mène un processus de réflexion sur la
            question des {""}
            <Link
              to="https://www.geneve.ch/fr/themes/developpement-durable/municipalite/engagements-societe/egalite-diversite/diversite-culturelle/actions-sensibilisation/monuments-heritage-raciste-espace-public"
              target="_blank"
              className="underline font-bold max-lg:text-sm"
            >
              hommages rendus dans l’espace public
            </Link>{" "}
            à des personnalités ayant encouragé le racisme et le colonialisme.
            Cette carte permet de visualiser les monuments et symboles présents
            en ville de Genève qui font référence à cette question.
          </p>
          <p className="py-4 max-lg:text-sm">
            Elle est principalement basée sur{" "}
            <Link
              to="https://www.geneve.ch/fr/document/monuments-heritage-raciste-colonial-espace-public-etude-2022-ville-geneve"
              target="_blank"
              className="underline font-bold max-lg:text-sm"
            >
              l’étude
            </Link>
            , commandée par la Ville et publiée en mars 2022, « Temps, espaces
            et histoires. Monuments et héritage raciste et colonial dans
            l’espace public genevois : état des lieux historique », des
            professeurs Mohamed Mahmoud Mohamedou et Davide Rodogno, de
            l’Institut de hautes études internationales et du développement
            (IHEID).
          </p>
          <p className="py-4 max-lg:text-sm">
            Projet initié dans le cadre du{" "}
            <Link
              to="https://opendata.ch/fr/evenements/glamhack2023/"
              target="_blank"
              className="underline font-bold max-lg:text-sm"
            >
              GLAMhack 2023
            </Link>
            , la carte est amenée à évoluer au fil du temps. Elle est présentée
            pour la première fois lors de l’exposition temporaire du Musée
            d’ethnographie de Genève (MEG) « Mémoires. Genève dans le monde
            colonial » (03.05.2024 - 05.01.2025).
          </p>
          <p className="font-bold mb-3 max-lg:text-sm">Crédits :</p>
          <p className="font-bold mb-3 max-lg:text-sm">Direction de projet</p>
          <p className="max-lg:text-sm">
            Musée d’ethnographie de Genève (MEG), Ville de Genève
          </p>
          <p className="mb-5 max-lg:text-sm">
            Service Agenda 21 – Ville durable (A21), Ville de Genève
          </p>
          <p className="font-bold mb-3 max-lg:text-sm">
            Participation dans le cadre du GlamHack 2023
          </p>
          <ul>
            <li className="max-lg:text-sm">
              <span className="font-bold max-lg:text-sm">
                Bertrand Cassegrain (A21) :
              </span>{" "}
              porteur du challenge
            </li>
            <li className="max-lg:text-sm">
              <span className="font-bold max-lg:text-sm">
                Felipe Covaleda :
              </span>{" "}
              conception de la base de données
            </li>
            <li className="max-lg:text-sm">
              <span className="font-bold max-lg:text-sm">
                Julie Dorner (MEG) :
              </span>{" "}
              porteuse du challenge
            </li>
            <li className="max-lg:text-sm">
              <span className="font-bold max-lg:text-sm">Ana Hug Buffo :</span>{" "}
              conception de la base de données
            </li>
            <li className="max-lg:text-sm">
              <span className="font-bold max-lg:text-sm">Flor Méchain :</span>{" "}
              iconographie et droits d’auteurs
            </li>
            <li className="max-lg:text-sm">
              <span className="font-bold max-lg:text-sm">Iolanda Pensa :</span>{" "}
              contenu wikidata et wikimedia commons
            </li>
            <li className="max-lg:text-sm">
              <span className="font-bold max-lg:text-sm">Can Kaya :</span>{" "}
              développement de l’interface utilisateur
            </li>
          </ul>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn normal-case max-lg:btn-sm max-lg:text-sm"
                onClick={closeModal}
              >
                Fermer
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default About;
