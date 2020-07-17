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

  #contact:hover {
    border-bottom: 5px solid #ffdd50;
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

  a {
    bottom: 60px;
    left: 40px;
    color: #fff;
    position: absolute;
    text-decoration: none;

    &:hover {
      display: block;
      border-bottom: 1px solid #fff;
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ScrollText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 40px;
`;
