import '../styles/Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerSocial">
                <a href="https://www.facebook.com/AbrigoAMAveiro" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                </a>
                <a href="https://www.instagram.com/ama.animaisdeaveiro/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
            </div>
            <div className="footerAddress">
                <div>
                    <div className="addressIcon">
                        <FontAwesomeIcon icon={faLocationDot} className="icon" />
                    </div>
                    <div>
                        <address>
                            Rua da Infância, Quinta do Loureiro
                        </address>
                    </div>
                </div>
                <div>
                    <div className="emailIcon">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    </div>
                    <div>
                        <a href="mailto:amaanimaisaveiro@gmail.com">
                            amaanimaisaveiro@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
