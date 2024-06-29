import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import '../styles/NavBar.css';

export default function NavBar() {
    useEffect(() => {
        const hamburger = document.getElementById("hamburger");
        const navbar = document.getElementById("navbar");

        hamburger.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });

        return () => {
            hamburger.removeEventListener("click", () => {
                navbar.classList.toggle("active");
            });
        };
    }, []);

    return (
        <div>
            <nav>
                <div className="hamburgerBar">
                    <button className="hamburger" id="hamburger">&#9776;</button>
                </div>
                <ul className="navbar" id="navbar">
                    <li><NavLink to="/SobreNos" className="sobre">Sobre</NavLink></li>
                    <li><NavLink to="/Adotar">Adotar</NavLink></li>
                    <li><NavLink to="/Ajudar">Ajudar</NavLink></li>
                    <li><NavLink to="/Doar">Doar</NavLink></li>
                    <li><NavLink to="/Contactos">Contactos</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}
