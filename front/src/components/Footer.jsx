import React from 'react'
import { Link } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa6";
import logo2 from  "../assets/logo/logo_2.png"
import "../sass/layout/_footer.scss";

export default function Footer() {
  return (
   <footer className="footer-olympics" data-testid="footer">
        <div className="footer_first">
            <div className="footer_image">
                <img src={logo2} alt="olympics game second logo" className='logo_footer' />
            </div>
            <div className="footer_text" data-testid="footer-list">
                <nav className='footer_nav_one'>
                    <ul className="footer_list_first">
                        <span>Jeux Olympiques</span>
                        <li>Calendrier & Résultats</li>
                        <li>Tableau des médailles</li>
                        <li>Sports</li>
                        <li>Sites</li>
                    </ul>
                    <ul className="footer_list_second">
                        <span>Célébrer les Jeux</span>
                        <li>Célébrer les Jeux</li>
                        <li>Parc des Champions</li>
                    </ul>
                    <ul className="footer_list_third">
                        <span>Spectateurs</span>
                        <li>Infos spectateurs</li>
                        <li>Billetterie</li>
                        <li>La boutique des Jeux</li>
                        <li>Une question ?</li>
                    </ul>
                    <ul className="footer_list_fourth">
                        <span>Relais de la Flamme</span>
                        <li>Aperçu</li>
                        <li>Parcours</li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="footer_second" data-testid="footer-list">
            <nav className='footer_nav_second'>
                <ul>
                    <li>Olympics.com</li>
                    <li>Olympic Channel</li>
                    <li>CIO</li>
                    <li>Musée</li>
                    <li>La Boutique Olympique</li>
                    <li>Olympic Refuge Foundation</li>
                    <li>
                        <Link
                            to='https://github.com/KABUYA-SINA'
                            target='_blank'
                            rel='noreferrer'
                            title='github'
                            className='git'
                        >
                            <FaGithubAlt />
                        </Link >
                    </li>
                </ul>
            </nav>
        </div>
        <div className="footer_third"></div>
   </footer>
  )
}
