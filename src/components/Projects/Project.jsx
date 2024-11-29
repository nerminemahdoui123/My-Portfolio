import React from 'react';
import styled from 'styled-components';

const Project = ({ item }) => {
    return (
        <Card>
            <ImageContainer>
                <img src={item.img} alt="project" />
            </ImageContainer>
            <p>{item.disc}</p>
        </Card>
    );
};

export default Project;

const Card = styled.div`
    padding: 1rem;
    text-align: center;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 1rem;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 300px; /* Augmenter la hauteur pour afficher plus de l'image */
    overflow: hidden;
    border-radius: 10px;
    padding: 10px; /* Ajouter un peu de padding pour espacer l'image des bords */

    img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Permet d'afficher toute l'image sans la couper */
        transition: transform 0.3s ease-in-out;
    }

    img:hover {
        transform: scale(1.05); /* Zoom léger au survol */
    }
`;
