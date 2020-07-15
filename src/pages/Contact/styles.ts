import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 80px;

  a {
    color: black;
    font-size: 24px;
    text-decoration: none;
  }

  #misael {
    padding-left: 8px;
    border-left: 4px solid #ffdd50;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const ContactInfo = styled.div``;
