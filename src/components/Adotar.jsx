import '../styles/Adotar.css';

import React from "react";
import { useState, useEffect } from "react";

export default function Adotar() {
    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        fetch("/animais.json")
        .then(response => response.json())
        .then(data => setAnimais(data.animais));
    }, []);

    return (
        <div className="content">
            <h1>Animais disponíveis para adoção</h1>
            <p>Caso pretenda adoptar um patudo, deverá preencher o formulário de pré-adopção, clicando <a href="https://docs.google.com/forms/d/e/1FAIpQLScMmQnDV5i6KQRLwAPzsigKC0Qz2WKYxlQGxm1CKZA0yw9RyQ/viewform" aria-label="Formulário de pré-adopção" target="_blank" rel="noopener noreferrer">aqui</a>.</p>
            <p></p>
            <div className="dog">
                {animais.map(animal => (
                    <div key={animal.id}>
                        <img src={animal.foto} alt=""/>
                        <p>{animal.nome}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}