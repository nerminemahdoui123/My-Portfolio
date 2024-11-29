import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { RiTestTubeLine } from "react-icons/ri";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Offer</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <StyledCard
            Icon={FaMobileAlt}
            title={"Mobile Development"}
            disc={`Creation of high-quality mobile applications for both Android and iOS platforms. Proficient in React Native and delivering smooth, user-friendly experiences.`}
          />
        </Slide>
        <Slide direction="up">
          <StyledCard
            Icon={CgWebsite}
            title={"Web Development"}
            disc={`Design and development of responsive and scalable web applications. Skilled in React, modern front-end frameworks, and backend integration.`}
          />
        </Slide>
        <Slide direction="right">
          <StyledCard
            Icon={RiTestTubeLine}
            title={"Software Testing"}
            disc={`Ensuring software quality through rigorous testing. Expertise in manual and automated testing to deliver reliable and bug-free solutions.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px; /* Hauteur uniforme pour toutes les cartes */
  padding: 1rem;
  background-color: #304674;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 3rem;
    color: #4caf50;
  }

  h3 {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    text-align: center;
    color: #555;
    font-size: 1rem;
    line-height: 1.5;
  }
`;
