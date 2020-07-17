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
