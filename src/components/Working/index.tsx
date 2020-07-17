import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

const Working: React.FC = () => (
  <>
    <Header>
      <Link id="misael" to="/">
        Misael
        <br />
        Augusto
      </Link>
    </Header>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        margin: '172px 0'
      }}
    >
      Working here ...
    </div>
  </>
);

export default Working;
