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
  }

  #contact:hover {
    display: block;
    border-bottom: 4px solid #ffdd50;
  }
`;

export const Option = styled.div`
  color: #fff;
  margin: 12px 0;
  font-size: 32px;
  position: relative;
  transition: transform 0.2s;

  p {
    position: absolute;
    bottom: 64px;
    left: 44px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
