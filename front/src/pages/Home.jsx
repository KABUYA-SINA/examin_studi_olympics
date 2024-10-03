import React from 'react';
import "../sass/base/_base.scss";
import "../sass/pages/_home.scss"

export default function Home() {
  return (
    <main className='home_main' data-testid="cypress-main">
      <div className="content_home">
        <h2 data-testid="h2">Bienvenue sur la page d'accueil de Olympics</h2>
        <div className="home_one">
          <h3>Un événement mondial, une célébration de l'excellence</h3>
          <p>
            Les Jeux Olympiques sont bien plus qu'une simple compétition sportive. 
            Ils rassemblent des athlètes du monde entier, symbolisant l'unité, la paix et le respect. 
            Chaque édition des Jeux est une occasion de célébrer le talent, la détermination et la passion des 
            sportifs, tout en mettant en avant les valeurs fondamentales de l'Olympisme.
          </p>
        </div>
        <div className="home_sec">
          <h3>Histoire des Jeux Olympiques</h3>
          <p>
            Nés de l'antiquité grecque, les Jeux Olympiques ont évolué au fil des siècles. 
            Ils ont été relancés en 1896 par Pierre de Coubertin, promouvant un retour à l'esprit sportif et à la convivialité internationale.
          </p>
        </div>
        <div className="home_third">
          <h3>Quelques épreuves phares des Jeux Olympiques</h3>
          <p>Les Jeux Olympiques comptent un large éventail de disciplines, tant aux Jeux d'été qu'aux Jeux d'hiver, 
            qui captivent des millions de spectateurs à travers le monde. Voici quelques-unes des épreuves les plus attendues :
          </p>
          <ul>
            <li>
              <span className="home_event">Natation</span>
              <p>
                Une autre discipline phare des Jeux d'été, où la vitesse et la technique sont essentielles. 
                Des épreuves comme le 100 mètres nage libre et le 200 mètres papillon mettent en lumière des athlètes aux capacités physiques hors du commun.
              </p>
            </li>
            <li>
              <span className="home_event">Gymnastique</span>
              <p>
                Discipline alliant force, grâce et flexibilité, la gymnastique 
                artistique est une compétition où les athlètes s'illustrent sur divers agrès, comme les barres asymétriques ou le sol.
              </p>
            </li>
            <li>
              <span className="home_event">Basket-ball</span>
              <p>
                Ce sport d'équipe est l'une des disciplines collectives les plus populaires des Jeux Olympiques. 
                Les meilleurs joueurs du monde se réunissent pour offrir des matchs spectaculaires, avec des nations comme les États-Unis, 
                la France ou l'Espagne qui rivalisent pour l'or.
              </p>
            </li>
            <li>
              <span className="home_event">Ski Alpin (Jeux d'hiver)</span>
              <p>
                Lors des Jeux d'hiver, des épreuves comme la descente et le slalom géant offrent des sensations fortes alors que les skieurs 
                dévalent les montagnes à grande vitesse.
              </p>
            </li>
            <li>
              <span className="home_event">Patinage artistique (Jeux d'hiver)</span>
              <p>Ce sport met en valeur la grâce et la précision des athlètes qui enchaînent des figures complexes sur glace, alliant performance athlétique 
                et créativité artistique.</p>
            </li>
          </ul>
        </div>
        <div className="home_four">
          <h3>Les valeurs olympiques</h3>
          <p>
            Les valeurs de l'Olympisme se résument en trois mots : Excellence, Amitié, Respect. 
            Ces principes guident les athlètes, les organisateurs et les spectateurs, encourageant un esprit de compétition sain et une communauté unie.
          </p>
        </div>
        <div className="home_five">
          <h3>Prochaines éditions</h3>
          <p>Les Jeux Olympiques se déroulent tous les quatre ans. Les prochaines éditions auront lieu à :</p>
          <br />
          <p className='home_event'>Jeux d'été : Paris 2024</p>
          <p className='home_event'>Jeux d'hiver : Milan-Cortina 2026</p>
        </div>
        <div className="home_six">
          <h4>Comment participer</h4>
          <p>Que vous soyez athlète, spectateur ou bénévole, les Jeux Olympiques offrent une multitude d'opportunités de s'engager. 
            Suivez les sélections, assistez aux compétitions ou rejoignez les équipes de bénévoles pour vivre l'expérience olympique de près.</p>
        </div>
        <div className="home_sev">
          <h4>Suivez-nous</h4>
          <p>
            Restez informé des dernières actualités, résultats et événements en suivant nos réseaux sociaux et notre newsletter. 
            Ensemble, célébrons l'esprit olympique !
          </p>
        </div>
        <div className="home_eight"></div>
      </div>
    </main>
  )
}