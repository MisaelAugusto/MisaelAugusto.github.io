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

export const Option = styled.div`
  margin: 12px 0 0 0;
  font-size: 32px;
  margin-right: 60px;
  position: relative;
  transition: transform 0.2s;

  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 140px;

  button {
    border: none;
    display: flex;
    background: none;
    align-items: center;
    flex-direction: column;
    transition: transform 0.2s;

    & + button {
      margin-left: 32px;
    }

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const ScrollText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 40px;
`;
