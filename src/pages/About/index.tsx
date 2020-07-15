import React from 'react';
import { Link } from 'react-router-dom';

import Me from '../../assets/about-me.png';

import { Header, Description } from './styles';

const About: React.FC = () => (
  <>
    <Header>
      <Link id="misael" to="/">
        Misael
        <br />
        Augusto
      </Link>

      <Link id="contact" to="/contact">
        Contact
      </Link>
    </Header>
    <Description>
      <img src={Me} alt="Me" />
      <div>
        <p id="hi">Hi, I am Misael Augusto</p>
        <br />
        <p id="description">
          I was born in the city of Campina Grande, in the state of Paraíba.
          Today I am 20 and I am a student of Computer Science at Federal
          University of Campina Grande.
        </p>
        <br />
        <p id="description">
          I&apos;ve always been passionate about technology and all the
          possibilities it offers us to create solutions to our society&apos;s
          problems.
        </p>
        <br />
        <p id="description">
          I am currently studying web and mobile development. My main objective
          at the moment is to become a software engineer in any of these areas.
          In addition, in my spare time, I also try to put my creativity into
          practice by developing some simple logic games.
        </p>
      </div>
    </Description>
  </>
);

export default About;
