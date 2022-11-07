import styled from "styled-components";

type PropsBackground = { backgroundimage: string };

export const ContainerBackgroundMovies = styled.div<PropsBackground>`
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e1e;
  background-image: url(${(props) => props.backgroundimage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  margin-bottom: 100px;

  h1 {
    text-align: center;
    margin: 20px;
    font-family: "Bebas Neue", "Bebas", sans-serif;
    font-weight: bolder;
    color: #e50914;
    font-size: 200px;
    letter-spacing: 10px;
    text-shadow: 2px 2px 20px #000;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 150px;
    }
  }

  @media (max-width: 525px) {
    h1 {
      font-size: 120px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 90px;
    }
  }
`;

export const ContainerCards = styled.div`
  min-height: 100vh;
  max-width: 1500px;
  margin: auto;
  padding: 0 50px 100px;
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 60px;
  row-gap: 100px;
`;
