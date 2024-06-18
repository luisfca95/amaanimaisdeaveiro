import '../styles/Adotar.css';

import React from "react";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

export default function Adopt() {
    const [animals, setAnimals] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        fetch("/animals.json")
        .then(response => response.json())
        .then(data => setAnimals(data.animals));
    }, []);

    const indexOfLastAnimal = currentPage * itemsPerPage;
    const indexOfFirstAnimal = indexOfLastAnimal - itemsPerPage;
    const currentAnimals = animals.slice(indexOfFirstAnimal, indexOfLastAnimal);

    const totalPages = Math.ceil(animals.length / itemsPerPage);

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
    
    const getSexIcon = (sex) => {
        if (sex === 'M') {
            return <FontAwesomeIcon icon={faMars} className="mars-icon" />;
        } else if (sex === 'F') {
            return <FontAwesomeIcon icon={faVenus} className="venus-icon" />;
        }
    };

    return (
        <div>
            <div className="banner">
                <h1>Adotar</h1>
                <img src="/images/banners/adotar.jpg" alt=""/>
            </div>
            <div className="content">
                <p>Caso pretenda adoptar um patudo, deverá preencher o formulário de pré-adopção, clicando <a href="https://docs.google.com/forms/d/e/1FAIpQLScMmQnDV5i6KQRLwAPzsigKC0Qz2WKYxlQGxm1CKZA0yw9RyQ/viewform" aria-label="Formulário de pré-adopção" target="_blank" rel="noopener noreferrer">aqui</a>.</p>
                <div className="dog">
                    {currentAnimals.map(animal => (
                        <div key={animal.id}>
                            <img src={animal.image} alt={animal.name} />
                            <p>{animal.name} {getSexIcon(animal.sex)}</p>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button onClick={handlePreviousClick} disabled={currentPage === 1}>
                        «
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
                        »
                    </button>
                </div>
            </div>

        </div>
    );
}
