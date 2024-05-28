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