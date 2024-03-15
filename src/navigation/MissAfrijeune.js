import React, { useEffect } from "react";
import { GiSharpCrown } from "react-icons/gi";
import affichemiss from "./../assets/miss/affichemiss.jpg";

import logomiss from "./../assets/miss/Logo.png";

//  css imports
import "./../styles/pages/miss.css";

function MissAfrijeune() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll jusqu'au début de la page lorsque le composant est monté
  }, []);
  return (
    <div>
      <section className="hero-section-secondary-miss overflow-hidden">
        <div className="overlay-miss">
          <div className="scroll-container-miss">
            <GiSharpCrown />
          </div>
        </div>
        <img className="miss-logo" src={logomiss} alt="logomiss" />
      </section>

      <section className="hero-miss-section">
        <div className="hero-miss-container relative">
          <div className="home-votes-body">
            <div className="home-votes-info">
              <h4 className="miss-title">C'est quoi Miss Afrijeune ?</h4>
              <p className="miss-title-description">
                Miss Afrijeune n'est pas simplement un concours de beauté, mais
                une plateforme qui s'étend sur huit (08) semaines, chaque
                semaine étant dédiée à une activité spécifique. Ses objectifs
                incluent la valorisation des médias, la lutte contre la
                sous-information, la promotion de l'information de qualité et
                l'égalité médiatique.
              </p>
              <p>
                En mettant en lumière les talents et les réalisations des jeunes
                femmes, Miss Afrijeune inspire les générations futures et
                contribue à façonner un avenir prometteur pour le continent
                africain.
              </p>
            </div>
            <div className="home-votes-cover">
              <img
                alt="julia"
                src={logomiss}
                // src="https://reglo.org/admin/posts_images/5-61f8232d353cf.jpeg"
                className="hero-miss-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="affiche-section">
        <img src={affichemiss} className="affiche-miss" alt="affiche" />
      </section>
      <section className="subscribe">
        <div className="miss-inscription">
          <div class="projects-rich-text w-richtext justify">
            <h2>Comment participer</h2>
            <p>
              Pour participer à Miss Afrijeune, vous, jeunes femmes de tous les
              pays d'Afrique, êtes invitées à suivre notre processus
              d'inscription bien défini. Voici les étapes que vous devez suivre
            </p>
            <p>‍</p>
            <ol>
              <li>
                <span>Vérifier les critères d'éligibilité</span> <br />{" "}
                Assurez-vous de répondre aux critères d'éligibilité que nous
                avons établis, incluant des conditions telles que l'âge, la
                nationalité, la taille, l'éducation, etc.
              </li>
              <li>
                <span>Inscription en ligne ou à notre agence</span> <br />{" "}
                Remplissez notre formulaire d'inscription en ligne ou
                rendez-vous directement à notre agence pour vous inscrire.
                Fournissez avec précision vos informations personnelles telles
                que votre nom, votre âge, votre taille, votre profession, vos
                coordonnées, etc.
              </li>
              <li>
                <span>
                  Préparation de votre portfolio ou de documents supplémentaires
                </span>{" "}
                <br /> En plus du formulaire d'inscription, nous vous invitons à
                fournir un portfolio de photos, des vidéos ou d'autres documents
                mettant en valeur vos réalisations, vos talents, vos engagements
                sociaux, etc.
              </li>
              <li>
                <span>
                  Audition en ligne pour les candidates hors de la ville
                </span>{" "}
                <br /> Pour celles qui ne sont pas dans la ville, vous pouvez
                être auditionnées en ligne. Assurez-vous de contacter notre
                équipe pour organiser votre audition à distance.
              </li>
              <li>
                <span>Exigez un reçu</span> <br /> À toutes les étapes du
                processus, exigez un reçu confirmant votre participation. Cela
                garantira la transparence et la traçabilité de votre parcours
                dans le concours.
              </li>
            </ol>
            <p>‍</p>
          </div>
          {/* <div class="projects-rich-text w-richtext justify">
            <h2>Déroulement du concours</h2>
            <p>‍</p>
            <ol>
              <li>
                <span>Appel à candidatures :</span> Du lundi 11 mars au dimanche
                31 mars 2024. <br /> Les organisateurs lancent un appel à
                candidatures, invitant les jeunes femmes éligibles à postuler
                pour participer au concours.
              </li>
              <li>
                <span>Inscriptions :</span> Du lundi 11 mars au dimanche 31 mars
                2024. <br /> Les candidates intéressées soumettent leur
                candidature en remplissant un formulaire d'inscription en ligne
                ou en personne. Elles fournissent généralement des informations
                personnelles, des photos et parfois des vidéos pour accompagner
                leur candidature.
              </li>
              <li>
                <span>Sélection préliminaire :</span> Du lundi 1er avril au
                dimanche 7 avril 2024. <br /> Les organisateurs examinent les
                candidatures et sélectionnent un groupe de demi-finalistes ou de
                finalistes, en fonction de critères tels que l'apparence,
                l'éloquence, les réalisations personnelles et sociales, etc.
              </li>
              <li>
                <span>Préparation des finalistes :</span> Du lundi 8 avril au
                dimanche 21 avril 2024. <br /> Les finalistes sélectionnées
                participent à des séances d'entraînement, des sessions de
                coaching, des répétitions et d'autres activités pour se préparer
                à la compétition finale.
              </li>
              <li>
                <span>Événements préliminaires :</span> Du lundi 22 avril au
                dimanche 28 avril 2024. <br /> Avant la grande finale, il peut y
                avoir des événements préliminaires tels que des défilés de mode,
                des séances de photos, des activités de sensibilisation sociale,
                etc., où les finalistes ont l'occasion de briller et d'interagir
                avec le public.
              </li>
              <li>
                <span>La grande finale :</span> Samedi 29 avril 2024. <br />{" "}
                C'est l'événement principal où les finalistes se présentent
                devant un jury et un public. Elles défilent en tenue de soirée
                et en maillot de bain, répondent à des questions posées par le
                jury et présentent leurs projets sociaux ou leurs aspirations
                futures.
              </li>
              <li>
                <span>Couronnement :</span> Samedi 29 avril 2024. <br /> À la
                fin de la soirée, une gagnante est couronnée Miss Afrijeune. Des
                titres supplémentaires tels que Miss Sympathie, Miss
                Photogénique, etc., peuvent également être décernés en fonction
                des performances individuelles des candidates.
              </li>
              <li>
                <span>Après le concours :</span> À partir du dimanche 30 avril
                2024. <br /> La gagnante et les autres finalistes peuvent
                s'impliquer dans des activités caritatives, des projets
                communautaires ou des campagnes de sensibilisation en tant
                qu'ambassadrices de Miss Afrijeune.
              </li>
            </ol>
            <p>‍</p>
          </div> */}
          <div class="projects-rich-text w-richtext justify">
            <h2>Lots à gagner</h2>
            <p>Voici les superbes récompenses qui vous attendent : ‍</p>
            <p></p>
            <ul>
              <li>
                <span>Contrat de sponsoring :</span> <br /> Vous aurez la chance
                de remporter un contrat exclusif avec l'agence Point Solutions
                Group, offrant des opportunités de promotion d'image et de
                sponsoring exceptionnelles.
              </li>
              <li>
                <span>Séjour dans un hotel:</span> <br /> La deuxième dauphine
                bénéficiera d'un séjour de deux jours et deux nuits dans un
                hôtel, avec tous les frais pris en charge par notre agence.
              </li>
              <li>
                <span>Cadeaux de luxe :</span> <br /> En plus de ces magnifiques
                prix, des cadeaux de luxe vous seront également offerts.
              </li>
            </ul>
            <p>‍</p>
          </div>
          <div class="projects-rich-text w-richtext justify">
            <h2>déroulement du mandat</h2>
            <p>
              Voici le déroulement prévu pour le mandat de Miss Afrijeune 2024
            </p>
            <p>‍</p>
            <ol>
              <li>
                <span>Élection de la Miss Afrijeune </span> <br /> La gagnante
                est couronnée Miss Afrijeune 2024 lors de la grande finale de
                l'événement. Elle est choisie par un jury sur la base de
                critères tels que le charisme, l'éloquence, la beauté et
                l'engagement envers des causes sociales.
              </li>
              <li>
                <span>Prise de fonctions</span> <br /> La Miss Afrijeune 2024
                commence son mandat immédiatement après avoir été couronnée.
                Elle accepte formellement son rôle d'ambassadrice de la jeunesse
                africaine et de porte-parole des initiatives de Miss Afrijeune.
              </li>
              <li>
                <span>Planification des activités</span> <br /> La Miss
                Afrijeune travaille avec l'équipe de Miss Afrijeune pour
                planifier ses activités et ses engagements tout au long de son
                mandat. Cela peut inclure des événements caritatifs, des
                conférences, des séances de sensibilisation et des apparitions
                médiatiques.
              </li>
              <li>
                <span>Participation aux événements</span> <br /> La Miss
                Afrijeune assiste à divers événements nationaux et
                internationaux en tant que représentante officielle de Miss
                Afrijeune. Elle promeut les valeurs de l'organisation et
                soutient les causes sociales qui lui tiennent à cœur.
              </li>
              <li>
                <span>Projet personnel </span> <br /> La Miss Afrijeune
                développe et met en œuvre un projet personnel axé sur une cause
                sociale ou communautaire qui lui tient à cœur. Elle travaille
                activement sur ce projet tout au long de son mandat.
              </li>
              <li>
                <span>Clôture du mandat</span> <br />À la fin de son mandat d'un
                an, la Miss Afrijeune 2024 passe le flambeau à sa successeure
                lors de la prochaine édition de Miss Afrijeune. Elle récapitule
                ses réalisations et son impact au cours de son année de règne
                lors de la cérémonie de passation de couronne.
              </li>
            </ol>
            <p>‍</p>
          </div>
        </div>
      </section>
      <section>
        <div className="container cta">
          <div className="center-text">
            <div className="grid-8-col">
              <div className="content paddings">
                <div>
                  <h2>
                    Participez dès maintenant à
                    <br />
                    Miss Afrijeune 2024
                  </h2>
                </div>
                <div>
                  <p>
                    Ne tardez pas davantage et inscrivez-vous dès maintenant
                    pour avoir la chance de devenir la prochaine Miss Afrijeune
                    et de faire entendre votre voix sur les enjeux qui comptent
                    pour la jeunesse africaine.
                  </p>
                </div>
                <div className="top-margin-1">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="button cta-button"
                    href="https://cutt.ly/xw0EC6TH"
                  >
                    S'inscrire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MissAfrijeune;
