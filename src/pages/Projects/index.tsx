import React from 'react';
import { Link } from 'react-router-dom';
import { GiConsoleController } from 'react-icons/gi';
import { FiMonitor, FiSmartphone } from 'react-icons/fi';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { Header, Menu, Option, ScrollText } from './styles';

import SleepTime from '../../assets/projects.svg'; // Change this!!!

const options = [
  <Option>
    <img src={SleepTime} alt="SleepTime" draggable={false} />
    <Link to="/" draggable={false}>
      Sleep Time
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
    <ScrollMenu data={options} transition={0.8} wheel={false} />
    <Menu>
      <button type="button">
        <FiMonitor size={20} />
        <p>WEB</p>
      </button>
      <button type="button">
        <FiSmartphone size={20} />
        <p>MOBILE</p>
      </button>
      <button type="button">
        <GiConsoleController size={20} />
        <p>GAMES</p>
      </button>
    </Menu>
    <ScrollText>Click and drag to scroll &gt;&gt;</ScrollText>
  </>
);

export default Home;
