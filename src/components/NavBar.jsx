import { NavLink } from "react-router-dom";

import '../styles/NavBar.css';

export default function NavBar() {
    return (
        <nav>
            <ul className="navbar">
                <li><NavLink to="/SobreNos">Sobre a AMA</NavLink></li>
                <li><NavLink to="/Adotar">Adotar</NavLink></li>
                <li><NavLink to="/Voluntariado">Voluntariado</NavLink></li>
                <li><NavLink to="/Doar">Doar</NavLink></li>
                <li><NavLink to="/Contactos">Contactos</NavLink></li>
            </ul>
        </nav>
    );
}