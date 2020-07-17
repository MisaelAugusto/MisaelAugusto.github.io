import React from 'react';

import Desk from '../../assets/desk.png';

const Footer: React.FC = () => (
  <footer
    style={{
      margin: '18px 0 0 0',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <img
      src={Desk}
      alt="Desk"
      style={{
        width: 360,
        height: 180
      }}
    />
  </footer>
);

export default Footer;
