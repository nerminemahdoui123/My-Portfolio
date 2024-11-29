import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
    const { Icon, disc, title } = props;
    return (
        <Container>
            <span className='blue'><Icon /></span>
            <h1>{title}</h1>
            <p>{disc}</p>
        </Container>
    );
};

export default Card;

const Container = styled.div`
    width: 100%;
    max-width: 300px; /* Largeur maximale pour garantir l'uniformité */
    height: 400px; /* Hauteur fixe pour toutes les cartes */
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Aligne le contenu verticalement */
    align-items: center; /* Aligne le contenu horizontalement */
    border-radius: 10px; /* Coins arrondis pour une meilleure esthétique */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre pour un effet de relief */

    span.blue {
        font-size: 4rem;
        color: #304674;
    }

    h1 {
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p {
        font-size: 0.8rem;
    }
`;
