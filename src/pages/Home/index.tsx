import React from 'react';
import { Link } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { Header, Option } from './styles';

import About from '../../assets/about.svg';
import Experience from '../../assets/experience.svg';
import Projects from '../../assets/projects.svg';
import Articles from '../../assets/articles.svg';
import Podcasts from '../../assets/podcasts.svg';

const options = [
  <Option id="about">
    <img src={About} alt="About" />
    <p>About</p>
  </Option>,
  <Option>
    <img src={Experience} alt="Experience" />
    <p>Experience</p>
  </Option>,
  <Option>
    <img src={Projects} alt="Projects" />
    <p>Projects</p>
  </Option>,
  <Option>
    <img src={Podcasts} alt="Podcasts" />
    <p>Podcasts</p>
  </Option>,
  <Option>
    <img src={Articles} alt="Articles" />
    <p>Articles</p>
  </Option>
];

const Home: React.FC = () => (
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
    <ScrollMenu
      data={options}
      clickWhenDrag={false}
      transition={0.6}
      dragging={false}
      alignOnResize
    />
  </>
);

export default Home;
