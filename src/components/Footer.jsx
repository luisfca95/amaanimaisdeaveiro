import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-address">
                <address>
                    Rua da Infância <br/>
                    Quinta do Loureiro <br/>
                </address>

            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com/AbrigoAMAveiro">
                    Facebook
                </a>
                <a href="https://www.instagram.com/ama.animaisdeaveiro/">
                    Instagram
                </a>
            </div>
        </footer>
    );
}