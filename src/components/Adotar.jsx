import '../styles/Adotar.css';

import React from "react";
import { useState, useEffect } from "react";

export default function Adotar() {
    const [animais, setAnimais] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        fetch("/animais.json")
        .then(response => response.json())
        .then(data => setAnimais(data.animais));
    }, []);

    const indexOfLastAnimal = currentPage * itemsPerPage;
    const indexOfFirstAnimal = indexOfLastAnimal - itemsPerPage;
    const currentAnimals = animais.slice(indexOfFirstAnimal, indexOfLastAnimal);

    const totalPages = Math.ceil(animais.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <div className="banner">
                <img src="/images/banner.jpg" alt=""/>
                <div className="title"><h1>Adotar</h1></div>
            </div>
            <div className="content">
                <p>Caso pretenda adoptar um patudo, deverá preencher o formulário de pré-adopção, clicando <a href="https://docs.google.com/forms/d/e/1FAIpQLScMmQnDV5i6KQRLwAPzsigKC0Qz2WKYxlQGxm1CKZA0yw9RyQ/viewform" aria-label="Formulário de pré-adopção" target="_blank" rel="noopener noreferrer">aqui</a>.</p>
                <div className="dog">
                    {currentAnimals.map(animal => (
                        <div key={animal.id}>
                            <img src={animal.foto} alt={animal.nome} />
                            <p>{animal.nome}</p>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={handlePreviousClick} disabled={currentPage === 1}>
                        Anterior
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button 
                            key={index + 1} 
                            onClick={() => handleClick(index + 1)} 
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button onClick={handleNextClick} disabled={currentPage === totalPages}>
                        Próximo
                    </button>
                </div>
            </div>

        </div>
    );
}
