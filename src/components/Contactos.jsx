import { useState } from 'react';
import '../styles/Contactos.css';

export default function Contactos() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            nome: event.target.nome.value,
            email: event.target.email.value,
            comments: event.target.comments.value
        };

        console.log(formData);

        event.target.nome.value = '';
        event.target.email.value = '';
        event.target.comments.value = '';

        setShowSuccessMessage(true);

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    }

    return (
        <div>
            <div className="banner">
                <img src="/images/banners/contactos.jpg" alt=""/>
                <div className="title"><h1>Contactos</h1></div>
            </div>
            <main className="content contacts">
                <div className="map">
                    <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3026.2980692116275!2d-8.590178923976532!3d40.667400971400276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQwJzAyLjYiTiA4wrAzNScxNS40Ilc!5e0!3m2!1spt-PT!2spt!4v1716824860415!5m2!1spt-PT!2spt" width="450" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </div>
                <div className="contactUs">
                    <form onSubmit={ handleSubmit }>
                        <h2>Escreva-nos uma mensagem</h2>
                        <input type="text" placeholder="Nome" aria-label="Nome" name="nome" />
                        <input type="email" placeholder="E-mail" aria-label="E-mail" name="email" />
                        <textarea placeholder="Comentários" aria-label="Comentários" name="comments" />
                        <button type="submit">Enviar</button>
                        {showSuccessMessage && (
                        <div className="successMessage">
                            Mensagem enviada com sucesso!
                        </div>
                    )}
                    </form>
                </div>
            </main>
        </div>
    );
}
