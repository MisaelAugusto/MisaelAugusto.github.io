import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Option, Menu } from './styles';

import Github from '../../assets/contacts/github.svg';
import Email from '../../assets/contacts/email.svg';
import Linkedin from '../../assets/contacts/linkedin.svg';

const Contact: React.FC = () => (
  <>
    <Header>
      <Link id="misael" to="/">
        Misael
        <br />
        Augusto
      </Link>
    </Header>
    <Menu>
      <Option>
        <a href="https://github.com/MisaelAugusto" draggable={false}>
          <img src={Github} alt="Github" draggable={false} />
        </a>
      </Option>
      <Option>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=misael.costa@ccc.ufcg.edu.br&tf=1"
          draggable={false}
        >
          <img src={Email} alt="Email" draggable={false} />
        </a>
      </Option>
      <Option>
        <a
          href="https://www.linkedin.com/in/misael-augusto-b04073192/"
          draggable={false}
        >
          <img src={Linkedin} alt="Linkedin" draggable={false} />
        </a>
      </Option>
    </Menu>
  </>
);

export default Contact;
