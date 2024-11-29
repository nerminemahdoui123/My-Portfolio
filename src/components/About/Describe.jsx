import React from 'react';
import styled from 'styled-components';
import { FaCode, FaLaptopCode, FaMobileAlt, FaFemale } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';

const Describe = () => {
  return (
    <Container id="describe">
      <Slide direction="left">
        <span className="green">About Me</span>
        <h1>Who I Am</h1>
      </Slide>
      <Card>
        <Profile>
          <ProfileWrapper>
          
            <FaFemale className="icon" />
          </ProfileWrapper>
        </Profile>
        <Content>
          <p>
            I am a Software Engineering student specializing in mobile and web development. I combine advanced technical skills, rapid adaptability to new technologies, and a strong focus on user experience to design innovative and high-performance solutions.
          </p>
          <Icons>
            <div>
              <FaCode className="icon" />
              <p>Code</p>
            </div>
            <div>
              <FaLaptopCode className="icon" />
              <p>Web Development</p>
            </div>
            <div>
              <FaMobileAlt className="icon" />
              <p>Mobile Development</p>
            </div>
          </Icons>
        </Content>
      </Card>
    </Container>
  );
};

export default Describe;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
    color: #304674;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

const Profile = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #01be96;
  }

  .icon {
    position: absolute;
    font-size: 150px;
    color: rgba(255, 255, 255, 0.3);
  }
`;

const Content = styled.div`
  flex: 2;
  padding-left: 2rem;

  @media (max-width: 840px) {
    padding-left: 0;
    margin-top: 1.5rem;
    text-align: center;
  }

  p {
    color: #fff;
    line-height: 1.8;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #304674;

    .icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #fff;
    }
  }
`;
