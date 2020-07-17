import React from 'react';
import { Link } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { Header, Option, ScrollText } from './styles';

import About from '../../assets/options/about.svg';
import Experience from '../../assets/options/experience.svg';
import Projects from '../../assets/options/projects.svg';
import Articles from '../../assets/options/articles.svg';
import Podcasts from '../../assets/options/podcasts.svg';

const options = [
  <Option>
    <img src={About} alt="About" draggable={false} />
    <Link to="/about" draggable={false}>
      About
    </Link>
  </Option>,
  <Option>
    <img src={Projects} alt="Projects" draggable={false} />
    <Link to="/projects" draggable={false}>
      Projects
    </Link>
  </Option>,
  <Option>
    <img src={Experience} alt="Experience" draggable={false} />
    <Link to="/experience" draggable={false}>
      Experience
    </Link>
  </Option>,
  <Option>
    <img src={Articles} alt="Articles" draggable={false} />
    <Link to="/podcasts" draggable={false}>
      Articles
    </Link>
  </Option>,
  <Option>
    <img src={Podcasts} alt="Podcasts" draggable={false} />
    <Link to="/articles" draggable={false}>
      Podcasts
    </Link>
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
    <ScrollMenu data={options} transition={0.8} wheel={false} translate={80} />
    <ScrollText>Click and drag to scroll &gt;&gt;</ScrollText>
  </>
);

export default Home;
