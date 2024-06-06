import { NavLink } from "react-router-dom";

import '../styles/NavBar.css';

export default function NavBar() {
    return (
        <div>
            <nav>
                <ul className="navbar">
                    <li><NavLink to="/SobreNos">SOBRE A AMA</NavLink></li>
                    <li><NavLink to="/Adotar">ADOTAR</NavLink></li>
                    <li><NavLink to="/Ajudar">AJUDAR</NavLink></li>
                    <li><NavLink to="/Doar">DOAR</NavLink></li>
                    <li><NavLink to="/Contactos">CONTACTOS</NavLink></li>
                </ul>
            </nav>
            <div className="banner">
                <img src="/images/banner.jpg" alt=""/>
            </div>
        </div>
    );
}