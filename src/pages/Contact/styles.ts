import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 80px;

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: black;
    font-size: 24px;
    text-decoration: none;

    & + a {
      margin-left: 12px;
    }
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
  margin: 28px 0 0 0;
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
  justify-content: space-between;
  padding: 0 80px;
`;
