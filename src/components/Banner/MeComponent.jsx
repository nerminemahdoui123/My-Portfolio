import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import { FaSmile } from "react-icons/fa";
const MeComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello  <FaSmile /> <span className="blue">I'am</span>
          </h4>
          <h1 className="blue">Nermine Mahdoui</h1>
          <h3>welcome to nermine world</h3>
          <p>this website describe me and my projects</p>
          <button>Let's talk</button>
          <Social>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src="/bannerUser.png" alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default MeComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #304674;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #304674);
    :hover {
      filter: drop-shadow(0px 10px 10px #304674);
    }
  }

  .blue {
    color: #304674;
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #f0f0f0;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.3s ease, transform 0.3s ease;

      :hover {
        transform: scale(1.2);
      }

      &:nth-child(1) {
        background-color: #0077b5;
      }
      &:nth-child(2) {
        background-color: #0077b5;
      }
      &:nth-child(3) {
        background-color: #0077b5;
      }
    }

    a {
      color: #fff;
      font-size: 1.2rem;
    }
  }
`;

const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
