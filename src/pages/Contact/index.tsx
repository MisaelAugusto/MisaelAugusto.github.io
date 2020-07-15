import React from 'react';
import {} from 'react-icons';
import { Link } from 'react-router-dom';

import { Header, ContactInfo } from './styles';

const Contact: React.FC = () => (
  <>
    <Header>
      <Link id="misael" to="/">
        Misael
        <br />
        Augusto
      </Link>
    </Header>
    <ContactInfo />
  </>
);

export default Contact;
