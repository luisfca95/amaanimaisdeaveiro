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
        <div>
            <h1>Animais disponíveis para adoção</h1>
            <ul>
                {animais.map(animal => (
                    <li key={animal.id}>{animal.nome}</li>
                ))}
            </ul>
        </div>
    );
}