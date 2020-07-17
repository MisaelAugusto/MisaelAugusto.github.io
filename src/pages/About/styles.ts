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

export const Description = styled.main`
  margin: 0 230px;
  padding: 0;
  display: flex;
  justify-content: flex-start;

  img {
    position: relative;
    top: -40px;
    width: 240px;
    height: 240px;
    border-radius: 50%;
  }

  div {
    #hi {
      position: relative;
      right: 60px;
      font-size: 32px;
    }
    #description {
      position: relative;
      right: 30px;
      font-size: 24px;
    }
  }
`;
