'use client'

import {useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa";

export default function NavBar() {
    const SwitchDarkModeButton = ({styleName = ""}) => {
        const [darkMode, setDarkMode] = useState(false);
        const globalStyle = "";

        return (
            <>
                <button className={globalStyle} onClick={() => {setDarkMode(!darkMode);
                    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark')}}>
                    {darkMode ? (
                        <FaSun className="text-2xl"/>
                    ) : (
                        <FaMoon className="text-2xl"/>
                    )}
                </button>
            </>
        );
    }

    return (<>
        <nav>
            <span className="nav-brand">{"//"} EB_PORTFOLIO · Étudiant Ingénieur · Énergie & Villes du Futur · 2026</span>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#apropos">À propos</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><SwitchDarkModeButton/></li>
            </ul>
            <div className="nav-status">
                <div className="status-dot"></div>
                <span>Disponible · 2026-2027</span>
            </div>
        </nav>
    </>);
}