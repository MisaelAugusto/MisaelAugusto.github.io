import React from 'react';
import { Link } from 'react-router-dom';
import { GiConsoleController } from 'react-icons/gi';
import { FiMonitor, FiSmartphone } from 'react-icons/fi';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { Header, Menu, Option, ScrollText } from './styles';

import SleepTime from '../../assets/projects/sleep-time.svg';

const options = [
  <Option>
    <Link to="/" draggable={false}>
      <img src={SleepTime} alt="SleepTime" draggable={false} />
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
    </Header>
    <ScrollMenu
      data={options}
      transition={0.8}
      wheel={false}
      translate={0}
      clickWhenDrag={false}
    />
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
